import type { Entry, EntryFields } from "contentful";

export interface TypeItemPostFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    previewText?: EntryFields.Symbol;
    content?: EntryFields.RichText;
    publishedDate?: EntryFields.Date;
    testJosn?: EntryFields.Object;
}

export type TypeItemPost = Entry<TypeItemPostFields>;
