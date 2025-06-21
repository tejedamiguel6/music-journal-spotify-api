# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 application with App Router that integrates with Spotify Web API and Contentful CMS. The application is a personal music journal that displays Spotify data (now playing, top tracks, top artists) alongside content managed through Contentful.

### Key Integration Points

**Spotify Authentication Flow:**
- OAuth 2.0 PKCE flow implemented in `/api/spotify/login` and `/api/spotify/callback`
- Tokens stored in HTTP-only cookies
- Automatic token refresh via `/api/spotify/refresh`
- Shared utility `getSpotifyData()` in `app/lib/spotify-requests/spotify.ts` handles token refresh automatically

**Contentful Integration:**
- GraphQL API client in `app/lib/contentful-api.ts`
- Content types include blog posts, AI-generated content, and media blocks
- Rich text rendering with `@contentful/rich-text-react-renderer`

**Data Flow:**
- Spotify data fetched server-side in route handlers
- Some Spotify data stored in Contentful to avoid frequent API calls
- External Go backend integration for persistent refresh token storage

### Environment Variables Required

```
CONTENTFUL_SPACE_ID
CONTENTFUL_ENVIRONMENT
CONTENTFUL_ACCESS_TOKEN
NEXT_CLIENT_ID (Spotify)
NEXT_PUBLIC_REDIRECT_URI
NEXT_PUBLIC_APP_URL
```

### File Structure Notes

- `app/components/` - React components organized by feature
- `app/lib/spotify-requests/` - Spotify API utilities
- `app/lib/db-request/` - External database request utilities
- `app/api/spotify/` - Spotify OAuth and data endpoints
- `app/api/contentful/` - Contentful data endpoints
- `app/music-journal/` - Main music journal pages
- `app/dream-map/` - AI-generated content pages

### Styling

- Tailwind CSS for styling
- Custom Google Fonts: Syne (primary), Geist Sans, Geist Mono
- CSS modules for component-specific styles