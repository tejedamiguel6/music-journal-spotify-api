import type { Entry, EntryFields } from "contentful";
import type { TypeItemPostFields } from "./TypeItemPost";

export interface TypeItemSpotifyTopItemFields {
    title?: EntryFields.Symbol;
    itemType?: "top-artists" | "top-tracks";
    itemData?: EntryFields.Symbol;
    memory?: Entry<TypeItemPostFields>;
}

export type TypeItemSpotifyTopItem = Entry<TypeItemSpotifyTopItemFields>;
