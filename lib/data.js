export const EPISODES = [
  { id: 1, series: "Omniverse", season: 4, episode: 9, title: "The Final Climax", desc: "Ben unleashes the full power of the Omnitrix in the most intense and emotional confrontation ever. Rook fights alongside Ben as every alien form combines for a cinematic finale.", video: "/reels/ep1.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 100, ig: "", igHandle: "" },
  { id: 2, series: "Alien Force", season: 3, episode: 11, title: "Greatest Adventure", desc: "Ben embarks on his greatest adventure yet as new threats emerge across the cosmos with incredible new alien forms.", video: "/reels/ep2.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 98, ig: "", igHandle: "" },
  { id: 3, series: "Classic", season: 3, episode: 2, title: "The Ancient Evil Prophecy", desc: "Ancient evils resurface as Ben discovers a prophecy that changes everything. New alien transformations showcase the Omnitrix's power.", video: "/reels/ep3.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 96, ig: "", igHandle: "" },
  { id: 4, series: "Classic", season: 1, episode: 1, title: "The Epic Opener", desc: "Ben's journey begins as the Omnitrix evolves, granting access to incredible new alien forms in this cosmic episode opener.", video: "/reels/ep4.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 95, ig: "", igHandle: "" },
  { id: 5, series: "Omniverse", season: 5, episode: 9, title: "Full Power Finale", desc: "The final battle reaches its climax as every alien form combines and Ben pushes beyond all known limits of the device.", video: "/reels/ep5.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 94, ig: "", igHandle: "" },
  { id: 6, series: "Alien Force", season: 1, episode: 4, title: "The Mirror Version", desc: "Ben faces a mirror version of himself that challenges everything he believes in, creating unpredictable transformations.", video: "/reels/ep6.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 92, ig: "", igHandle: "" },
  { id: 7, series: "Alien Force", season: 3, episode: 1, title: "New Threats Emerge", desc: "A web of deception threatens the entire galaxy as the team navigates new challenges that test Ben's heroism.", video: "/reels/ep7.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 91, ig: "", igHandle: "" },
  { id: 8, series: "Omniverse", season: 1, episode: 7, title: "The Omnitrix Truth", desc: "The truth about the Omnitrix is finally revealed in a jaw-dropping revelation. Rook helps Ben face his most powerful enemy.", video: "/reels/ep8.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 90, ig: "", igHandle: "" },
  { id: 9, series: "Alien Force", season: 2, episode: 3, title: "The Multiverse Collapse", desc: "The multiverse collapses as Ben must unite alternate versions of himself while Omnitrix glitches reveal hidden powers.", video: "/reels/ep9.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 89, ig: "", igHandle: "" },
  { id: 10, series: "Omniverse", season: 5, episode: 7, title: "The Jaw-Dropping Revelation", desc: "A pivotal episode that changes the course of the narrative as Ben finds strength to overcome emotional turmoil.", video: "/reels/ep10.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 88, ig: "", igHandle: "" },
  { id: 11, series: "Alien Force", season: 1, episode: 11, title: "Searching for Grandpa", desc: "The team must navigate a web of deception in a season opener with heart-pounding action and emotional depth.", video: "/reels/ep11.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 87, ig: "", igHandle: "" },
  { id: 12, series: "Omniverse", season: 2, episode: 9, title: "Ben vs. Malware", desc: "Every alien form combines as Ben pushes beyond all known limits in this breathtaking, cinematic episode.", video: "/reels/ep12.mp4", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Ben10Omnitrix.svg/1200px-Ben10Omnitrix.svg.png", views: 86, ig: "", igHandle: "" },
];

export const TRENDING = [
  ...EPISODES.filter(e => e.id <= 5),
];

export const PRODUCTS = [
  { id: "p1", name: "Omnitrix Graphic Tee", price: 499, img: "https://m.media-amazon.com/images/I/B1yKNRZW-iL._AC_UY1000_.png", desc: "Soft cotton t-shirt with iconic Omnitrix design.", tag: "Bestseller" },
  { id: "p2", name: "Heatblast Hoodie", price: 899, img: "https://m.media-amazon.com/images/I/61kSbFJyFOL._AC_UY1000_.jpg", desc: "Warm hoodie featuring Heatblast artwork.", tag: "New" },
  { id: "p3", name: "Four Arms Oversized Tee", price: 549, img: "https://m.media-amazon.com/images/I/B1yKNRZW-iL._AC_UY1000_.png", desc: "Oversized fit tee with Four Arms print.", tag: "Trending" },
  { id: "p4", name: "Diamondhead Cap", price: 299, img: "https://m.media-amazon.com/images/I/61kSbFJyFOL._AC_UY1000_.jpg", desc: "Adjustable snapback with embroidered logo.", tag: "Limited" },
  { id: "p5", name: "Alien Force Poster Set", price: 199, img: "https://m.media-amazon.com/images/I/B1yKNRZW-iL._AC_UY1000_.png", desc: "Set of 5 high-quality art prints.", tag: "Collectible" },
  { id: "p6", name: "Ultimate Alien Mug", price: 249, img: "https://m.media-amazon.com/images/I/61kSbFJyFOL._AC_UY1000_.jpg", desc: "Ceramic mug perfect for morning coffee.", tag: "New" },
];

export const INSTA_ACCOUNTS = [
  "@ben10.clips", "@ben10_episodes", "@ben10.reels.hd",
  "@ben10.fan.page", "@ben10.full.episodes", "@ben10.classic",
  "@ben10.alien.force", "@ben10.ultimate", "@ben10.omniverse",
  "@ben10.memes.fan", "@ben10.quotes.fan", "@ben10.transformation",
  "@ben10.vilgax", "@ben10.gwen", "@ben10.kevin.levin",
  "@ben10.master.control", "@ben10.fan.art", "@ben10.comic.fan",
  "@ben10.upgrades", "@ben10.ships",
];
