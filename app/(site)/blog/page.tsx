import { fetchGraphQL } from "../../lib/contentful-api";
import BlogImages from "../../components/blog-images/BlogImages";
import styles from "./page.module.css";

export default async function Home() {
  const query = `
  query HOME_PAGE {
  pageCollection(limit: 5) {
    items {
      _id
      slug
      title
      sectionsCollection(limit: 5) {
        items {
          ... on BlockMedia {
          __typename
            sys {
              id
            }
            media {
              url
            }
            post {
              title
              slug
              publishedDate
            }
          }
        }
      }
    }
  }
}

  `;

  const { data } = await fetchGraphQL(query);

  return (
    <div>
      <h1 className={styles.title}>Visual Diary!</h1>
      <div>
        <div>
          {data.pageCollection?.items?.map((sectionCollections: { sectionsCollection: { items: Array<{ __typename: string }> } }) =>
            sectionCollections.sectionsCollection.items.map((section) => {
              // console.log("check for type of section", section);

              if (section.__typename === "BlockMedia") {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <BlogImages imageData={section} />
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}
