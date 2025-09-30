export default async function fetchGenres() {
  const url = "http://localhost:8080/recently-liked";
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }
    return data;
    // console.log("Fetched genres:", data);
    // const genres = data.map((item) => item.genres)
  } catch (error) {
    console.error("Error fetching genres from DB", error);
  }
}

export async function fetchAGenre(genre: string) {
  const url = `http://localhost:8080/genre/${encodeURIComponent(genre)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to fetch genre");
    }
    return data;
    // console.log("Fetched genre:", data);
  } catch (error) {
    console.log("Error fetching genre", error);
    return { data: [] };
  }
}
