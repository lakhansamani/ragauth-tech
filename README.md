# RAGAuth — ragauth.tech

Marketing landing page for RAGAuth, permission-aware RAG security built on Authorizer + OpenFGA.

## Setup

```bash
npm install
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Recommended | Resend API key for waitlist emails. Without it, signups are logged to console. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical URL (default: https://ragauth.tech) |

## Deploy to Vercel

1. Push to GitHub
2. Import repo at vercel.com/new
3. Add `RESEND_API_KEY` in Vercel → Settings → Environment Variables
4. Deploy — Vercel auto-detects Next.js

## Contact

Lakhan Samani — lakhan@authorizer.dev  
Praalak Tech Solutions — praalaktech.com  
Powered by Authorizer — authorizer.dev
