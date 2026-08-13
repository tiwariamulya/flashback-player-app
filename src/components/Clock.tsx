import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kathmandu",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function Clock() {
  const [parts, setParts] = useState<{ h: string; m: string; ap: string } | null>(null);

  useEffect(() => {
    const tick = () => {
      const p = fmt.formatToParts(new Date());
      setParts({
        h: p.find((x) => x.type === "hour")?.value ?? "",
        m: p.find((x) => x.type === "minute")?.value ?? "",
        ap: (p.find((x) => x.type === "dayPeriod")?.value ?? "").toLowerCase(),
      });
    };
    tick();
    const t = window.setInterval(tick, 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="font-medium tabular-nums text-white/85 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
      {parts ? (
        <span className="text-sm tracking-wide">
          {parts.h}
          <span className="blink px-px">:</span>
          {parts.m}
          <span className="ml-1 text-[10.5px] uppercase tracking-[0.18em] text-white/60">
            {parts.ap} NPT
          </span>
        </span>
      ) : (
        <span className="text-sm opacity-0">--:--</span>
      )}
    </div>
  );
}
