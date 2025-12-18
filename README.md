# Lychee Construction Copilot

React + TypeScript demo for a construction compliance copilot that checks messages for policy risks, flags issues, and suggests fixes.

## Tech stack
- React 18 + TypeScript
- Vite for dev/build
- Plain CSS (no additional UI frameworks)

## Run locally
```bash
cd lychee_construction_copilot
npm install
npm run dev
# open the localhost URL printed by Vite
```

## Build / preview
```bash
npm run build
npm run preview
```

## Deploy to Vercel
```bash
npm run build
vercel --prod
```
Uses the provided `vercel.json` (static build, output `dist/`). If you link the GitHub repo in Vercel, pushes to `main` will auto-deploy.

## Demo scenario
- Context: `Project: Riverside Housing`, `Role: Site Supervisor`.
- Compose the provided payment-schedule email in the Message Editor.
- Click **Run compliance check** to see risk flags, policy citations (Payments Policy v3.2, Anti-Money Laundering Guidance 2024), and recommended fixes.
- Click **Apply safer wording** to auto-rewrite the draft with safer language.
