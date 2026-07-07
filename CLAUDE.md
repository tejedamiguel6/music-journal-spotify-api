# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run deploy` - Build and deploy via OpenNext to Cloudflare
- `npm run test-db` - Run the Neon DB smoke-test script (`script/test-db.ts`)

## Architecture Overview

This is a Next.js 15 application with App Router — a personal music journal that integrates with the Spotify Web API, Contentful CMS, a Go backend that records listening history, and a Neon PostgreSQL database. Deployed to Cloudflare via OpenNext.

### Key Integration Points

**Spotify Authentication Flow:**
- OAuth 2.0 authorization-code flow (with client secret, no PKCE) in `/api/spotify/login` and `/api/spotify/callback`
- Tokens stored in HTTP-only cookies; `/api/spotify/refresh` refreshes them and forwards new refresh tokens to the Go backend
- `getSpotifyData()` in `app/lib/spotify.ts` is the single helper for authenticated Spotify API calls; it refreshes expired access tokens directly against Spotify's token endpoint

**Go Backend (listening history):**
- Base URL exported as `BACKEND_API_URL` from `app/lib/backend-api.ts` (`https://api-spotify-tracks.mtejeda.co`)
- Provides now-playing, recently-liked, and per-genre data; also stores Spotify refresh tokens (`/save-refresh`)
- `useNowPlaying` hook (`app/hooks/use-now-playing.ts`) polls it via SWR

**Contentful Integration:**
- GraphQL API client `fetchGraphQL()` in `app/lib/contentful-api.ts`
- Content types: `PageMusic`, `BlockTopArtists`, `BlockProfileData`, `ItemGenres`, `SimilarArtists`, `BlockMedia`
- Rich text rendering with `@contentful/rich-text-react-renderer` in `app/components/rich-text/`
- The routes under `app/api/contentful/` are consumed by an external Contentful App (CORS origin from `CONTENTFUL_APP_URL`); shared CORS headers live in `app/lib/cors.ts`. Do not rename these route paths — the Contentful App depends on them.

**Neon PostgreSQL Database:**
- Direct SQL queries via `pg` in `app/lib/db/queries.ts` (SSL with `rejectUnauthorized: false`)
- Tables: `recently_played`, `recently_liked`, `tracks_on_repeat`, `spotify_auth`
- Used for artist listening stats (play counts, date ranges) on top-items pages

### Environment Variables Required

```
CONTENTFUL_SPACE_ID
CONTENTFUL_ENVIRONMENT
CONTENTFUL_ACCESS_TOKEN
CONTENTFUL_APP_URL          (CORS origin for the Contentful App; defaults to http://localhost:8000)
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REDIRECT_URI
NEXT_PUBLIC_APP_URL
DB_HOST (Neon PostgreSQL)
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD
```

### File Structure Notes

- `app/page.tsx` - Homepage (music journal: NowPlaying, TopArtists, Genres)
- `app/components/` - React components, one folder per component
- `app/hooks/` - Client hooks (`use-now-playing.ts`)
- `app/lib/spotify.ts` - Authenticated Spotify API helper with token refresh
- `app/lib/backend-api.ts` - Go backend base URL + fetchers
- `app/lib/contentful-api.ts` - Contentful GraphQL client
- `app/lib/cors.ts` - Shared CORS headers for Contentful App routes
- `app/lib/db/queries.ts` - Direct SQL queries for Neon PostgreSQL
- `app/api/spotify/` - Spotify OAuth endpoints (login, callback, refresh)
- `app/api/contentful/` - Endpoints consumed by the external Contentful App
- `app/music-journal/` - Journal sub-pages (top-items, my-collection, recent-liked-track)
- `contentful/migrations/` - Contentful content type migration scripts
- `contentful-export*/` directories are gitignored space exports (recreate with `npm run cf-export`)

### Styling

- Tailwind CSS plus CSS modules for component-specific styles
- Custom Google Font: Almendra (applied in root layout)
