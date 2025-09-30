import type { Entry, EntryFields } from "contentful";
import type { TypeItemGenresFields } from "./TypeItemGenres";

export interface TypeItemGenreFields {
    genre?: Entry<TypeItemGenresFields>;
    tracks?: EntryFields.Object;
}

export type TypeItemGenre = Entry<TypeItemGenreFields>;
