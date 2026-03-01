import { getArtistTopTracks } from "@/app/lib/db/queries";

async function demo() {
  const rows = await getArtistTopTracks("Depeche Mode");
  console.table(rows);
}

demo()
  .then(() => console.log("Demo completed successfully."))
  .catch((error) => console.error("Error during demo:", error));
