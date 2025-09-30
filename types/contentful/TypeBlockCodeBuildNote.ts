import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeBlockCodeBuildNoteFields {
    internalId?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    backgroundColor?: EntryFields.Symbol;
    codeSnippet?: EntryFields.RichText;
    programmingLanguage?: "Go" | "Javascript" | "Typescript";
    concept?: EntryFields.Symbol;
    devThoughts?: EntryFields.RichText;
    screenshots?: Asset[];
}

export type TypeBlockCodeBuildNote = Entry<TypeBlockCodeBuildNoteFields>;
