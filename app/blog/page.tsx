import { fetchGraphQL } from "../lib/contentful-api";
import BlogImages from "../components/blog-images/BlogImages";

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
      <h1 className="text-center ">Visual Diary!</h1>
      <div>
        <div>
          {data.pageCollection?.items?.map((sectionCollections) =>
            sectionCollections.sectionsCollection.items.map((section) => {
              // console.log("check for type of section", section);

              if (section.__typename === "BlockMedia") {
                return (
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
