import type { Entry, EntryFields } from "contentful";

export interface TypeNavigationItemFields {
    label?: EntryFields.Symbol;
    externalUrl?: EntryFields.Symbol;
    icon?: EntryFields.Symbol;
}

export type TypeNavigationItem = Entry<TypeNavigationItemFields>;
