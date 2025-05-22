import { fetchGraphQL } from "./lib/contentful-api";
import Image from "next/image";
import Link from "next/link";
import AiCardImages from "./components/ai-images/AiCardImages";
import Navigation from "./components/navigation/navigation";
import { cookies } from "next/headers";

import Profile from "./components/spotify-profile/profile";
import UserTopArtists from "./components/spotify-user-data/user-top-artists";

export default async function Page() {
  const query = `
   query DREAM_AI_MAP {
  pageCollection(where: {slug: "dream-map"}, limit: 1) {
    items {
      title
      slug
      sectionsCollection (limit:7){
        items  {
          __typename
          ... on ItemAiArtPost {
            title
            slug
            aiMediaCollection(limit: 10) {
              items {
                media {
                  title
                  description
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
  const { data } = await fetchGraphQL(query);

  const { pageCollection } = data;

  // console.log(pageCollection, "DATA");

  return (
    <>
      <AiCardImages aiImageData={pageCollection} />

      <div className="flex justify-between">
        <div className=" p-10">
          <h1 className="text-2xl  font-bold">MIGUEL TEJEDA</h1>
          <p className="w-5/6">
            this is space for me where i can give it a shot at technical
            writing, art, bloggin, and learning new tech
          </p>
        </div>

        <p className="w-3/12  ">SOCIAL MEDIA ICONS HERE</p>
      </div>

      {/* start spotify  */}
      <div className="grid [grid-template-columns:repeat(6,1fr)]">
        <div className="col-span-2">
          <Profile />
        </div>

        <div className="col-span-4">
          <UserTopArtists limit={2} className="grid grid-cols-2 mt-8 gap-4" />
        </div>
      </div>
    </>
  );
}
