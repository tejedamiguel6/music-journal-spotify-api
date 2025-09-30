import type { Entry, EntryFields } from "contentful";

export interface TypeItemRecentlyLikedFields {
    tracks?: EntryFields.Object;
}

export type TypeItemRecentlyLiked = Entry<TypeItemRecentlyLikedFields>;
