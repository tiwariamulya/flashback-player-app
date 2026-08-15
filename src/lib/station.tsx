import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { playlists } from "@/lib/tracks";

const STORAGE_KEY = "driver-dai:station";
const DEFAULT_STATION = playlists[0]!.id;

function readSavedStation(): string {
  if (typeof window === "undefined") return DEFAULT_STATION;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_STATION;
  const exists = playlists.some((p) => p.id === raw && p.tracks.length > 0);
  return exists ? raw : DEFAULT_STATION;
}

type StationCtx = {
  stationId: string;
  setStationId: (id: string) => void;
};

const Ctx = createContext<StationCtx | null>(null);

export function StationProvider({ children }: { children: ReactNode }) {
  const [stationId, setStationId] = useState(DEFAULT_STATION);

  useEffect(() => {
    setStationId(readSavedStation());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, stationId);
  }, [stationId]);

  const value = useMemo(() => ({ stationId, setStationId }), [stationId]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStation() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStation must be used inside StationProvider");
  return ctx;
}

export const CONTACT_EMAIL = "contact@amulya.tech";
