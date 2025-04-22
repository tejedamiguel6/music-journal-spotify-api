import { fetchGraphQL } from "@/app/lib/contentful-api";
import Image from "next/image";

import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";

import styles from "../ai-post.module.css";
import Post from "@/app/components/ai-posts/post";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // cfetch graphql query for single param
  const singlePostSlug = `
  query SINGLE_PAGE_SLUG($slug: String!) {
  itemAiArtPostCollection(where: {slug: $slug}) {
    items {
      title
      slug
      sys {
        id
      }
      aiMediaCollection(limit: 1) {
        items {
          description
          altText
          media {
            url
            width
            height
          }
          post {
            title
            content {
              json
            }
          }
        }
      }
    }
  }
}`;

  const { data } = await fetchGraphQL(singlePostSlug, { slug });

  // console.log("SLUGGGGGG--->", data);

  const collection = data.itemAiArtPostCollection.items;
  return (
    <div className={styles.container}>
      {collection &&
        collection.map((item: any, index) => {
          return (
            <div key={index}>
              {item.aiMediaCollection?.items.map(
                (collection, index: number) => {
                  console.log(collection, "get posts");
                  const posts = collection?.post?.content.json?.content;
                  return (
                    <>
                      <div key={index} className={styles.aiImage}>
                        <Image
                          src={collection.media.url}
                          width={collection.media.width}
                          height={collection.media.height}
                          alt={collection.altText}
                        />
                      </div>
                      <>{posts && <Post post={posts} />}</>
                    </>
                  );
                }
              )}
              <h1 className={styles.postTitle}>
                {item.title ? item.title : <p>No title</p>}
              </h1>
              <h3>{collection.description}</h3>
            </div>
          );
        })}
    </div>
  );
}
