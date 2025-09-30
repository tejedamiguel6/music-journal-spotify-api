import type { Entry, EntryFields } from "contentful";

export interface TypeBlockTopArtistsFields {
    title?: EntryFields.Symbol;
    itemType?: "top-artists" | "top-tracks";
    topArtists?: EntryFields.Object;
}

export type TypeBlockTopArtists = Entry<TypeBlockTopArtistsFields>;
