/* =========================================================
   PORTFOLIO DATA — EDIT THIS FILE TO UPDATE THE SITE
   ========================================================= */

const FEATURED = {
  delhiTimes: {
    id: "delhi-times",
    title: "Delhi Times — Quote Feature",
    type: "Press",
    description:
      "My quote featured in Delhi Times’ segment: “Why 2026 is stealing 2016’s spotlight?”",
    link: "https://drive.google.com/file/d/",
  },

  reelsProof: {
    id: "reels-proof",
    title: "Instagram Reels — Self Expression",
    type: "Reels",
    metrics: {
      views: "14.4k",
      likes: "685",
      saves: "58",
      shares: "469",
    },
    links: [
      {
        label: "Reel 1 — 13.8k views",
        url: "https://www.instagram.com/reel/DT8DwLngnz-/",
      },
      {
        label: "Reel 2 — 14.4k views",
        url: "https://www.instagram.com/reel/DQHeeyfk_zq/",
      },
      {
        label: "Reel 3 — 5.5k views",
        url: "https://www.instagram.com/reel/DTsqghWAqZK/",
      },
      { label: "Reel 4", url: "https://www.instagram.com/reel/DS7nC_tgs4q/" },
      { label: "Reel 5", url: "https://www.instagram.com/reel/DTo3UWaAvSd/" },
      { label: "Reel 6", url: "https://www.instagram.com/reel/DRhtUZNgjxN/" },
      { label: "Reel 7", url: "https://www.instagram.com/reel/DRkKUi_Ajiz/" },
    ],
  },
};

/* =========================================================
   PROJECTS
   ========================================================= */

const PROJECTS = [
  {
    id: "table-no-17",
    title: "Table No. 17 — IPL Season 17 Campaign",
    agency: "Evolute Global",
    brand: "Vihang’s Palm Club — Grill & Tonic",
    role: "Senior Content Writer",
    industry: ["Hospitality", "Food & Beverage"],
    formats: ["Concept", "Social Media"],
    highlight: true,

    summary:
      "A mystery-led discount mechanic designed to drive repeat footfall during IPL Season 17.",

    story: [
      "A random table in the restaurant was secretly marked as Table No. 17 each day.",
      "Customers discovered the number only after being seated.",
      "The lucky table received a 17% discount on their bill.",
      "The table changed daily — encouraging repeat visits and word-of-mouth buzz.",
    ],

    links: [
      {
        group: "Campaign Posts",
        items: [
          "https://www.instagram.com/p/C498aEcKs0d/",
          "https://www.instagram.com/p/C4akM5-xmST/",
          "https://www.instagram.com/p/C4DR-WJqlaZ/",
          "https://www.instagram.com/p/C4GUUEqqil6/",
          "https://www.instagram.com/p/C3NDQAlxzQX/",
          "https://www.instagram.com/p/C3Pu57TKmbe/",
          "https://www.instagram.com/p/C3RtKGXqGXe/",
          "https://www.instagram.com/p/C3Zv6q0KrOd/",
        ],
      },
    ],
  },

  {
    id: "grill-tonic-branding-reels",
    title: "Branding Reels — Grill & Tonic",
    agency: "Evolute Global",
    brand: "Vihang’s Palm Club — Grill & Tonic",
    role: "Senior Content Writer",
    industry: ["Hospitality"],
    formats: ["Reels", "Branding"],

    summary:
      "High-energy branding reels to establish Grill & Tonic as a premium nightlife destination.",

    links: [
      {
        group: "Branding Reels",
        items: [
          "https://www.instagram.com/p/DMQPr-yPnWo/",
          "https://www.instagram.com/p/DOql8vckqOx/",
        ],
      },
    ],
  },

  {
    id: "grill-tonic-revamp",
    title: "Grill & Tonic — Revamp Launch",
    agency: "Evolute Global",
    brand: "Vihang’s Palm Club — Grill & Tonic",
    role: "Senior Content Writer",
    industry: ["Hospitality"],
    formats: ["Teasers", "Launch Campaign"],

    summary:
      "End-to-end content support for the revamp launch — from teasers to launch-night coverage.",

    links: [
      {
        group: "Teasers",
        items: [
          "https://www.instagram.com/p/DOAnUaRCMDZ/",
          "https://www.instagram.com/p/DOAndvWCMlZ/",
          "https://www.instagram.com/p/DOAnl48iLfD/",
          "https://www.instagram.com/p/DOBN2pFkoFp/",
          "https://www.instagram.com/p/DOBODTdEo94/",
          "https://www.instagram.com/p/DOBON8NEoYK/",
        ],
      },
      {
        group: "Launch Party",
        items: [
          "https://www.instagram.com/p/DOJGXRiiIs1/",
          "https://www.instagram.com/p/DOJGhp-CImH/",
          "https://www.instagram.com/p/DOJGwYbCKgy/",
          "https://www.instagram.com/p/DObQfkKiCTf/",
        ],
      },
    ],
  },

  {
    id: "mumbai-fast-social",
    title: "Mumbai Fast — Social Content",
    agency: "Evolute Global",
    brand: "Vihang’s Palm Club — Mumbai Fast",
    role: "Senior Content Writer",
    industry: ["Hospitality"],
    formats: ["Social Media"],

    summary:
      "Everyday social content focused on affordability, speed, and local food culture.",

    links: [
      {
        group: "Social Posts",
        items: [
          "https://www.instagram.com/p/C3Z_t32IuQX/",
          "https://www.instagram.com/p/C3iBtfRyMrA/",
          "https://www.instagram.com/p/C30A5RNSB0x/",
          "https://www.instagram.com/p/C4GR4hrSn80/",
          "https://www.instagram.com/p/C4XsGkHyHk8/",
          "https://www.instagram.com/p/C4kzexwSK3X/",
          "https://www.instagram.com/p/C4foNmlSHbZ/",
        ],
      },
    ],
  },

  {
    id: "finance-insurance-brands",
    title: "Finance & Insurance Content",
    agency: "Evolute Global",
    brand: "Hero FinCorp • Generali Central • Axis Direct",
    role: "Senior Content Writer",
    industry: ["Finance", "Insurance"],
    formats: ["Content Writing", "Social Media", "Brand Communication"],

    summary:
      "Clear, trust-driven content for finance and insurance brands with varied audience maturity levels.",
  },

  {
    id: "ecommerce-pdp",
    title: "E-commerce PDP Writing",
    agency: "Evolute Global",
    brand: "Sansui (Flipkart)",
    role: "Senior Content Writer",
    industry: ["Consumer Electronics", "E-commerce"],
    formats: ["Product Copy", "A+ Content"],

    summary:
      "High-conversion PDP and A+ content optimized for clarity, benefits, and search intent.",
  },

  {
    id: "karan-ke-gaane",
    title: "@karankegaane — Music Lab",
    agency: "Independent",
    brand: "Personal IP",
    role: "Creator & Strategist",
    industry: ["Music", "Culture"],
    formats: ["Content Strategy", "Editorial"],

    summary:
      "A safe space for music lovers — blending playlists, trends, interviews, and cultural time travel.",

    story: [
      "Timely sneak peeks into personal playlists",
      "Mood-based song recommendations",
      "Dissecting music trends and industry shifts",
      "Interviews with music aficionados",
      "Indian and global concert updates",
      "Solo rickshaw concerts",
    ],

    links: [
      {
        group: "Instagram",
        items: ["https://www.instagram.com/karankegaane"],
      },
    ],
  },
];

/* =========================================================
   EXPORT (for app.js)
   ========================================================= */

window.PORTFOLIO_DATA = {
  FEATURED,
  PROJECTS,
};
