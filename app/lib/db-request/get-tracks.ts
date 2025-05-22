export default async function getTracksFromDB() {
  let response = await fetch(`${process.env.DB_API_URL || "http://localhost:8080"}/mostPlayedTracks`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  //   console.log("data from getTracksFromDB", data);
  return data;
}
