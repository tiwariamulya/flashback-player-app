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
 * Source: "Driver Dai" playlist (PLS2fUsNYw8KQ).
 */
export const playlists: Playlist[] = [
  {
    id: "radio",
    name: "Radio",
    blurb: "On loop",
    tracks: [
      { id: "t1", title: "Masterai Banera", artist: "Trisana Music", film: "DJ Cover", year: 2026, duration: 596, videoId: "yJJH_wDo7RI" },
      { id: "t2", title: "Driver Ma Mailo", artist: "Badal Thapa", film: "Single", year: 2010, duration: 263, videoId: "T88PAIFtVIk" },
      { id: "t3", title: "Sailo Ma Charghare", artist: "Bishwo Dong", film: "Single", year: 2025, duration: 382, videoId: "xIZISD1JqoQ" },
      { id: "t4", title: "Bokejhar (Mero Deuta Bataima Bhetiyo)", artist: "Basanta Thapa & Bishnu Majhi", film: "Lok Dohori", year: 2019, duration: 641, videoId: "0N8F4WKMA84" },
      { id: "t5", title: "Pidalu", artist: "Tejash Regmi & Bishnu Majhi", film: "Lok Dohori", year: 2018, duration: 611, videoId: "Plrb7AqN5Z4" },
      { id: "t6", title: "Jaljala", artist: "Kulendra B.K. & Sunita Budha", film: "Lok Dohori", year: 2021, duration: 640, videoId: "sJngbc5_cz0" },
      { id: "t7", title: "Myagdi Ruma Le", artist: "7Seas Cinema", film: "Roll No. 1", year: 2026, duration: 275, videoId: "UrX1j9zd-yc" },
      { id: "t8", title: "Chainejo Jindaganima", artist: "Sujan Chapagain & Salina B.K.", film: "Unko Sweater", year: 2025, duration: 262, videoId: "-g4HhCkeU8g" },
      { id: "t9", title: "Khairenima Gate", artist: "Bhagwan Bhandari", film: "Single", year: 2025, duration: 315, videoId: "eadBdGLAW5U" },
      { id: "t10", title: "Lamjunge Dadaima Hawa Sarara (Blues)", artist: "AI Core Music", film: "Cover", year: 2025, duration: 318, videoId: "XeNmYNQYvBY" },
      { id: "t11", title: "Sora Barse Umerai Ma (Cover)", artist: "AI Core Music", film: "Cover", year: 2025, duration: 197, videoId: "GuP3PWNjww4" },
      { id: "t12", title: "Ma Ta Dhale Dhale", artist: "Shanta Rani Pariyar", film: "Teej Song", year: 2025, duration: 504, videoId: "bE1slS_aI3g" },
      { id: "t13", title: "Aunty Lover", artist: "Ashish Aviral & Kala Lamsal", film: "Single", year: 2025, duration: 589, videoId: "R1OhIJQdHJ0" },
      { id: "t14", title: "Launani Yasto Bhaye Ma Kina", artist: "Suresh Anjan", film: "Lok Dohori", year: 2026, duration: 918, videoId: "bFr8Qs_A010" },
      { id: "t15", title: "Pir Nagara Manjari (Remix)", artist: "LAXMA", film: "Old Is Gold Remix", year: 2026, duration: 383, videoId: "AUbrv8WVJhw" },
      { id: "t16", title: "Pokhara Prithivi Chowkaima", artist: "Shanta Rani Pariyar & Chhabi Raj Sunar", film: "Lok Dohori", year: 2025, duration: 730, videoId: "EsTt9jy_mG8" },
      { id: "t17", title: "Nyauli Banaima", artist: "OSR Digital", film: "Baristha Balaram", year: 2025, duration: 282, videoId: "jWOsgaebblE" },
      { id: "t18", title: "Manung Kotaima", artist: "Badri Sapkota & Shanti Shree Pariyar", film: "Lok Dohori", year: 2025, duration: 684, videoId: "TscgMApt6so" },
      { id: "t19", title: "Kalo Keshma Reli Mai", artist: "AI Nepali Blues", film: "AI Cover", year: 2025, duration: 231, videoId: "BpQCRIhLlIQ" },
      { id: "t20", title: "Putali", artist: "Ashish Aviral & Eleena Chauhan", film: "Single", year: 2025, duration: 312, videoId: "sVs_Ifd9yOI" },
      { id: "t21", title: "Timro Nai Maya Lagdacha Saili", artist: "Nepali Blues Dhun", film: "Cover", year: 2025, duration: 333, videoId: "xDS7hQ57wXw" },
      { id: "t22", title: "Gandaki", artist: "Diplov Khati & Devi Gharti", film: "Lok Dohori", year: 2025, duration: 811, videoId: "9_POegS0QH4" },
      { id: "t23", title: "Mauri Tyasai Ghumdaina", artist: "Asian Beat Vibes", film: "AI Remix Cover", year: 2026, duration: 283, videoId: "s9vyP31kuuI" },
    ],
  },
];


export const formatTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
