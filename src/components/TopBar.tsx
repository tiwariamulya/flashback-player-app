import { Clock } from "./Clock";
import { useLiveListeners } from "@/hooks/useLiveListeners";

const PLAYLIST_URL =
  "https://youtube.com/playlist?list=PLS2fUsNYw8KQ&si=AWDwi_DFcKw9XktP";

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
          className="group flex items-center gap-2 rounded-full px-1 py-1 text-white transition-opacity hover:opacity-80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 176 176" className="size-6 shrink-0" aria-hidden="true">
            <circle cx="88" cy="88" r="88" fill="red" />
            <path fill="#FFF" d="M88 46c23.1 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.9-42 42-42m0-4c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6 46-46-20.6-46-46-46" />
            <path fill="#FFF" d="m72 111 39-24-39-22z" />
          </svg>
          <span className="hidden text-[13px] font-semibold tracking-tight sm:inline">
            YT Music
          </span>
          <svg viewBox="0 0 12 12" className="hidden size-3 opacity-70 sm:block" aria-hidden="true">
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
