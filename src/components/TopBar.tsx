import { useEffect, useState } from "react";
import { Clock } from "./Clock";

const links = [
  { label: "IG", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "YT", href: "https://youtube.com" },
];

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

      <nav className="safe-t safe-r fixed z-20 flex items-center gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/65 transition-colors hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
