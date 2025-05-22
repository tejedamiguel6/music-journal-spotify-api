// getTopTracks.ts
import { fetchGraphQL } from "@/app/lib/contentful-api";

export default async function getTopTracks() {
  const query = `
    query GET_TOP_TRACKS($title: String) {
      blockTopArtistsCollection(where: { title: $title }) {
      items {
      _id
      sys {
        id
      }
      title
      itemType
      topArtists
    }
      }
    }
  `;

  const variables = { title: "TOP TRACKS" };

  const { data } = await fetchGraphQL(query, variables);
  return data;
}
