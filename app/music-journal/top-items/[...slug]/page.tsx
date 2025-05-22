import getArtistData from "@/app/lib/spotify-requests/get-artist-data";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import RenderElements from "@/app/components/render-elements/render-elements";
import Image from "next/image";
import AlbumImage from "@/app/components/album-image/album-image";
import SimilarArtistImage from "@/app/components/album-image/similar-artist-album-image";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    id?: string;
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id: itemId } = searchParams;

  // console.log(itemId, "this ID");

  const query = `
  query MUSIC_ITEM_PAGE($recentlyLikedId: String!) {
  pageMusicCollection(where: {recentlyLikedId: $recentlyLikedId}) {
    items {
      title
      slug
      itemJsonData
      mood
      outfitVibe {
        url
        width
        height
      }
      firstImpressionReview {
        json
      }
      similarArtistsCollection {
        items {
          name
          similarArtists
        }
      }
    }
  }
}
`;

  const contentfulData = await fetchGraphQL(query, {
    recentlyLikedId: itemId,
  });

  const contentfultext =
    contentfulData.data?.pageMusicCollection.items[0]?.firstImpressionReview
      .json.content;

  if (!itemId) {
    return notFound();
  }
  const { pageMusicCollection } = contentfulData?.data;

  const outfitVibe = pageMusicCollection?.items[0]?.outfitVibe?.url;

  const itemJsonData = pageMusicCollection.items[0]?.itemJsonData;

  return (
    <div>
      <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 min-h-screen items-center">
        <div className="">
          {outfitVibe ? (
            <Image
              src={outfitVibe}
              width={pageMusicCollection.items[0].outfitVibe.width}
              height={pageMusicCollection.items[0].outfitVibe.height}
              alt={`mood of the day`}
            />
          ) : null}
        </div>

        <AlbumImage artistData={itemJsonData} text="Top Artist" />
        <RenderElements elements={contentfultext} />
      </div>

      {pageMusicCollection.items[0]?.similarArtistsCollection.items[0]?.similarArtists.map(
        (artist) => {
          // console.log("MIGUEL", artist);

          return (
            <div>
              <AlbumImage
                artistData={artist}
                text="Personally Curated Similar Artists:"
              />
            </div>
          );
        }
      )}
    </div>
  );
}

// grid grid-cols-3 place-items-center h-screen border border-blue-700
