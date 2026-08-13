export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  /** seconds — fallback until the YouTube player reports the real duration */
  duration: number;
  /**
   * YouTube videoId. ONLY use uploads you own, that are licensed to you, or that
   * live on the rights holder's own channel with embedding enabled.
   * Leave "" and the player will show a placeholder instead of playing.
   */
  videoId: string;
};

export type Playlist = {
  id: string;
  name: string;
  blurb: string;
  tracks: Track[];
};

/**
 * Adding a song is a one-line change: drop another object into a tracks array.
 */
export const playlists: Playlist[] = [
  {
    id: "evening-bus",
    name: "Evening Bus",
    blurb: "Dusty windows, orange light",
    tracks: [
      { id: "eb-1", title: "Track One", artist: "Add your artist", film: "—", year: 1978, duration: 240, videoId: "" },
      { id: "eb-2", title: "Track Two", artist: "Add your artist", film: "—", year: 1981, duration: 265, videoId: "" },
      { id: "eb-3", title: "Track Three", artist: "Add your artist", film: "—", year: 1984, duration: 212, videoId: "" },
    ],
  },
  {
    id: "monsoon-radio",
    name: "Monsoon Radio",
    blurb: "Rain on a tin roof",
    tracks: [
      { id: "mr-1", title: "Track One", artist: "Add your artist", film: "—", year: 1972, duration: 288, videoId: "" },
      { id: "mr-2", title: "Track Two", artist: "Add your artist", film: "—", year: 1976, duration: 231, videoId: "" },
    ],
  },
  {
    id: "late-night",
    name: "Late Night",
    blurb: "After the last show",
    tracks: [
      { id: "ln-1", title: "Track One", artist: "Add your artist", film: "—", year: 1969, duration: 255, videoId: "" },
      { id: "ln-2", title: "Track Two", artist: "Add your artist", film: "—", year: 1988, duration: 274, videoId: "" },
    ],
  },
];

export const formatTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
