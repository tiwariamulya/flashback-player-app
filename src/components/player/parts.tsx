import { useCallback, useRef, useState } from "react";
import { formatTime, type Track } from "@/lib/tracks";

/* ---------- module-scope sub-components (never define these inside a parent) ---------- */

export const GLASS =
  "border border-white/10 bg-gradient-to-b from-white/[0.15] to-white/[0.055] backdrop-blur-3xl backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]";

export function Vinyl({
  size,
  playing,
  videoId,
  title,
}: {
  size: number;
  playing: boolean;
  videoId?: string;
  title?: string;
}) {
  return (
    <div
      className="relative shrink-0 self-start"
      style={{ width: size, height: size }}
    >
      <div
        className="vinyl-spin size-full overflow-hidden rounded-full ring-1 ring-white/15 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.9)]"
        style={{
          animationPlayState: playing ? "running" : "paused",
          background:
            "repeating-radial-gradient(circle at 50% 50%, #131313 0 2px, #1d1d1d 2px 4px)",
        }}
      >
        {videoId ? (
          <img
            src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
            alt={title ? `${title} cover art` : "Cover art"}
            loading="lazy"
            className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{ minWidth: "100%" }}
          />
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0 2px, rgba(255,255,255,0.05) 2px 4px), radial-gradient(circle at 32% 28%, rgba(255,255,255,0.18), transparent 55%)",
          }}
        />

      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40"
      />
    </div>
  );
}


export function Meta({ track, compact }: { track: Track; compact?: boolean }) {
  return (
    <div className="min-w-0 flex-1">
      <p
        className="truncate font-semibold text-white"
        style={{ fontSize: compact ? 15 : 15 }}
      >
        {track.title}
      </p>
      <p className="truncate text-white/70" style={{ fontSize: 12.5 }}>
        {track.artist} · {track.film} · {track.year}
      </p>
    </div>
  );
}

export function SeekBar({
  current,
  duration,
  onSeek,
}: {
  current: number;
  duration: number;
  onSeek: (seconds: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const pct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  const seekFromEvent = useCallback(
    (clientX: number) => {
      const el = ref.current;
      if (!el || duration <= 0) return;
      const r = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
      onSeek(ratio * duration);
    },
    [duration, onSeek],
  );

  return (
    <div
      ref={ref}
      role="slider"
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(current)}
      tabIndex={0}
      className="group relative flex h-6 w-full cursor-pointer touch-none items-center"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragging(true);
        seekFromEvent(e.clientX);
      }}
      onPointerMove={(e) => dragging && seekFromEvent(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onSeek(Math.min(duration, current + 5));
        if (e.key === "ArrowLeft") onSeek(Math.max(0, current - 5));
      }}
    >
      <div className="relative h-[3px] w-full rounded-full bg-white/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent-warm shadow-[0_0_10px_2px_color-mix(in_oklch,var(--accent)_60%,transparent)]"
          style={{ width: `${pct}%` }}
        />
        <div
          className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow transition-opacity group-hover:opacity-100"
          style={{ left: `${pct}%`, opacity: dragging ? 1 : undefined }}
        />
      </div>
    </div>
  );
}

export function TimeReadout({ current, duration }: { current: number; duration: number }) {
  return (
    <span className="shrink-0 tabular-nums text-white/60" style={{ fontSize: 10.5 }}>
      {formatTime(current)} / {formatTime(duration)}
    </span>
  );
}

function IconPrev() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M7 6h2v12H7zM19 6v12l-9-6z" />
    </svg>
  );
}
function IconNext() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current">
      <path d="M15 6h2v12h-2zM5 6l9 6-9 6z" />
    </svg>
  );
}
function IconPlay({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" className="fill-current" style={{ width: size, height: size }}>
      <path d="M8 5l12 7-12 7z" />
    </svg>
  );
}
function IconPause({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" className="fill-current" style={{ width: size, height: size }}>
      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
    </svg>
  );
}

export function Transport({
  playing,
  onPrev,
  onNext,
  onToggle,
  playSize,
  hit,
}: {
  playing: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggle: () => void;
  playSize: number;
  hit: number;
}) {
  const side =
    "flex items-center justify-center rounded-full text-white/75 transition-colors hover:text-white";
  return (
    <div className="flex shrink-0 items-center gap-1">
      <button
        type="button"
        aria-label="Previous track"
        onClick={onPrev}
        className={side}
        style={{ width: hit, height: hit }}
      >
        <IconPrev />
      </button>
      <button
        type="button"
        aria-label={playing ? "Pause" : "Play"}
        onClick={onToggle}
        className="flex items-center justify-center rounded-full bg-gradient-to-b from-accent-warm to-accent-deep text-black ring-1 ring-white/25 shadow-[0_8px_24px_-6px_color-mix(in_oklch,var(--accent)_70%,transparent)] transition-transform active:scale-95"
        style={{ width: playSize, height: playSize }}
      >
        {playing ? <IconPause size={playSize * 0.36} /> : <IconPlay size={playSize * 0.36} />}
      </button>
      <button
        type="button"
        aria-label="Next track"
        onClick={onNext}
        className={side}
        style={{ width: hit, height: hit }}
      >
        <IconNext />
      </button>
    </div>
  );
}

export function PlaylistTabs({
  names,
  active,
  onSelect,
}: {
  names: { id: string; name: string }[];
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className={`flex items-center gap-1 rounded-full p-1 ${GLASS}`}>
      {names.map((p, i) => (
        <button
          key={p.id}
          type="button"
          onClick={() => onSelect(i)}
          className={`rounded-full px-3 py-1 text-[11px] tracking-wide transition-colors ${
            i === active ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}
