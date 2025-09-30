import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeAuthorFields {
    internalId: EntryFields.Symbol;
    name: EntryFields.Symbol;
    bio?: EntryFields.Text;
    profilePicture?: Asset;
    email?: EntryFields.Symbol;
}

export type TypeAuthor = Entry<TypeAuthorFields>;
