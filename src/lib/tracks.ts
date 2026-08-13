export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  /** seconds — fallback until the YouTube player reports the real duration */
  duration: number;
  /**
   * YouTube videoId. Only uploads from the rights holder's own channel with
   * embedding enabled. No fan re-uploads, no "sped up" edits.
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
 * Source: "Nepali songs" playlist (PLyTzwitHMGXAyxnaw27ZsY7hx0o4x_ZFA),
 * filtered down to artist / label channel uploads.
 */
export const playlists: Playlist[] = [
  {
    id: "radio",
    name: "Radio",
    blurb: "On loop",
    tracks: [
      { id: "s1", title: "Timro Pratiksa", artist: "Shallum Lama", film: "Single", year: 2022, duration: 243, videoId: "0_sZlZn8aLY" },
      { id: "s2", title: "Je Chhau Timi", artist: "Swoopna Suman × Samir Shrestha", film: "Single", year: 2021, duration: 241, videoId: "_Tk9_kPpO1U" },
      { id: "s3", title: "Sasto Mutu", artist: "Sajjan Raj Vaidya", film: "Single", year: 2020, duration: 303, videoId: "XcEC2q4CotY" },
      { id: "s4", title: "Risaune Bhaye", artist: "Sushant KC", film: "Single", year: 2020, duration: 200, videoId: "cNBmzxE6Jf0" },
      { id: "s5", title: "Parkha Na", artist: "Sushant KC ft. Jhuma Limbu", film: "Single", year: 2021, duration: 242, videoId: "qQujA8u1zGI" },
      { id: "s6", title: "Jhyal Bata", artist: "Sushant KC", film: "Single", year: 2021, duration: 228, videoId: "6-a_wfFF_Xg" },
      { id: "s7", title: "Thamana Haat", artist: "Samir Shrestha", film: "Single", year: 2021, duration: 233, videoId: "6Lw5FdAsAfE" },
      { id: "b1", title: "Kasari / कसरी", artist: "Yabesh Thapa", film: "Single", year: 2021, duration: 252, videoId: "vnHTrxV7TMc" },
      { id: "b2", title: "Aakhale", artist: "Yabesh Thapa × TWK", film: "Single", year: 2022, duration: 174, videoId: "mF8RkRT5Nrs" },
      { id: "b3", title: "Alapatra / अलपत्र", artist: "Yabesh Thapa", film: "Single", year: 2020, duration: 379, videoId: "-0h0NOBfk_k" },
      { id: "b4", title: "Rahar / रहर", artist: "Oshin Karki", film: "Single", year: 2021, duration: 251, videoId: "ta-uwUBYUMs" },
      { id: "b5", title: "Maya", artist: "Ashutosh KC", film: "Single", year: 2021, duration: 283, videoId: "kEbcHhNsRoU" },
      { id: "b6", title: "Maya", artist: "Ayush Gauchan", film: "Single", year: 2022, duration: 183, videoId: "-eSj6Y_jdr8" },
      { id: "b7", title: "Khusi", artist: "The Dreamcatchers", film: "Single", year: 2021, duration: 238, videoId: "-Pr42D1e1GI" },
      { id: "b8", title: "Sparsha Sangeet", artist: "Purna Rai & Dajubhaiharu", film: "Single", year: 2021, duration: 464, videoId: "K-w04FG6eyI" },
      { id: "r1", title: "Yatra", artist: "VTEN", film: "Single", year: 2020, duration: 382, videoId: "7RN8gYxHW54" },
      { id: "r2", title: "Batash", artist: "Shashwot Khadka", film: "Single", year: 2022, duration: 180, videoId: "AtoZw7o2kRo" },
      { id: "r3", title: "Timi Nacha Na", artist: "Wangden Sherpa", film: "Single", year: 2022, duration: 181, videoId: "wAHg_eK9eW4" },
      { id: "r4", title: "Ko Haw Timi", artist: "Prashant Ezekiel Rai", film: "Single", year: 2022, duration: 211, videoId: "9CjhJI4XFhA" },
      { id: "r5", title: "Timi Sangai", artist: "Apurva Tamang", film: "Single", year: 2022, duration: 147, videoId: "Qaj2TceZGGU" },
      { id: "r6", title: "Tara Bolna Mann Lagcha (Khola Paari)", artist: "Aayush Yonjan", film: "AV Records", year: 2022, duration: 194, videoId: "p6HyT_GXg28" },
      { id: "r7", title: "Ek Safar", artist: "Sono Lem", film: "Single", year: 2022, duration: 181, videoId: "HO_JOsx2tDo" },
      { id: "r8", title: "India", artist: "ST MAN ft. Yung 22 & Big Norzza", film: "Single", year: 2021, duration: 276, videoId: "oM6kM_J9xgE" },
    ],
  },
];

export const formatTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
