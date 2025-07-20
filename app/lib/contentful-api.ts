export async function fetchGraphQL(query: string, variables: any = {}) {
  const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 }, // revalidate every 60 seconds
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());
}
