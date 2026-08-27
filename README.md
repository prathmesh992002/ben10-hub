# OmniHub - Free E-commerce + Content Site

Next.js store for trending reels (20 Instagram accounts), clothing, and digital products.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel (FREE)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Import this repo → Deploy
4. Done! Free URL: `your-project.vercel.app`

## Features
- Auto-playing reels with links back to Instagram (boost reach)
- 👕 Clothing products with cart
- 💾 Digital products (instant delivery)
- 20 Instagram account links
- Mobile responsive
- LocalStorage cart (no backend needed)

## Customization
- Edit `lib/data.js`:
  - `EPISODES` / `TRENDING` for reels
  - `CLOTHING` for clothing products
  - `DIGITAL_PRODUCTS` for digital products
  - `INSTA_ACCOUNTS` for your handles
- Replace placeholder images with your own (put files in `/public`)
- Reels videos go in `/public/reels/` as `.mp4`
