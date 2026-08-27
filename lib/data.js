export const EPISODES = [
  { id: 1, series: "Omniverse", season: 4, episode: 9, title: "The Final Climax", desc: "Ben unleashes the full power of the Omnitrix in the most intense and emotional confrontation ever. Rook fights alongside Ben as every alien form combines for a cinematic finale.", video: "/reels/ep1.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png",   views: 100, ig: "https://www.instagram.com/reel/DcFI3dgj6gw/", igHandle: "" },
  { id: 2, series: "Alien Force", season: 3, episode: 11, title: "Greatest Adventure", desc: "Ben embarks on his greatest adventure yet as new threats emerge across the cosmos with incredible new alien forms.", video: "/reels/ep2.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 98, ig: "https://www.instagram.com/reel/DcBQ6hxjEv1/", igHandle: "" },
  { id: 3, series: "Classic", season: 3, episode: 2, title: "The Ancient Evil Prophecy", desc: "Ancient evils resurface as Ben discovers a prophecy that changes everything. New alien transformations showcase the Omnitrix's power.", video: "/reels/ep3.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 96, ig: "https://www.instagram.com/reel/Dciy6-dgH2U/", igHandle: "" },
  { id: 4, series: "Classic", season: 1, episode: 1, title: "The Epic Opener", desc: "Ben's journey begins as the Omnitrix evolves, granting access to incredible new alien forms in this cosmic episode opener.", video: "/reels/ep4.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 95, ig: "https://www.instagram.com/reel/DceffEoDsfB/", igHandle: "" },
  { id: 5, series: "Omniverse", season: 5, episode: 9, title: "Full Power Finale", desc: "The final battle reaches its climax as every alien form combines and Ben pushes beyond all known limits of the device.", video: "/reels/ep5.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 94, ig: "https://www.instagram.com/reel/DcUxMXVkVh2/", igHandle: "" },
  { id: 6, series: "Alien Force", season: 1, episode: 4, title: "The Mirror Version", desc: "Ben faces a mirror version of himself that challenges everything he believes in, creating unpredictable transformations.", video: "/reels/ep6.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 92, ig: "https://www.instagram.com/reel/DcbhV9ugRS8/", igHandle: "" },
  { id: 7, series: "Alien Force", season: 3, episode: 1, title: "New Threats Emerge", desc: "A web of deception threatens the entire galaxy as the team navigates new challenges that test Ben's heroism.", video: "/reels/ep7.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 91, ig: "https://www.instagram.com/reel/DcEwhKZiRNQ/", igHandle: "" },
  { id: 8, series: "Ultimate Alien", season: 1, episode: 7, title: "Ultimate Alien Episode", desc: "The truth about the Omnitrix is finally revealed in a jaw-dropping revelation. Rook helps Ben face his most powerful enemy.", video: "/reels/ep8.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 90, ig: "https://www.instagram.com/reel/DcJfp5gCXxc/", igHandle: "" },
  { id: 9, series: "Alien Force", season: 2, episode: 3, title: "The Multiverse Collapse", desc: "The multiverse collapses as Ben must unite alternate versions of himself while Omnitrix glitches reveal hidden powers.", video: "/reels/ep9.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 89, ig: "https://www.instagram.com/reel/DceDsW2ihdm/", igHandle: "" },
  { id: 10, series: "Omniverse", season: 5, episode: 7, title: "The Jaw-Dropping Revelation", desc: "A pivotal episode that changes the course of the narrative as Ben finds strength to overcome emotional turmoil.", video: "/reels/ep10.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 88, ig: "https://www.instagram.com/reel/DcPDj5CFZA0/", igHandle: "" },
  { id: 11, series: "Alien Force", season: 1, episode: 11, title: "Searching for Grandpa", desc: "The team must navigate a web of deception in a season opener with heart-pounding action and emotional depth.", video: "/reels/ep11.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 87, ig: "https://www.instagram.com/reel/DceVY2KClhP/", igHandle: "" },
  { id: 12, series: "Omniverse", season: 2, episode: 9, title: "Ben vs. Malware", desc: "Every alien form combines as Ben pushes beyond all known limits in this breathtaking, cinematic episode.", video: "/reels/ep12.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 86, ig: "https://www.instagram.com/reel/DcID_wwiVrA/", igHandle: "" },
];

export const TRENDING = [
  ...EPISODES.filter(e => e.id <= 5),
];

export const CLOTHING = [
  { id: "c1", category: "Clothing", name: "Omnitrix Graphic Tee", price: 499, img: "https://m.media-amazon.com/images/I/B1yKNRZW-iL._AC_UY1000_.png", desc: "Soft cotton t-shirt with iconic Omnitrix design.", tag: "Bestseller" },
  { id: "c2", category: "Clothing", name: "Heatblast Hoodie", price: 899, img: "https://m.media-amazon.com/images/I/61kSbFJyFOL._AC_UY1000_.jpg", desc: "Warm hoodie featuring Heatblast artwork.", tag: "New" },
  { id: "c3", category: "Clothing", name: "Four Arms Oversized Tee", price: 549, img: "https://m.media-amazon.com/images/I/B1yKNRZW-iL._AC_UY1000_.png", desc: "Oversized fit tee with Four Arms print.", tag: "Trending" },
  { id: "c4", category: "Clothing", name: "Diamondhead Cap", price: 299, img: "https://m.media-amazon.com/images/I/61kSbFJyFOL._AC_UY1000_.jpg", desc: "Adjustable snapback with embroidered logo.", tag: "Limited" },
];

export const DIGITAL_PRODUCTS = [
  { id: "d2", category: "Digital", name: "Ben 10 (Classic) - Season 01-04", price: 99, img: "/ben10-classic.png", desc: "Dual Audio Hindi-English · 720p/1080p WEB-DL ESub", tag: "Series" },
  { id: "d4", category: "Digital", name: "Ben 10: Alien Force - Season 01-03", price: 99, img: "/ben10-alienforce.png", desc: "Dual Audio Hindi-English · 720p/1080p WEB-DL ESub", tag: "Series" },
  { id: "d5", category: "Digital", name: "Ben 10: Ultimate Alien - Season 01-03", price: 99, img: "/ben10-ultimatealien.png", desc: "Dual Audio Hindi-English · 720p/1080p WEB-DL ESub", tag: "Series" },
  { id: "d8", category: "Digital", name: "Ben 10: Omniverse - Season 01-08", price: 99, img: "/ben10-omniverse.png", desc: "Dual Audio Hindi-English · 720p/1080p WEB-DL ESub", tag: "Series" },
  { id: "d10", category: "Digital", name: "Ben 10: Secret of the Omnitrix (2007)", price: 99, img: "/ben10-secretomnitrix.png", desc: "Dual Audio Hindi-English Movie · 480p/720p/1080p WEB-DL ESub", tag: "Movie" },
  { id: "d11", category: "Digital", name: "Ben 10: Race Against Time (2007)", price: 99, img: "/ben10-raceagainsttime.png", desc: "Dual Audio Hindi-English Movie · 480p/720p/1080p WEB-DL ESub", tag: "Movie" },
  { id: "d12", category: "Digital", name: "Ben 10: Alien Swarm (2009)", price: 99, img: "/ben10-alienswarm.png", desc: "Dual Audio Hindi-English Movie · 480p/720p/1080p BluRay ESub", tag: "Movie" },
  { id: "d13", category: "Digital", name: "Ben 10: Destroy All Aliens (2012)", price: 99, img: "/ben10-destroyall.png", desc: "Dual Audio Hindi-English Movie · 720p/1080p BluRay ESub", tag: "Movie" },
  { id: "d14", category: "Digital", name: "Ben 10 vs. the Universe (2020)", price: 99, img: "/ben10-vsuniverse.png", desc: "Dual Audio Hindi-English Movie · 480p/720p/1080p WEB-DL ESub", tag: "Movie" },
  { id: "d15", category: "Digital", name: "Ben 10 vs. the Universe (2020) Compact", price: 99, img: "/ben10-vsuniversecompact.png", desc: "Dual Audio Hindi-English · 480p/720p WEB-DL 250MB/600MB", tag: "Movie" },
  { id: "d16", category: "Digital", name: "Ben 10,010 (2021)", price: 99, img: "/ben10-010.png", desc: "Dual Audio Hindi-English Movie · 480p/720p/1080p BluRay ESub", tag: "Movie" },
];

export const PRODUCTS = [...CLOTHING, ...DIGITAL_PRODUCTS];

export const INSTA_ACCOUNTS = [
  "@ben10.clips", "@ben10_episodes", "@ben10.reels.hd",
  "@ben10.fan.page", "@ben10.full.episodes", "@ben10.classic",
  "@ben10.alien.force", "@ben10.ultimate", "@ben10.omniverse",
  "@ben10.memes.fan", "@ben10.quotes.fan", "@ben10.transformation",
  "@ben10.vilgax", "@ben10.gwen", "@ben10.kevin.levin",
  "@ben10.master.control", "@ben10.fan.art", "@ben10.comic.fan",
  "@ben10.upgrades", "@ben10.ships",
];
