import getArtistData from "@/app/lib/spotify-requests/get-artist-data";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import RenderElements from "@/app/components/render-elements/render-elements";
import Image from "next/image";
import AlbumImage from "@/app/components/album-image/album-image";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {
    id?: string;
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = params;
  const { id } = searchParams;

  console.log(id, "this ID");

  const query = `
  query MUSIC_ITEM_PAGE($recentlyLiked: String!) {
     pageMusicCollection(where: {recentlyLiked: $recentlyLiked}) {
    items {
      title
      slug
      itemType
      recentlyLiked
      mood
      outfitVibe {
        url
        width
        height
      }
      firstImpressionReview {
        json
      }
    }
  }
  }
`;

  const contentfulData = await fetchGraphQL(query, {
    recentlyLiked: id,
  });

  // console.log("this is CONTENTFUL@@@@->", commentIdFromContentful);

  const contentfultext =
    contentfulData.data.pageMusicCollection.items[0]?.firstImpressionReview.json
      .content;

  if (!id) {
    return notFound();
  }

  const artistData = await getArtistData(id);

  if (!artistData) {
    return notFound();
  }

  const { pageMusicCollection } = contentfulData.data;
  // console.log(pageMusicCollection, "siii!");

  const outfitVibe = pageMusicCollection?.items[0]?.outfitVibe?.url;
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

        <AlbumImage artistData={artistData} />
        <RenderElements elements={contentfultext} />
        <h1>Favorite album:</h1>
      </div>
    </div>
  );
}

// grid grid-cols-3 place-items-center h-screen border border-blue-700
