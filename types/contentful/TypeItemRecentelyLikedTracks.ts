import type { Entry, EntryFields } from "contentful";

export interface TypeItemRecentelyLikedTracksFields {
    slug?: EntryFields.Symbol;
    genre?: EntryFields.Symbol[];
    backgroundColor?: EntryFields.Symbol;
    tracks?: EntryFields.Object;
}

export type TypeItemRecentelyLikedTracks = Entry<TypeItemRecentelyLikedTracksFields>;
