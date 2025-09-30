import type { Entry, EntryFields } from "contentful";

export interface TypeItemGenresFields {
    title?: EntryFields.Symbol;
    genres?: EntryFields.Symbol[];
}

export type TypeItemGenres = Entry<TypeItemGenresFields>;
