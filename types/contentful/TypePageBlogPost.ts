import type { Asset, Entry, EntryFields } from "contentful";

export interface TypePageBlogPostFields {
    internalId?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    author?: Entry<Record<string, any>>;
    publishedDate?: EntryFields.Date;
    seo?: Entry<Record<string, any>>;
    category?: Entry<Record<string, any>>;
    featuredImage?: Asset;
    content?: EntryFields.RichText;
}

export type TypePageBlogPost = Entry<TypePageBlogPostFields>;
