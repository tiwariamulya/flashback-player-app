/**
 * Heuristic auto-skip for YouTube-embedded tracks.
 *
 * The YouTube IFrame API never exposes raw audio (cross-origin media + ToS),
 * so true waveform silence detection is impossible for embeds. Instead we use
 * timing/playback signals that ARE observable:
 *
 *  - lead-in trim: uploads almost always open with a beat of dead air
 *  - tail trim: outros/end-cards are silent, so advance early
 *  - stall nudge: playhead frozen while the player reports PLAYING
 *
 * All pure functions — the caller owns every guard/timer.
 */

export type AutoSkipConfig = {
  /** seconds of assumed dead air at the start of a video */
  leadIn: number;
  /** seconds before the reported duration to treat as silent outro */
  tailTrim: number;
  /** playhead frozen this long (s) while PLAYING => nudge forward */
  stallAfter: number;
  /** how far (s) to nudge on a stall */
  stallNudge: number;
};

/** "Balanced" profile: trims dead air without clipping soft intros. */
export const BALANCED: AutoSkipConfig = {
  leadIn: 1.2,
  tailTrim: 2.5,
  stallAfter: 1.5,
  stallNudge: 1,
};

/** Start offset for a track with no explicit startAt. */
export function autoStartAt(startAt: number | undefined, cfg: AutoSkipConfig = BALANCED) {
  if (typeof startAt === "number") return Math.max(0, startAt);
  return cfg.leadIn;
}

/** True when the playhead has entered the silent tail of the video. */
export function inSilentTail(
  time: number,
  duration: number,
  endAt: number | undefined,
  cfg: AutoSkipConfig = BALANCED,
) {
  if (typeof endAt === "number") return false; // explicit timing wins
  if (!Number.isFinite(time) || !Number.isFinite(duration) || duration <= cfg.tailTrim * 2) {
    return false;
  }
  return time >= duration - cfg.tailTrim;
}

export type StallState = { lastTime: number; since: number };

/**
 * Detect a frozen playhead. Returns the seek target to nudge past the dead
 * spot, or null. `now` is a monotonic ms timestamp.
 */
export function resolveStall(
  time: number,
  now: number,
  state: StallState,
  cfg: AutoSkipConfig = BALANCED,
): number | null {
  if (!Number.isFinite(time)) return null;
  if (Math.abs(time - state.lastTime) > 0.15) {
    state.lastTime = time;
    state.since = now;
    return null;
  }
  if (now - state.since < cfg.stallAfter * 1000) return null;
  state.lastTime = time;
  state.since = now;
  return time + cfg.stallNudge;
}
