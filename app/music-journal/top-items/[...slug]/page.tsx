import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/app/lib/contentful-api";
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
        {/* <NowPlaying /> */}

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
          <div >

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

        </div>

        {/* start dev blog notes  */}
        {developerLogsCollection?.items?.map((item) => {
          const image = item.screenshotsCollection.items.map((item) => item)
          return (
            <>
              <div className={styles.devSummaryHeader}>
                <h1>dev summary</h1>
                <h1 className={styles.devTitle}>{item.title}</h1>
                <h3 className={styles.devConcept}>Concept: --&gt; {item.concept}</h3>
                <p className={styles.programmingLanguage}>Programming Language: ----&gt; {item.programmingLanguage}</p>
              </div>

              <div className={styles.devImageContainer}>
                {image?.slice(0, 1).map((item) => (
                  <Image
                    key={item.url}
                    className={styles.devImage}
                    src={item.url}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                  />
                ))}

                <Link href={`/devblog/${item.slug}`} className={styles.readMoreLink}>
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
