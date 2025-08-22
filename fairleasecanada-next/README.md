# FairLeaseCanada – Next.js + Tailwind

This is a ready-to-deploy one-page site for FairLeaseCanada.ca.

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev
# open http://localhost:3000

# 3) Build for production
npm run build
npm start
```

## Tailwind
Styles live in `app/globals.css`. Convenience classes:
- `.btn-primary`
- `.nav-link`

## Forms
Set `FORM_ENDPOINT` in `app/page.jsx` to your Formspree/HubSpot endpoint or implement a Next.js API route at `/api/submit`.

## Deploy
Push this repo to GitHub and import it into Vercel. Point `fairleasecanada.ca` at Vercel.
