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
    id: "old-songs",
    name: "Old Songs",
    blurb: "Evergreen Nepali classics",
    tracks: [
      { id: "os1", title: "GAJALU TI THULA THULA AANKHA \"गाजलु ति ठुला ठुला आँखा\" | Ghulam Ali | Old Nepali Song | Music Nepal", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 294, videoId: "ftEzdVJWdDA" },
      { id: "os2", title: "Deuralima Batas - Premdhoj Pradhan | Natikaji | Nepali Classic Song", artist: "Nepali Adhunik Song", film: "Old Songs", year: 0, duration: 262, videoId: "CtfD9sMY7Sg" },
      { id: "os3", title: "\"किन किन तिम्रो तस्बिर​\" Kina Kina Timro Tasbir - Gulam Ali | MBB Shah | Deepak Jangam | Music Nepal", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 227, videoId: "sY-2ABfH1bI" },
      { id: "os4", title: "\"तिमीले त हाेईन\" Timle Ta Hoina - Bachhu Kailash | Romantic Lyrical Song | Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 262, videoId: "xxFyLeAfS2A" },
      { id: "os5", title: "Yati Chokho", artist: "Uday Sotang - Topic", film: "Old Songs", year: 0, duration: 306, videoId: "oFgHrSaXS8g" },
      { id: "os6", title: "Kehi Mitho Baat Gara | Narayan Gopal | Lyrical Video | Superhit Nepali Song | Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 375, videoId: "LFR4eMQzUr4" },
      { id: "os7", title: "Phool Ko Thunga | Tara Devi | Evergreen Nepali Song | Classic Nepali Melody | NatiKaji", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 252, videoId: "Bw1IqmDRXQo" },
      { id: "os8", title: "Aruna Lama | POHOR SAAL KHUSI \"पोहोर साल खुशी\" | Superhit Nepali Song | Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 208, videoId: "8uIaRZrB6Jk" },
      { id: "os9", title: "\"हेर न हेर कान्छा\" Herana Hera Kanchha | Aruna Lama & Jitendra Bardewa | Old Nepali Song|Music Nepal", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 196, videoId: "E2A5YLSPliM" },
      { id: "os10", title: "Euta Manche Ko Mayale Kati | Narayan Gopal | Evergreen Nepali Song | Classic Nepali Love Song", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 378, videoId: "4xfUFn6mx9g" },
      { id: "os11", title: "Mohani Lagla Hai | Nepali Movie Chino Song | Narayan Gopal, Asha Bhosle | Shiva Shrestha, Bhuwan KC", artist: "AB Pictures Farm", film: "Old Songs", year: 0, duration: 362, videoId: "pzcBs8XrvyQ" },
      { id: "os12", title: "Eh Kancha Thattaima - Narayan Gopal & Tara Devi | Ratna Shumsher Thapa | Golden Hit Classic", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 214, videoId: "MOOk_6gGgMc" },
      { id: "os13", title: "Tirkha Lage Nirmaya (HD) - Nepali Movie HAMI TEEN BHAI Song || Rajesh Hamal, Nikhil, Shree Krishna", artist: "OSR Movies", film: "Old Songs", year: 0, duration: 323, videoId: "6YSS-LbMnQ4" },
      { id: "os14", title: "Laaj Ko Lali | Udit Narayan | Namrata Shrestha | S.P Koirala | Alokshree | Romantic Nepali Song", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 335, videoId: "TFTdwTUFLQw" },
      { id: "os15", title: "Phool Pati Bhakera || Superhit Song || Nepali Movie BHAROSA Song || Shree Krishna, Dilip, Arunima", artist: "OSR Movies", film: "Old Songs", year: 0, duration: 236, videoId: "EhLOksRnCU0" },
      { id: "os16", title: "Kun Mandir Ma Janchau Yatri | Laxmi Prasad Devkota | Robin Sharma | Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 380, videoId: "LZWji01oo04" },
      { id: "os17", title: "आकाशैको कालो बादल | Aakashai Ko Kalo Badal | Evergreen Nepali Lok Geet by Tulsi Parajuli", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 359, videoId: "FrU_FOle0Qg" },
      { id: "os18", title: "Khotang Jilla Diktel Bajar \"खोटाङ जिल्ला\" - Tulasi Parajuli & Lochan Bhattarai | Nepali Lok Song", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 324, videoId: "OC3f6P_iW58" },
      { id: "os19", title: "Chitthi Timilai Lekhu Bhanchu (चिठ्ठी तिमीलाई) - Shambhu Rai's Evergreen Nepali Song | Adhunik Song", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 333, videoId: "9PfKOqWzNrk" },
      { id: "os20", title: "Gurasai Fulyo Banaima \"गुराँसै फुल्यो वनैमा\" | 1974 AD | Lyrical Video With Guitar Chords", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 317, videoId: "5WyX9LMFf5I" },
      { id: "os21", title: "\"बिहान​ उठ्ने बित्तिकै\" Bihana Uthne Bittikai - Ram Krishna Dhakal | Alokshree |Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 419, videoId: "cwC8hHXmAnc" },
      { id: "os22", title: "Basa Sundari Thandi Mahina Jado chha", artist: "Dhana Dhakal", film: "Old Songs", year: 0, duration: 353, videoId: "jXPDG1IzNNQ" },
      { id: "os23", title: "\"नेपाली हामी\" Nepali Hami - Natikaji | Lyrical Video | Greatest Hits | Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 197, videoId: "GuKnz6FYJaE" },
      { id: "os24", title: "Wari Jamuna Pari Jamuna - Nepali Movie MAAN", artist: "Budha Subba Digital", film: "Old Songs", year: 0, duration: 271, videoId: "FqpnI3CNLvE" },
      { id: "os25", title: "Lahanale Jurayoki - DARPAN CHHAYAN Movie Title Song || Sadhana Sargam || Niruta Singh, Uttam, Dilip", artist: "OSR Digital", film: "Old Songs", year: 0, duration: 348, videoId: "iwMBR0o3yfg" },
      { id: "os26", title: "Kafal Gedi Kuttukai", artist: "Mahesh Budhathoki - Topic", film: "Old Songs", year: 0, duration: 979, videoId: "Od3YXvb4kWE" },
      { id: "os27", title: "Timro Tyo Hasilo Muhar Ko - Deepak Kharel || \"तिम्रो त्यो हसिलो मुहारको\" | Music Nepal Official", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 287, videoId: "gglTvShpzbI" },
      { id: "os28", title: "Siriri Batasai Chalyo Lai Lai | Nepali Movie Song | Bandhaki | Dilip Rayamajhi | Niruta Singh", artist: "HiTechEntertainment", film: "Old Songs", year: 0, duration: 307, videoId: "4X2ZO2rkE04" },
      { id: "os29", title: "Asare Mahinama \"असारै महिनामा\" | Prashant Tamang | Pooja Sharma | Nepali Superhit Song", artist: "Music Nepal", film: "Old Songs", year: 0, duration: 310, videoId: "0qINEfgn3Dg" },
      { id: "os30", title: "Nepathya - Resham (रेशम)", artist: "Nepathya", film: "Old Songs", year: 0, duration: 268, videoId: "BpeFXed4K6I" },
      { id: "os31", title: "Nepathya -  Siran Ma Photo Chha (सिरानमा फोटो छ)", artist: "Nepathya", film: "Old Songs", year: 0, duration: 232, videoId: "3ImKq4nGqdM" },
      { id: "os32", title: "Nepathya - Gaun Gaun Bata Utha (गाउँ गाउँबाट उठ )", artist: "Nepathya", film: "Old Songs", year: 0, duration: 285, videoId: "BliMnFmWaBw" },
    ],
  },
  {
    id: "morning-bhajan",
    name: "Morning Bhajan",
    blurb: "Aarti & bhajan for sunrise",
    tracks: [
      { id: "mb1", title: "Shanti Jagau Bhakta Aarti Jagau", artist: "Nepali Bhajan", film: "Popular Bhajan", year: 2023, duration: 648, videoId: "q42lX_B__SY" },
      { id: "mb2", title: "Radio Nepal Morning Tunes", artist: "Romantic TV Nepal", film: "Bhajan Dhun", year: 2023, duration: 805, videoId: "EKEkYN361Yg" },
      { id: "mb3", title: "Tan Man Bachan", artist: "Bhakta Raj Acharya", film: "Bhajan", year: 2021, duration: 257, videoId: "pjkyiU7f8eU" },
      { id: "mb4", title: "Yo Pani Krishna Ko", artist: "Ashok Pandey", film: "Nepali Bhajan", year: 2024, duration: 616, videoId: "7z0iBoBC_iE" },
      { id: "mb5", title: "Ekdin Ta Jane Ho / Hari Bol", artist: "Sashan Kandel", film: "Bhajan Collection", year: 2024, duration: 913, videoId: "CXh0OJtzm6s" },
      { id: "mb6", title: "Shankar Bhole", artist: "Pandit Ishwor Krishna Bhurtel", film: "Music Nepal", year: 2020, duration: 383, videoId: "_VY6wZr9CY8" },
      { id: "mb7", title: "Chanchal Bhayo Man", artist: "Resham Sapkota & Devi Gharti", film: "Bhajan Chudka", year: 2024, duration: 1425, videoId: "kx_Sh2Mw9ps" },
      { id: "mb8", title: "Sankatmochan Hanuman Ashtak", artist: "Hariharan", film: "Bhakti Sagar", year: 2019, duration: 375, videoId: "HH_a6aRO1TE" },
      { id: "mb9", title: "Ma Pani Timrai Bhakta", artist: "Shiva Sharma", film: "Nepali Bhajan", year: 2026, duration: 511, videoId: "Lm9J9Mwnozw" },
      { id: "mb10", title: "Om Jai Jagadish Hare", artist: "Bikash Kabindra Jai Gautam", film: "Aarti Bhajan", year: 2019, duration: 371, videoId: "Be-XDNW7yWM" },
      { id: "mb11", title: "Old Nepali Bhajan Collection", artist: "Hemanta Bhattarai", film: "Radio Nepal", year: 2022, duration: 805, videoId: "1UxhGsZMnY4" },
      { id: "mb12", title: "Bansuri Ko Dhun Mitho", artist: "Ashok Pandey", film: "Nepali Bhajan", year: 2023, duration: 482, videoId: "oofKB5ayrDA" },
      { id: "mb13", title: "Hunu Parcha Man Dekhi Nirmal", artist: "Durga Oli", film: "Nepali Bhajan", year: 2023, duration: 365, videoId: "CheWUydxRDs" },
      { id: "mb14", title: "Kati Ramro Mandir Pashupati", artist: "Mahananda Pathak", film: "Shiva Bhajan", year: 2023, duration: 364, videoId: "iUL0e2BfEi0" },
    ],
  },
  {
    id: "night-songs",
    name: "Night Songs",
    blurb: "Late-night highway lok",
    tracks: [
      { id: "ns1", title: "Jaha Chan Buddha Ka Akha", artist: "Swaroop Raj Acharya & Bhakta Raj Acharya", film: "Old Songs", year: 0, duration: 321, videoId: "2awt6X6rFPs" },
      { id: "ns2", title: "Phoolko Aankhama", artist: "Ani Choying Drolma", film: "Old Songs", year: 0, duration: 306, videoId: "bJNLrJ7MUzM" },
      { id: "ns3", title: "Malai Nasodha", artist: "Narayan Gopal", film: "Old Songs", year: 0, duration: 244, videoId: "Pkj6YFJFI8U" },
      { id: "ns4", title: "Kehi Mitho Baat Gara", artist: "Narayan Gopal", film: "Old Songs", year: 0, duration: 375, videoId: "LFR4eMQzUr4" },
      { id: "ns5", title: "Najeek", artist: "Bimbaakash", film: "Single", year: 0, duration: 312, videoId: "AMRGmAh2NTk" },
      { id: "ns6", title: "Siriri", artist: "Bipul Chettri", film: "Maya", year: 0, duration: 275, videoId: "hSHKJheZEM8" },
      { id: "ns7", title: "Para Laijau Phoola Haru", artist: "Prem Dhoj Pradhan", film: "Old Songs", year: 0, duration: 288, videoId: "1tnvDCzf5Dc" },
      { id: "ns8", title: "A Mai Re", artist: "Kuma Sagar", film: "Hawa Ko Lahar", year: 0, duration: 303, videoId: "gebozQyu-pY" },
      { id: "ns9", title: "Ghumti Ma Na Aau Hai", artist: "Prem Dhoj Pradhan", film: "Old Songs", year: 0, duration: 208, videoId: "6z-820ASV1Y" },
      { id: "ns10", title: "Deuralima Batas", artist: "Premdhoj Pradhan", film: "Old Songs", year: 0, duration: 262, videoId: "CtfD9sMY7Sg" },
      { id: "ns11", title: "Sora Barse Umerai Ma", artist: "Nepali Old Song", film: "Old Songs", year: 0, duration: 159, videoId: "Dh4344mVZ4w" },
      { id: "ns12", title: "Muglan", artist: "Sanjeev Singh", film: "Single", year: 0, duration: 274, videoId: "jWAkcOLKkfM" },
      { id: "ns13", title: "Simsime Pani Ma", artist: "Rekha Shah", film: "Old Songs", year: 0, duration: 293, videoId: "kfAh1zSTgPI" },
      { id: "ns14", title: "Kasari Bhanu", artist: "Swoopna Suman", film: "Arbitrary Originals", year: 0, duration: 344, videoId: "7SaM24Cjzj0" },
      { id: "ns15", title: "Birsiney Hau Ki", artist: "The Elements", film: "Tuborg Open Sessions", year: 0, duration: 326, videoId: "H7bzyggFYSE" },
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
