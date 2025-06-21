export default async function getTracksFromDB() {
  try {
    let response = await fetch(
      `${process.env.DB_API_URL || "http://localhost:8080"}/mostPlayedTracks`
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (error) {
    console.error("Error fetching tracks from DB");
  }

  //   console.log("data from getTracksFromDB", data);
}
