import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from 'crypto';

// Generate random string helper
const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

// Base64 encode ArrayBuffer
const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export async function GET() {
  const clientId = process.env.NEXT_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
  
  // Generate code verifier and state
  const codeVerifier = generateRandomString(64);
  const state = generateRandomString(16);
  
  // Hash the code verifier to create a challenge
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const codeChallenge = base64encode(hash);
  
  // Store the code verifier and state in cookies
  // Make sure to use await with the cookies() API
  const cookieStore = await cookies();
   cookieStore.set("spotify_code_verifier", codeVerifier, {
    maxAge: 10 * 60, // 10 minutes
    path: "/",
  });

   cookieStore.set("spotify_auth_state", state, {
    maxAge: 10 * 60, // 10 minutes
    path: "/",
  });
  
  // Build the authorization URL
  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: "user-read-private user-read-email user-library-read user-top-read user-read-currently-playing user-read-recently-played",    
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: "S256",
    code_challenge: codeChallenge
  });

  return NextResponse.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}