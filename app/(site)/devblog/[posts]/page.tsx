import { fetchGraphQL } from "@/app/lib/contentful-api";
import styles from "./dev-post.module.css";

import RichText from "@/app/components/render-elements/richt-text";

export default async function BlogPostPage({
  params,
}: {
  params: { posts: string };
}) {
  // console.log("get params---> ", params);

  const { posts } = params;

  // console.log("get the post slug-====@@@@@", posts);

  const query = `
    query BLOG_POST($slug: String!) {
      blockCodeBuildNoteCollection(where: {slug: $slug}) {
        items {
          title
          concept
          backgroundColor
          codeSnippet {
            json
          }
          devThoughts {
            json
          }
          programmingLanguage
          screenshotsCollection {
            items {
              height
              width
              url
            }
          }
        }
      }
    }`;

  const { data } = await fetchGraphQL(query, { slug: posts });
  // console.log("dev blog data!", data);
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor:
          data.blockCodeBuildNoteCollection.items[0].backgroundColor,
      }}
    >
      <h1 className={styles.title}>
        {data.blockCodeBuildNoteCollection.items[0].title}
      </h1>
      <h3>
        Programmingh Langauge:
        {data.blockCodeBuildNoteCollection.items[0].programmingLanguage}
      </h3>
      <div>
        <p>{data.blockCodeBuildNoteCollection.items[0].concept}</p>
      </div>

      <div>
        <h1>content here </h1>
        <div className="flex justify-center items-center w-2/3 mx-auto max-w-prose px-4 leading-relaxed text-white space-y-6">
          <RichText
            documents={
              data.blockCodeBuildNoteCollection.items[0].devThoughts.json
            }
          />
        </div>
      </div>
    </div>
  );
}
