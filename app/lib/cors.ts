// CORS headers for API routes consumed by the Contentful app.
const ALLOWED_ORIGIN =
  process.env.CONTENTFUL_APP_URL || "http://localhost:8000";

export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
};
