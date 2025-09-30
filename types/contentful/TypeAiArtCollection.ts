import type { Entry, EntryFields } from "contentful";
import type { TypeItemAiArtPostFields } from "./TypeItemAiArtPost";

export interface TypeAiArtCollectionFields {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    description?: EntryFields.Text;
    aiArtworks: Entry<TypeItemAiArtPostFields>[];
    featuredArtwork?: Entry<TypeItemAiArtPostFields>;
    curatorNotes?: EntryFields.RichText;
    tags?: EntryFields.Symbol[];
    dateCreated?: EntryFields.Date;
    collectionTheme?: "Abstract" | "Cyberpunk" | "Dystopian" | "Fantasy" | "Futuristic" | "Nature" | "Other" | "Space" | "Utopian";
    relatedCollections?: Entry<TypeAiArtCollectionFields>[];
}

export type TypeAiArtCollection = Entry<TypeAiArtCollectionFields>;
