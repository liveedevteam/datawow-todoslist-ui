# DATAWOW-TODOSLIST-UI

This project create by NextJS(Typescript)

## LOCAL RUN
1. Clone repository https://github.com/liveedevteam/datawow-todoslist-ui.git
```bash
git clone https://github.com/liveedevteam/datawow-todoslist-ui.git
```
2. Install npm package
```bash
npm i
```
3. run nodejs (DEV)
```bash
npm run dev
```
4. Open browser http://localhost:3000

## Change API Testing

1. Go to next.config.js
```bash
./next.config.js
```
2. Edit link in apiUrl
```bash
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    apiUrl: `${REPLACE_API_ENDPOINT}`
  }
}
```

## Test on Vercel
```bash
https://datawow-todoslist-ui.vercel.app/
```