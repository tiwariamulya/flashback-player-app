import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { playlists } from "@/lib/tracks";

type StationCtx = {
  stationId: string;
  setStationId: (id: string) => void;
};

const Ctx = createContext<StationCtx | null>(null);

export function StationProvider({ children }: { children: ReactNode }) {
  const [stationId, setStationId] = useState(playlists[0]!.id);
  const value = useMemo(() => ({ stationId, setStationId }), [stationId]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStation() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStation must be used inside StationProvider");
  return ctx;
}

export const CONTACT_EMAIL = "contact@amulya.tech";
