import type { Track } from "@/lib/tracks";

export type SkipAction =
  | { type: "seek"; to: number }
  | { type: "end" }
  | null;

/** Normalized, sorted, merged skip ranges for a track. */
export function normalizedRanges(track: Track) {
  const ranges = (track.skipRanges ?? [])
    .filter((r) => Number.isFinite(r.start) && Number.isFinite(r.end) && r.end > r.start)
    .map((r) => ({ start: Math.max(0, r.start), end: Math.max(0, r.end) }))
    .sort((a, b) => a.start - b.start);

  const merged: { start: number; end: number }[] = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r.start <= last.end + 0.05) last.end = Math.max(last.end, r.end);
    else merged.push({ ...r });
  }
  return merged;
}

export function hasTiming(track: Track) {
  return (
    typeof track.startAt === "number" ||
    typeof track.endAt === "number" ||
    (track.skipRanges?.length ?? 0) > 0
  );
}

/**
 * Decide what to do at a given playback position.
 * Returns a seek target (gap skip), an "end" signal (endAt reached), or null.
 * Pure — all loop/duplicate protection lives in the caller.
 */
export function resolveSkip(time: number, track: Track, duration?: number): SkipAction {
  if (!Number.isFinite(time)) return null;

  const endAt = typeof track.endAt === "number" ? track.endAt : undefined;
  if (endAt !== undefined && time >= endAt - 0.15) return { type: "end" };

  for (const r of normalizedRanges(track)) {
    if (time >= r.start - 0.15 && time < r.end - 0.15) {
      // Skipping past the usable end of the video counts as finishing the song.
      const limit = endAt ?? (duration && duration > 0 ? duration : undefined);
      if (limit !== undefined && r.end >= limit - 0.5) return { type: "end" };
      return { type: "seek", to: r.end };
    }
  }
  return null;
}
