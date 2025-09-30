import type { Entry, EntryFields } from "contentful";
import type { TypeBlockMediaFields } from "./TypeBlockMedia";

export interface TypeItemAiArtPostFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    aiMedia?: Entry<TypeBlockMediaFields>[];
    prompt?: EntryFields.Symbol;
    track?: EntryFields.Symbol;
}

export type TypeItemAiArtPost = Entry<TypeItemAiArtPostFields>;
