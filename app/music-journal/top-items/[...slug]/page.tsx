import getArtistData from "@/app/lib/spotify-requests/get-artist-data";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import Image from "next/image";
import RichText from "@/app/components/render-elements/richt-text";
import AlbumImage from "@/app/components/album-image/album-image";
import SimilarArtistImage from "@/app/components/album-image/similar-artist-album-image";
import styles from "./page.module.css";

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
  pageMusicCollection(where: {recentlyLikedId: $recentlyLikedId}, limit: 2) {
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
        links {
          assets {
            block {
             ... on Asset {
                sys {
                  id
                }
                url
                title
                description
                contentType
              }
              sys{
                id
              }
              title
              url
              contentType
            }
          }
        }
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

  if (!itemId) {
    return notFound();
  }
  const { pageMusicCollection } = contentfulData?.data;

  const outfitVibe = pageMusicCollection?.items[0]?.outfitVibe?.url;

  const itemJsonData = pageMusicCollection.items[0]?.itemJsonData;

  return (
    <>
      <div>
        <div className={styles.gridLayout}>
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
          <RichText
            documents={
              contentfulData.data.pageMusicCollection.items[0]
                ?.firstImpressionReview.json
            }
            assetMap={Object.fromEntries(
              contentfulData.data.pageMusicCollection.items[0]?.firstImpressionReview.links.assets.block.map(
                (asset) => [asset.sys.id, asset]
              ) || []
            )}
          />
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

      <div></div>
    </>
  );
}

// grid grid-cols-3 place-items-center h-screen border border-blue-700
