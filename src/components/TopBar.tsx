import { Clock } from "./Clock";
import { useLiveListeners } from "@/hooks/useLiveListeners";

const PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLyTzwitHMGXAyxnaw27ZsY7hx0o4x_ZFA";

export function TopBar() {
  const count = useLiveListeners();

  return (
    <>
      <div className="safe-t safe-l fixed z-20">
        <Clock />
      </div>

      <div className="safe-t fixed left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 backdrop-blur-xl">
          <span className="size-1.5 rounded-full bg-accent-warm shadow-[0_0_8px_var(--accent)]" />
          <span className="text-[11px] tabular-nums tracking-wide text-white/80">
            {count} listening
          </span>
        </div>
      </div>

      <nav className="safe-t safe-r fixed z-20 flex items-center">
        <a
          href={PLAYLIST_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Open the playlist on YouTube Music"
          className="group flex items-center gap-2 rounded-full bg-white/95 py-1.5 pl-2 pr-3 text-neutral-900 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.8)] transition-colors hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
            <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M9.8 8.2 16 12l-6.2 3.8V8.2Z" fill="currentColor" />
          </svg>
          <span className="text-[13px] font-semibold tracking-tight">YT Music</span>
          <svg viewBox="0 0 12 12" className="size-3 opacity-70" aria-hidden="true">
            <path
              d="M3 9 9 3M4.2 3H9v4.8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </nav>
    </>
  );
}
