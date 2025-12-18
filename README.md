# Lychee Construction Copilot

Single-page, static UI for the Lychee Copilot for Construction demo. Built as a Vercel-ready static site with no build step required.

## Structure
- `index.html` — the full UI and styling.
- `vercel.json` — Vercel config to serve the static page.

## Run locally
```bash
cd lychee_construction_copilot
python -m http.server 3000
# open http://localhost:3000
```

## Deploy to Vercel
```bash
cd lychee_construction_copilot
vercel --prod
```
Choose "Other" when prompted for the framework; no build command; output directory `/`.

## Publish to GitHub
```bash
cd lychee_construction_copilot
git init
git add .
git commit -m "Init Lychee Construction Copilot UI"
git remote add origin git@github.com:<your_username>/lychee_construction_copilot.git
git push -u origin main
```
