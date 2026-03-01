# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 application with App Router — a personal music journal that integrates with Spotify Web API, Contentful CMS, and a Neon PostgreSQL database.

### Key Integration Points

**Spotify Authentication Flow:**
- OAuth 2.0 PKCE flow implemented in `/api/spotify/login` and `/api/spotify/callback`
- Tokens stored in HTTP-only cookies
- Automatic token refresh via `/api/spotify/refresh`
- Shared utility `getSpotifyData()` in `app/lib/spotify-requests/spotify.ts` handles token refresh automatically

**Contentful Integration:**
- GraphQL API client in `app/lib/contentful-api.ts`
- Content types: `PageMusic`, `BlockTopArtists`, `BlockProfileData`, `ItemGenres`, `SimilarArtists`
- Rich text rendering with `@contentful/rich-text-react-renderer`

**Neon PostgreSQL Database:**
- Direct SQL queries via `pg` in `app/lib/db/queries.ts`
- Tables: `recently_played`, `recently_liked`, `tracks_on_repeat`, `spotify_auth`
- Used for artist listening stats (play counts, date ranges)

**Data Flow:**
- Spotify data fetched server-side in route handlers
- Some Spotify data stored in Contentful to avoid frequent API calls
- Listening history stored in Neon PostgreSQL for analytics

### Environment Variables Required

```
CONTENTFUL_SPACE_ID
CONTENTFUL_ENVIRONMENT
CONTENTFUL_ACCESS_TOKEN
NEXT_CLIENT_ID (Spotify)
NEXT_CLIENT_SECRET (Spotify)
NEXT_PUBLIC_REDIRECT_URI
NEXT_PUBLIC_APP_URL
DB_HOST (Neon PostgreSQL)
DB_PORT
DB_NAME
DB_USER
DB_PASSWORD
```

### File Structure Notes

- `app/components/` - React components organized by feature
- `app/components/artist-stats/` - Artist listening history stats table
- `app/components/spotify-*` - Spotify data display components
- `app/lib/spotify-requests/` - Spotify API utilities
- `app/lib/db/` - Direct SQL queries for Neon PostgreSQL
- `app/lib/db-request/` - External database request utilities
- `app/api/spotify/` - Spotify OAuth and data endpoints
- `app/api/contentful/` - Contentful data endpoints
- `app/music-journal/` - Music journal sub-pages (top-items, my-collection, recent-liked-track)
- `contentful/migrations/` - Contentful content type migration scripts

### Styling

- Tailwind CSS for styling
- Custom Google Fonts: Almendra
- CSS modules for component-specific styles
