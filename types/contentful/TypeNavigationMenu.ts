import type { Entry, EntryFields } from "contentful";

export interface TypeNavigationMenuFields {
    title?: EntryFields.Symbol;
}

export type TypeNavigationMenu = Entry<TypeNavigationMenuFields>;
