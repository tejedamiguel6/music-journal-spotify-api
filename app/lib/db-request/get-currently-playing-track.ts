export default async function getCurrentlyPlayingTrack() {
  try {
    let response = await fetch("http://localhost:8080/now-listening-to");

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (error) {
    console.error("Error fetching tracks from DB");
  }
}
