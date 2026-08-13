import { useEffect, useState } from "react";
import { Clock } from "./Clock";

const PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLyTzwitHMGXAyxnaw27ZsY7hx0o4x_ZFA";


export function TopBar({ listeners }: { listeners: number }) {
  const [count, setCount] = useState(listeners);

  useEffect(() => {
    const t = window.setInterval(() => {
      setCount((c) => {
        const next = c + (Math.random() < 0.5 ? -1 : 1) * Math.ceil(Math.random() * 3);
        return Math.min(listeners + 40, Math.max(listeners - 30, next));
      });
    }, 4000);
    return () => window.clearInterval(t);
  }, [listeners]);

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
          aria-label="Open the playlist on YouTube"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 backdrop-blur-xl transition-colors hover:bg-white/[0.16]"
        >
          <svg viewBox="0 0 28 20" className="h-4 w-[22px]" aria-hidden="true">
            <path
              fill="#FF0033"
              d="M27.4 3.1A3.5 3.5 0 0 0 24.9.6C22.7 0 14 0 14 0S5.3 0 3.1.6A3.5 3.5 0 0 0 .6 3.1C0 5.3 0 10 0 10s0 4.7.6 6.9a3.5 3.5 0 0 0 2.5 2.5C5.3 20 14 20 14 20s8.7 0 10.9-.6a3.5 3.5 0 0 0 2.5-2.5C28 14.7 28 10 28 10s0-4.7-.6-6.9Z"
            />
            <path fill="#fff" d="M11.2 14.3 18.4 10l-7.2-4.3v8.6Z" />
          </svg>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
            Playlist
          </span>
        </a>
      </nav>

    </>
  );
}
