import { useEffect, useRef, useState } from "react";
import { Clock } from "./Clock";
import { useLiveListeners } from "@/hooks/useLiveListeners";
import { playlists } from "@/lib/tracks";
import { CONTACT_EMAIL, useStation } from "@/lib/station";

export function TopBar() {
  const count = useLiveListeners();
  const { stationId, setStationId } = useStation();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const active = playlists.find((p) => p.id === stationId) ?? playlists[0]!;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="safe-t safe-l fixed z-20">
        <Clock />
      </div>

      <div className="safe-t fixed left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.08] px-2.5 py-1 backdrop-blur-xl">
          <span className="size-1.5 rounded-full bg-accent-warm shadow-[0_0_8px_var(--accent)]" />
          <span className="text-[11px] tabular-nums tracking-wide text-white/80">
            {count} listening
          </span>
        </div>
      </div>

      <nav ref={wrapRef} className="safe-t safe-r fixed z-30 flex items-center">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex max-w-[44vw] items-center gap-1.5 rounded-full border border-white/10 bg-gradient-to-b from-white/[0.15] to-white/[0.055] px-2.5 py-1 text-white backdrop-blur-xl transition-colors hover:bg-white/[0.14]"
        >
          <span className="truncate text-sm font-medium tracking-wide">
            {active.name}
          </span>
          <svg
            viewBox="0 0 12 12"
            className={`size-2.5 shrink-0 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="m2.5 4.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div
            role="menu"
            className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-white/10 bg-black/60 p-1 backdrop-blur-3xl backdrop-saturate-[1.7] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)]"
          >
            {playlists.map((p) => {
              const empty = p.tracks.length === 0;
              return (
                <button
                  key={p.id}
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    if (!empty) setStationId(p.id);
                    setOpen(false);
                  }}
                  disabled={empty}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left transition-colors ${
                    empty ? "cursor-not-allowed opacity-50" : "hover:bg-white/10"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[12px] font-medium text-white">
                      {p.name}
                    </span>
                    <span className="block truncate text-[10px] text-white/55">
                      {empty ? "Coming soon" : p.blurb}
                    </span>
                  </span>
                  {p.id === stationId && !empty && (
                    <span className="size-1.5 shrink-0 rounded-full bg-accent-warm shadow-[0_0_8px_var(--accent)]" />
                  )}
                </button>
              );
            })}


            <div className="my-1 h-px bg-white/10" />

            <a
              role="menuitem"
              href={`mailto:${CONTACT_EMAIL}?subject=Playlist%20recommendation`}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-white/85 transition-colors hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium">Recommend a route</span>
                <span className="block truncate text-[11px] text-white/55">{CONTACT_EMAIL}</span>
              </span>
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

