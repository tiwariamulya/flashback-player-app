export type SkipRange = { start: number; end: number };

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
  /** optional: start playback here (skips intro talk / silence) */
  startAt?: number;
  /** optional: treat this as the end of the song and move to the next track */
  endAt?: number;
  /** optional: sections to jump over automatically */
  skipRanges?: SkipRange[];
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
    id: "all-nepal",
    name: "All Nepal",
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
  {
    id: "rnac-boudha",
    name: "RNAC - Boudha",
    blurb: "Selo & Tamang beats",
    tracks: [
      { id: "rb1", title: "Selfie Hanau Na", artist: "Bishwo Dong & Kamala Dong", film: "Selo Creation", year: 2025, duration: 428, videoId: "6xjaath8pXo" },
      { id: "rb2", title: "Nuwakote Yo Jhilke Keto", artist: "Sanu KC & Ramkumar Khatiwada", film: "Single", year: 2024, duration: 538, videoId: "7VdbxsO1ePE" },
      { id: "rb3", title: "Jado Badyo", artist: "Sanubabu Ghising & Kajal Tamang", film: "Fyafulla Nepal", year: 2024, duration: 631, videoId: "m0IHXfjjDRI" },
      { id: "rb4", title: "Boudha Nayabasti", artist: "Amir Dong & Alina Rayamajhi", film: "Damphu Media", year: 2025, duration: 749, videoId: "Bc0LqKD53OE" },
      { id: "rb5", title: "Paan Mitho Chuna Ma (Remix)", artist: "DJ Laxman G", film: "Remix", year: 2024, duration: 260, videoId: "51s_WU0D_8o" },
      { id: "rb6", title: "Nagarana Ris 2", artist: "Ranjit Lama Waiba & Jitu Lopchan", film: "Fyafulla Nepal", year: 2024, duration: 567, videoId: "Vs5MGXt47yI" },
      { id: "rb7", title: "Nagarana Ris", artist: "Yuddha Lama & Sanjana Gurung", film: "Tamang Selo", year: 2024, duration: 536, videoId: "WbrkQyyAXR0" },
      { id: "rb8", title: "Sailo Ma Charghare", artist: "Bishwo Dong", film: "Lok Pop", year: 2024, duration: 289, videoId: "Q9keLcIpmgg" },
      { id: "rb9", title: "Kalo Boko", artist: "Aashram Theeng & Anisha Tamang", film: "Yangi Dong", year: 2024, duration: 641, videoId: "h6CSq_KymVE" },
      { id: "rb10", title: "Kavreli Samdi", artist: "Kosish Thokar & Jitu Lopchan", film: "Single", year: 2024, duration: 574, videoId: "ByoKi2E4ujg" },
    ],
  },

  {
    id: "ktm-gorkha",
    name: "KTM - Gorkha",
    blurb: "Thado bhaka & Gorkhali lok",
    tracks: [
      { id: "kg1", title: "Gorkhako Bhachchek", artist: "Shanti Shree Pariyar & Rayan Bashyal", film: "Lok Dohori", year: 2025, duration: 1037, videoId: "HmCVv8FYpcg" },
      { id: "kg2", title: "Gorkha Melaima", artist: "Dipesh Lama & Shreya Rai", film: "Single", year: 2025, duration: 769, videoId: "9qp5l8R09ys" },
      { id: "kg3", title: "Gorkha Siranchowk Kerabarima", artist: "Shanti Shree Pariyar & Chij Gurung", film: "Namaste Gorkha", year: 2025, duration: 1104, videoId: "Rmg0uH2V5hE" },
      { id: "kg4", title: "Gorkha Ghara Kathmandu Dera", artist: "Nirjala & Rabin Lamichhane", film: "Nirjala Rodhi Ghar", year: 2025, duration: 804, videoId: "zdeiUg1LvRQ" },
      { id: "kg5", title: "Gorkha Jane Muglinko Bato", artist: "Shital Gurung & Shanti Shree Pariyar", film: "Lok Dohori", year: 2025, duration: 589, videoId: "6y9Pex9wSnY" },
      { id: "kg6", title: "Hawa Sarara", artist: "Chij Gurung & Chija Tamang", film: "Lok Dohori", year: 2024, duration: 575, videoId: "9XPY_4EMPlI" },
      { id: "kg7", title: "Gorkha Manakamana", artist: "Biru Lama & Binita Gurung", film: "Him Samjhauta", year: 2020, duration: 401, videoId: "7k5t09Wkhqw" },
      { id: "kg8", title: "Maulik Gorkhali Thado Bhaka", artist: "Chija Tamang & Santosh Tamang", film: "Thado Bhaka", year: 2025, duration: 1906, videoId: "-cThUqbQFCY" },
      { id: "kg9", title: "Maulik Gorkhali Thado Bhaka (Raju Pariyar)", artist: "Raju Pariyar & Chija Tamang", film: "Dip Films", year: 2025, duration: 1353, videoId: "KqJdHD5VZEA" },
      { id: "kg10", title: "Gorkhali Thado Bhaka", artist: "Chij Gurung & Chija Tamang", film: "Thado Bhaka", year: 2024, duration: 1603, videoId: "OmS3X13IiJg" },
      { id: "kg11", title: "Gorkha Geet", artist: "Gorkha Municipality", film: "Single", year: 2023, duration: 396, videoId: "bwmDSkDDJtU" },
      { id: "kg12", title: "Gorkha Bajar", artist: "Krishna Gurung & Bhimkala Gurung", film: "Kauda Chutka", year: 2020, duration: 625, videoId: "2GiG2t1JvFU" },
    ],
  },
];



export const formatTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

/** Fisher-Yates — returns a new shuffled copy, original untouched. */
export function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}
