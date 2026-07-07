import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import Image from "next/image";
import RichText from "@/app/components/rich-text/rich-text";
import AlbumImage from "@/app/components/album-image/album-image";
import styles from "./page.module.css";

import ArtistStatsTable from "@/app/components/artist-stats/artist-stats-table";
import PageBackground from "@/app/components/page-background/page-background";
import Loading from "./loading";

import { Suspense } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { id: itemId } = await searchParams;

  const query = `
    query MUSIC_ITEM_PAGE($recentlyLikedId: String!) {
      pageMusicCollection(where: {recentlyLikedId: $recentlyLikedId}, limit: 1) {
        items {
          title
          slug
          itemJsonData
          mood
          fontType
          backgroundColor
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
                  sys {
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
  // console.log("get the all data===>", pageMusicCollection);
  const outfitVibe = pageMusicCollection?.items[0]?.outfitVibe?.url;
  const itemJsonData = pageMusicCollection.items[0]?.itemJsonData;
  // console.log("this itemJsonData", itemJsonData.name);
  const backgroundColor = pageMusicCollection.items[0]?.backgroundColor;

  return (
    <>
      <PageBackground color={backgroundColor} />
      <div className={styles.container} key={itemJsonData?.id}>
        <div className={styles.gridLayout} key={itemJsonData?.id}>
          <div className={styles.outfitVibe}>
            {outfitVibe ? (
              <Image
                src={outfitVibe}
                width={pageMusicCollection.items[0].outfitVibe.width}
                height={pageMusicCollection.items[0].outfitVibe.height}
                alt={`mood of the day`}
              />
            ) : null}
          </div>
          <AlbumImage artistData={itemJsonData} text="❤️MOOD🖤" />
          <div>
            <RichText
              documents={
                contentfulData.data.pageMusicCollection.items[0]
                  ?.firstImpressionReview.json
              }
              assetMap={Object.fromEntries(
                contentfulData.data.pageMusicCollection.items[0]?.firstImpressionReview.links.assets.block.map(
                  (asset: { sys: { id: string } }) => [asset.sys.id, asset],
                ) || [],
              )}
            />
          </div>
        </div>

        {pageMusicCollection.items[0]?.similarArtistsCollection.items[0]?.similarArtists.map(
          (artist: {
            id: string;
            name: string;
            images: Array<{ url: string; width: number; height: number }>;
          }) => {
            return (
              <div key={artist.id}>
                <AlbumImage
                  artistData={artist}
                  text="Personally Curated Similar Artists:"
                />
              </div>
            );
          },
        )}

        <Suspense fallback={<Loading />}>
          <ArtistStatsTable artistName={itemJsonData?.name} />
        </Suspense>
      </div>
    </>
  );
}
