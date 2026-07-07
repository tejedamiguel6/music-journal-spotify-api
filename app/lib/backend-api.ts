// Go backend that records Spotify listening history.
export const BACKEND_API_URL = "https://api-spotify-tracks.mtejeda.co";

export async function fetchGenres() {
  try {
    const response = await fetch(`${BACKEND_API_URL}/recently-liked`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }
    return data;
  } catch (error) {
    console.error("Error fetching genres from backend", error);
  }
}

export async function fetchAGenre(genre: string) {
  try {
    const response = await fetch(
      `${BACKEND_API_URL}/genre/${encodeURIComponent(genre)}`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch genre");
    }
    return data;
  } catch (error) {
    console.error("Error fetching genre from backend", error);
    return { data: [] };
  }
}
