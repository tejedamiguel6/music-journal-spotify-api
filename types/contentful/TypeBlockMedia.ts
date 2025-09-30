import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeItemPostFields } from "./TypeItemPost";

export interface TypeBlockMediaFields {
    title?: EntryFields.Symbol;
    media?: Asset;
    description?: EntryFields.Symbol;
    altText?: EntryFields.Symbol;
    post?: Entry<TypeItemPostFields>;
    tag?: EntryFields.Symbol[];
}

export type TypeBlockMedia = Entry<TypeBlockMediaFields>;
