import type { Entry, EntryFields } from "contentful";

export interface TypeBlockProfileDataFields {
    internalName?: EntryFields.Symbol;
    profileData?: EntryFields.Object;
}

export type TypeBlockProfileData = Entry<TypeBlockProfileDataFields>;
