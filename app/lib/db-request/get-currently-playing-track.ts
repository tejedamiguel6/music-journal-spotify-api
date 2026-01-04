export default async function getCurrentlyPlayingTrack() {
  try {
    const response = await fetch("https://api-spotify-tracks.mtejeda.co/now-listening-to");

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch {
    console.error("Error fetching tracks from DB");
  }
}
