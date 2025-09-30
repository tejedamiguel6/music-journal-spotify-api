import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeBlockMediaFields } from "./TypeBlockMedia";
import type { TypeBlockProfileDataFields } from "./TypeBlockProfileData";
import type { TypeBlockTopArtistsFields } from "./TypeBlockTopArtists";
import type { TypeCategoryFields } from "./TypeCategory";
import type { TypeItemAiArtPostFields } from "./TypeItemAiArtPost";
import type { TypeItemGenresFields } from "./TypeItemGenres";
import type { TypeItemPostFields } from "./TypeItemPost";

export interface TypePageFields {
    internalId: EntryFields.Symbol;
    title: EntryFields.Symbol;
    pageType?: "music";
    slug: EntryFields.Symbol;
    sections?: Entry<TypeBlockMediaFields | TypeBlockProfileDataFields | TypeBlockTopArtistsFields | TypeItemAiArtPostFields | TypeItemGenresFields | TypeItemPostFields>[];
    category?: Entry<TypeCategoryFields>;
    featuredImage?: Asset;
}

export type TypePage = Entry<TypePageFields>;
