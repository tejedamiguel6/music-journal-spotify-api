import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeSimilarArtistsFields {
    name?: EntryFields.Symbol;
    genre?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    image?: Asset;
    similarArtists?: EntryFields.Object;
}

export type TypeSimilarArtists = Entry<TypeSimilarArtistsFields>;
