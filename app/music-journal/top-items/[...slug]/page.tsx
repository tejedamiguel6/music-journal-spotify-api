import getArtistData from "@/app/lib/spotify-requests/get-artist-data";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import Image from "next/image";
import RichText from "@/app/components/render-elements/richt-text";
import AlbumImage from "@/app/components/album-image/album-image";
// import SimilarArtistImage from "@/app/components/album-image/similar-artist-album-image";
import styles from "./page.module.css";

import ArtistStatsTable from "@/app/components/ai-agent/agent-artist/agent-artist-stat-table";
import Loading from "./loading";

import { Suspense } from "react";
import Link from "next/link";

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
          developerLogsCollection(limit: 4) {
            items {
              _id
              internalId
              title
              slug
              codeSnippet {
                json
                links {
                  assets {
                    block {
                      height
                      width
                      url
                    }
                    hyperlink {
                      url
                    }
                  }
                }
              }
              programmingLanguage
              concept
              devThoughts {
                json
                links {
                  assets {
                    block {
                      title
                      width
                      height
                      url
                    }
                  }
                }
              }
              screenshotsCollection(limit: 4) {
                items {
                  height
                  width
                  url
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

  const { developerLogsCollection } = pageMusicCollection.items?.[0] ?? {};

  // console.log("developerLogsCollection", developerLogsCollection);

  return (
    <>
      <div className={styles.container}
        key={itemJsonData?.id}
        style={{ backgroundColor: backgroundColor ?? undefined }}
      >
        <div className={styles.gridLayout} key={itemJsonData?.id}>
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
          <AlbumImage artistData={itemJsonData} text="❤️MOOD🖤" />
          <RichText
            documents={
              contentfulData.data.pageMusicCollection.items[0]
                ?.firstImpressionReview.json
            }
            assetMap={Object.fromEntries(
              contentfulData.data.pageMusicCollection.items[0]?.firstImpressionReview.links.assets.block.map(
                (asset) => [asset.sys.id, asset],
              ) || [],
            )}
          />
        </div>

        {/* start dev blog notes  */}
        {developerLogsCollection?.items?.map((item) => {
          const image = item.screenshotsCollection.items.map((item) => item)
          return (
            <>
              <div className="text-center ">
                <h1>dev summary</h1>
                <h1 className="text-3xl">{item.title}</h1>>
                <h3>Concept: --> {item.concept}</h3>
                <p className="p-4 text-fuchsia-400" >Programming Language: ----> {item.programmingLanguage}</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                {image?.slice(0, 1).map((item) => (
                  <img
                    key={item.url}
                    className="w-3/6 h-auto rounded-lg border border-fuchsia-400"
                    src={item.url}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                  />
                ))}

                <Link href={`/devblog/${item.slug}`} className="mt-2 text-fuchsia-500 hover:underline">
                  Read More!
                </Link>
              </div>
            </>
          );
        })}

        {pageMusicCollection.items[0]?.similarArtistsCollection.items[0]?.similarArtists.map(
          (artist) => {
            // console.log("MIGUEL", artist);
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
