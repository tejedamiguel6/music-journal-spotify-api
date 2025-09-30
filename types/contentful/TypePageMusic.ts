import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeBlockCodeBuildNoteFields } from "./TypeBlockCodeBuildNote";
import type { TypeSimilarArtistsFields } from "./TypeSimilarArtists";

export interface TypePageMusicFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    fontType?: EntryFields.Symbol;
    backgroundColor?: EntryFields.Symbol;
    itemType?: "top-artists" | "top-tracks";
    recentlyLikedId?: EntryFields.Symbol;
    itemJsonData?: EntryFields.Object;
    mood?: "alternative" | "blade-runer" | "brooding" | "chaotic neutral" | "emo" | "ethereal" | "punk" | "synth";
    memoryPic?: Asset;
    firstImpressionReview?: EntryFields.RichText;
    outfitVibe?: Asset;
    developerLogs?: Entry<TypeBlockCodeBuildNoteFields>[];
    similarArtists?: Entry<TypeSimilarArtistsFields>[];
}

export type TypePageMusic = Entry<TypePageMusicFields>;
