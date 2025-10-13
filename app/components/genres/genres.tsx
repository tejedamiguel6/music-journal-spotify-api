import styles from "./genres.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";

import Genre from "./genre";

export default async function Genres() {
  const generes = `
  query GENRES {
  itemGenresCollection {
    items {
      title
      genres
    }
  }
}`;
  const { data } = await fetchGraphQL(generes);
  return (
    <div>
      <h1 className={styles.title}>
        {data.itemGenresCollection.items[0].title}
      </h1>
      <div>
        <Genre genre={data} />
      </div>
    </div>
  );
}
