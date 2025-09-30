import * as Contentful from "./contentful";

export type AiCollection = Contentful.TypeAiArtCollectionFields & {
  items: any;
};
