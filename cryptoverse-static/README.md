# cryptoverse-static

This is a Vite + React + TailwindCSS starter built from the HTML you provided.
It is **static** by default (news items and crypto values are hardcoded).

## How to run

1. Install dependencies
```bash
npm install
```
2. Run dev server
```bash
npm run dev
```

## Where to add API logic
- `src/data/staticNews.js` — static news array (replace with API fetch later)
- `src/pages/News.jsx` — maps `staticNews` to `<NewsCard />` components (see TODO comments)
- `src/components/CryptoTable.jsx` — currently uses `src/data/staticCoins.js` (see TODO comments)

Comments with `// TODO:` are placed where you should add fetching logic (e.g., `useEffect` + `fetch` or Redux logic).
