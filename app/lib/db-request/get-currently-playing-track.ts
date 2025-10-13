export default async function getCurrentlyPlayingTrack() {
  try {
    const response = await fetch("http://localhost:8080/now-listening-to");

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch {
    console.error("Error fetching tracks from DB");
  }
}
