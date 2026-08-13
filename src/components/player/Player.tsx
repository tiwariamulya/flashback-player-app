import { useCallback, useEffect, useRef, useState } from "react";
import { playlists, shuffle } from "@/lib/tracks";
import { loadYouTubeApi, trackEvent, type YTPlayer } from "@/lib/youtube";
import { resolveSkip } from "@/lib/skip";
import { autoStartAt, inSilentTail, resolveStall, type StallState } from "@/lib/autoskip";
import {
  GLASS,
  Meta,
  MuteButton,
  PlaylistButton,
  SongList,
  SeekBar,
  TimeReadout,
  Transport,
  Vinyl,
} from "./parts";
import type { Track } from "@/lib/tracks";

function DesktopPlayer(props: {
  track: Track;
  playing: boolean;
  current: number;
  duration: number;
  onSeek: (s: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onToggle: () => void;
  muted: boolean;
  onToggleMute: () => void;
  listOpen: boolean;
  onToggleList: () => void;
}) {
  const { track, playing, current, duration } = props;
  return (
    <div className={`hidden w-full items-center justify-between gap-4 rounded-full p-3 pr-5 sm:flex ${GLASS}`}>
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <Vinyl size={80} playing={playing} videoId={track.videoId} title={track.title} />
        <div className="min-w-0 flex-1">
          <Meta track={track} />
          <SeekBar current={current} duration={duration} onSeek={props.onSeek} />
        </div>
      </div>
      <Transport
        playing={playing}
        onPrev={props.onPrev}
        onNext={props.onNext}
        onToggle={props.onToggle}
        playSize={40}
        hit={34}
      />
      <div className="flex flex-1 shrink-0 items-center justify-end gap-2">
        <TimeReadout current={current} duration={duration} />
        <MuteButton muted={props.muted} onToggle={props.onToggleMute} />
        <PlaylistButton open={props.listOpen} onToggle={props.onToggleList} />
      </div>
    </div>
  );
}

function MobilePlayer(props: {
  track: Track;
  playing: boolean;
  current: number;
  duration: number;
  onSeek: (s: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onToggle: () => void;
  muted: boolean;
  onToggleMute: () => void;
  listOpen: boolean;
  onToggleList: () => void;
}) {
  const { track, playing, current, duration } = props;
  return (
    <div className={`flex w-full flex-col gap-1 rounded-[22px] px-3 py-2.5 sm:hidden ${GLASS}`}>
      <div className="flex items-center gap-3">
        <Vinyl size={54} playing={playing} videoId={track.videoId} title={track.title} />
        <Meta track={track} compact />
      </div>
      <SeekBar current={current} duration={duration} onSeek={props.onSeek} />
      <div className="grid grid-cols-3 items-center gap-2">
        <TimeReadout current={current} duration={duration} />
        <div className="flex justify-center">
          <Transport
            playing={playing}
            onPrev={props.onPrev}
            onNext={props.onNext}
            onToggle={props.onToggle}
            playSize={44}
            hit={38}
          />
        </div>
        <div className="flex justify-end">
          <MuteButton muted={props.muted} onToggle={props.onToggleMute} hit={32} />
          <PlaylistButton open={props.listOpen} onToggle={props.onToggleList} hit={32} />
        </div>
      </div>
    </div>
  );
}

export function Player() {
  const [pl, setPl] = useState(0);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [tracks, setTracks] = useState<Track[]>(() => (playlists[0]?.tracks ?? []));

  const playerRef = useRef<YTPlayer | null>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  idxRef.current = idx;

  /* guards so gap-skipping never loops, double-seeks or double-advances */
  const advancedRef = useRef(false);
  const pendingSeekRef = useRef<number | null>(null);
  const lastSeekAtRef = useRef(0);
  const stallRef = useRef<StallState>({ lastTime: -1, since: 0 });

  const list = playlists[pl] ?? playlists[0]!;
  const track = tracks[idx] ?? list.tracks[0]!;
  const hasVideo = Boolean(track.videoId);
  const trackRef = useRef(track);
  trackRef.current = track;
  const tracksRef = useRef(tracks);
  tracksRef.current = tracks;

  /* shuffle the running order after hydration so every visit differs */
  useEffect(() => {
    setTracks(shuffle((playlists[pl] ?? playlists[0]!).tracks));
    setIdx(0);
  }, [pl]);

  const countRef = useRef(1);
  countRef.current = Math.max(1, tracks.length);

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % countRef.current);
  }, []);
  /** advance once per track, whatever triggers it (endAt, ENDED, error) */
  const advanceOnce = useCallback(() => {
    if (advancedRef.current) return;
    advancedRef.current = true;
    next();
  }, [next]);
  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + countRef.current) % countRef.current);
  }, []);

  const advanceOnceRef = useRef(advanceOnce);
  advanceOnceRef.current = advanceOnce;

  /* create the player once */
  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(hostRef.current, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: () => setReady(true),
          onStateChange: (e: { data: number }) => {
            const S = window.YT!.PlayerState;
            if (e.data === S.PLAYING) setPlaying(true);
            if (e.data === S.PAUSED) setPlaying(false);
            if (e.data === S.ENDED) advanceOnceRef.current();
          },
          onError: (e: { data: number }) => {
            const cur = tracksRef.current[idxRef.current];
            trackEvent("yt_player_error", { code: e.data, videoId: cur?.videoId });
            advanceOnceRef.current();
          },
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* load the current track */
  useEffect(() => {
    const p = playerRef.current;
    const startSeconds = autoStartAt(track.startAt);
    advancedRef.current = false;
    pendingSeekRef.current = null;
    stallRef.current = { lastTime: -1, since: Date.now() };
    setCurrent(startSeconds);
    setDuration(track.duration);
    if (!p || !ready || !track.videoId) return;
    const args = { videoId: track.videoId, startSeconds };
    if (playing) p.loadVideoById(args);
    else p.cueVideoById(args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track.videoId, ready]);

  /* progress ticker */
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      const time = p.getCurrentTime() ?? 0;
      setCurrent(time);
      const d = p.getDuration?.() ?? 0;
      if (d > 0) setDuration(d);

      if (advancedRef.current) return;

      /* wait for an in-flight seek to land before deciding anything else */
      const pending = pendingSeekRef.current;
      if (pending !== null) {
        if (time >= pending - 0.3 || Date.now() - lastSeekAtRef.current > 3000) {
          pendingSeekRef.current = null;
        }
        return;
      }

      const action = resolveSkip(time, trackRef.current, d);

      /* no explicit timing hit — fall back to automatic heuristics */
      if (!action) {
        if (inSilentTail(time, d, trackRef.current.endAt)) {
          advanceOnceRef.current();
          return;
        }
        const nudge = resolveStall(time, Date.now(), stallRef.current);
        if (nudge !== null && d > 0 && nudge < d - 1) {
          pendingSeekRef.current = nudge;
          lastSeekAtRef.current = Date.now();
          setCurrent(nudge);
          p.seekTo(nudge, true);
        }
        return;
      }

      if (action.type === "end") {
        advanceOnceRef.current();
        return;
      }
      pendingSeekRef.current = action.to;
      lastSeekAtRef.current = Date.now();
      setCurrent(action.to);
      p.seekTo(action.to, true);
    }, 250);
    return () => window.clearInterval(t);
  }, [playing]);

  const onToggle = useCallback(() => {
    const p = playerRef.current;
    if (!p || !track.videoId) return;
    if (playing) p.pauseVideo();
    else p.playVideo();
  }, [playing, track.videoId]);

  const onToggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) p.unMute?.();
    else p.mute?.();
    setMuted((m) => !m);
  }, [muted]);

  const onPick = useCallback((i: number) => {
    setIdx(i);
    setListOpen(false);
  }, []);

  const onSeek = useCallback((s: number) => {
    setCurrent(s);
    pendingSeekRef.current = null;
    playerRef.current?.seekTo(s, true);
  }, []);

  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3">

      {/* Audio-only: the YouTube iframe is mounted off-screen so only sound plays. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 -z-50 h-[1px] w-[1px] overflow-hidden opacity-0"
      >
        <div ref={hostRef} className="size-full" />
      </div>
      {!hasVideo && (
        <p className="px-6 text-center text-[12px] leading-relaxed text-white/70">
          No videoId yet — add one in{" "}
          <code className="text-white/90">src/lib/tracks.ts</code>.
        </p>
      )}


      {listOpen && (
        <SongList tracks={tracks} activeId={track.id} onPick={onPick} />
      )}

      <DesktopPlayer
        track={track}
        playing={playing}
        current={current}
        duration={duration}
        onSeek={onSeek}
        onPrev={prev}
        onNext={next}
        onToggle={onToggle}
        muted={muted}
        onToggleMute={onToggleMute}
        listOpen={listOpen}
        onToggleList={() => setListOpen((o) => !o)}
      />
      <MobilePlayer
        track={track}
        playing={playing}
        current={current}
        duration={duration}
        onSeek={onSeek}
        onPrev={prev}
        onNext={next}
        onToggle={onToggle}
        muted={muted}
        onToggleMute={onToggleMute}
        listOpen={listOpen}
        onToggleList={() => setListOpen((o) => !o)}
      />
    </div>
  );
}
