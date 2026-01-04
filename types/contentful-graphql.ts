export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: string; output: string };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  JSON: { input: any; output: any };
  Quality: { input: any; output: any };
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollection = Entry &
  _Node & {
    __typename?: "AiArtCollection";
    _id: Scalars["ID"]["output"];
    aiArtworksCollection?: Maybe<AiArtCollectionAiArtworksCollection>;
    collectionTheme?: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulMetadata;
    curatorNotes?: Maybe<AiArtCollectionCuratorNotes>;
    dateCreated?: Maybe<Scalars["DateTime"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    featuredArtwork?: Maybe<ItemAiArtPost>;
    linkedFrom?: Maybe<AiArtCollectionLinkingCollections>;
    relatedCollectionsCollection?: Maybe<AiArtCollectionRelatedCollectionsCollection>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionAiArtworksCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AiArtCollectionAiArtworksCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemAiArtPostFilter>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionCollectionThemeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionCuratorNotesArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionDateCreatedArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionFeaturedArtworkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemAiArtPostFilter>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionRelatedCollectionsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AiArtCollectionRelatedCollectionsCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AiArtCollectionFilter>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionTagsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A collection of AI-generated artwork with curation information [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/aiArtCollection) */
export type AiArtCollectionTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AiArtCollectionAiArtworksCollection = {
  __typename?: "AiArtCollectionAiArtworksCollection";
  items: Array<Maybe<ItemAiArtPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum AiArtCollectionAiArtworksCollectionOrder {
  PromptAsc = "prompt_ASC",
  PromptDesc = "prompt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TrackAsc = "track_ASC",
  TrackDesc = "track_DESC",
}

export type AiArtCollectionCollection = {
  __typename?: "AiArtCollectionCollection";
  items: Array<Maybe<AiArtCollection>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AiArtCollectionCuratorNotes = {
  __typename?: "AiArtCollectionCuratorNotes";
  json: Scalars["JSON"]["output"];
  links: AiArtCollectionCuratorNotesLinks;
};

export type AiArtCollectionCuratorNotesAssets = {
  __typename?: "AiArtCollectionCuratorNotesAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AiArtCollectionCuratorNotesEntries = {
  __typename?: "AiArtCollectionCuratorNotesEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AiArtCollectionCuratorNotesLinks = {
  __typename?: "AiArtCollectionCuratorNotesLinks";
  assets: AiArtCollectionCuratorNotesAssets;
  entries: AiArtCollectionCuratorNotesEntries;
  resources: AiArtCollectionCuratorNotesResources;
};

export type AiArtCollectionCuratorNotesResources = {
  __typename?: "AiArtCollectionCuratorNotesResources";
  block: Array<AiArtCollectionCuratorNotesResourcesBlock>;
  hyperlink: Array<AiArtCollectionCuratorNotesResourcesHyperlink>;
  inline: Array<AiArtCollectionCuratorNotesResourcesInline>;
};

export type AiArtCollectionCuratorNotesResourcesBlock = ResourceLink & {
  __typename?: "AiArtCollectionCuratorNotesResourcesBlock";
  sys: ResourceSys;
};

export type AiArtCollectionCuratorNotesResourcesHyperlink = ResourceLink & {
  __typename?: "AiArtCollectionCuratorNotesResourcesHyperlink";
  sys: ResourceSys;
};

export type AiArtCollectionCuratorNotesResourcesInline = ResourceLink & {
  __typename?: "AiArtCollectionCuratorNotesResourcesInline";
  sys: ResourceSys;
};

export type AiArtCollectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<AiArtCollectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AiArtCollectionFilter>>>;
  aiArtworks?: InputMaybe<CfItemAiArtPostNestedFilter>;
  aiArtworksCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  collectionTheme?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_contains?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  collectionTheme_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  collectionTheme_not?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  curatorNotes_contains?: InputMaybe<Scalars["String"]["input"]>;
  curatorNotes_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  curatorNotes_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  dateCreated_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  featuredArtwork?: InputMaybe<CfItemAiArtPostNestedFilter>;
  featuredArtwork_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  relatedCollections?: InputMaybe<CfAiArtCollectionNestedFilter>;
  relatedCollectionsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tags_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tags_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type AiArtCollectionLinkingCollections = {
  __typename?: "AiArtCollectionLinkingCollections";
  aiArtCollectionCollection?: Maybe<AiArtCollectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type AiArtCollectionLinkingCollectionsAiArtCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<AiArtCollectionLinkingCollectionsAiArtCollectionCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AiArtCollectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum AiArtCollectionLinkingCollectionsAiArtCollectionCollectionOrder {
  CollectionThemeAsc = "collectionTheme_ASC",
  CollectionThemeDesc = "collectionTheme_DESC",
  DateCreatedAsc = "dateCreated_ASC",
  DateCreatedDesc = "dateCreated_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum AiArtCollectionOrder {
  CollectionThemeAsc = "collectionTheme_ASC",
  CollectionThemeDesc = "collectionTheme_DESC",
  DateCreatedAsc = "dateCreated_ASC",
  DateCreatedDesc = "dateCreated_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type AiArtCollectionRelatedCollectionsCollection = {
  __typename?: "AiArtCollectionRelatedCollectionsCollection";
  items: Array<Maybe<AiArtCollection>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum AiArtCollectionRelatedCollectionsCollectionOrder {
  CollectionThemeAsc = "collectionTheme_ASC",
  CollectionThemeDesc = "collectionTheme_DESC",
  DateCreatedAsc = "dateCreated_ASC",
  DateCreatedDesc = "dateCreated_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt?: InputMaybe<Scalars["Int"]["input"]>;
  size_gte?: InputMaybe<Scalars["Int"]["input"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]["input"]>;
  size_lte?: InputMaybe<Scalars["Int"]["input"]>;
  size_not?: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  authorCollection?: Maybe<AuthorCollection>;
  blockCodeBuildNoteCollection?: Maybe<BlockCodeBuildNoteCollection>;
  blockMediaCollection?: Maybe<BlockMediaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageMusicCollection?: Maybe<PageMusicCollection>;
  similarArtistsCollection?: Maybe<SimilarArtistsCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsBlockCodeBuildNoteCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsBlockMediaCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsPageMusicCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetLinkingCollectionsSimilarArtistsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type Author = Entry &
  _Node & {
    __typename?: "Author";
    _id: Scalars["ID"]["output"];
    bio?: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulMetadata;
    email?: Maybe<Scalars["String"]["output"]>;
    internalId?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<AuthorLinkingCollections>;
    name?: Maybe<Scalars["String"]["output"]>;
    profilePicture?: Maybe<Asset>;
    sys: Sys;
  };

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type AuthorBioArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type AuthorEmailArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type AuthorInternalIdArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** content type for authors [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/author) */
export type AuthorProfilePictureArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AuthorCollection = {
  __typename?: "AuthorCollection";
  items: Array<Maybe<Author>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  bio_contains?: InputMaybe<Scalars["String"]["input"]>;
  bio_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bio_not?: InputMaybe<Scalars["String"]["input"]>;
  bio_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  email_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalId?: InputMaybe<Scalars["String"]["input"]>;
  internalId_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalId_not?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  profilePicture_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorLinkingCollections = {
  __typename?: "AuthorLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum AuthorOrder {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNote = Entry &
  _Node & {
    __typename?: "BlockCodeBuildNote";
    _id: Scalars["ID"]["output"];
    backgroundColor?: Maybe<Scalars["String"]["output"]>;
    codeSnippet?: Maybe<BlockCodeBuildNoteCodeSnippet>;
    concept?: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulMetadata;
    devThoughts?: Maybe<BlockCodeBuildNoteDevThoughts>;
    internalId?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<BlockCodeBuildNoteLinkingCollections>;
    programmingLanguage?: Maybe<Scalars["String"]["output"]>;
    screenshotsCollection?: Maybe<AssetCollection>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteBackgroundColorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteCodeSnippetArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteConceptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteDevThoughtsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteInternalIdArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteProgrammingLanguageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteScreenshotsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** a content type that talks about code changes for this site. Each entry will be assocaited with an artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockCodeBuildNote) */
export type BlockCodeBuildNoteTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockCodeBuildNoteCodeSnippet = {
  __typename?: "BlockCodeBuildNoteCodeSnippet";
  json: Scalars["JSON"]["output"];
  links: BlockCodeBuildNoteCodeSnippetLinks;
};

export type BlockCodeBuildNoteCodeSnippetAssets = {
  __typename?: "BlockCodeBuildNoteCodeSnippetAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlockCodeBuildNoteCodeSnippetEntries = {
  __typename?: "BlockCodeBuildNoteCodeSnippetEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlockCodeBuildNoteCodeSnippetLinks = {
  __typename?: "BlockCodeBuildNoteCodeSnippetLinks";
  assets: BlockCodeBuildNoteCodeSnippetAssets;
  entries: BlockCodeBuildNoteCodeSnippetEntries;
  resources: BlockCodeBuildNoteCodeSnippetResources;
};

export type BlockCodeBuildNoteCodeSnippetResources = {
  __typename?: "BlockCodeBuildNoteCodeSnippetResources";
  block: Array<BlockCodeBuildNoteCodeSnippetResourcesBlock>;
  hyperlink: Array<BlockCodeBuildNoteCodeSnippetResourcesHyperlink>;
  inline: Array<BlockCodeBuildNoteCodeSnippetResourcesInline>;
};

export type BlockCodeBuildNoteCodeSnippetResourcesBlock = ResourceLink & {
  __typename?: "BlockCodeBuildNoteCodeSnippetResourcesBlock";
  sys: ResourceSys;
};

export type BlockCodeBuildNoteCodeSnippetResourcesHyperlink = ResourceLink & {
  __typename?: "BlockCodeBuildNoteCodeSnippetResourcesHyperlink";
  sys: ResourceSys;
};

export type BlockCodeBuildNoteCodeSnippetResourcesInline = ResourceLink & {
  __typename?: "BlockCodeBuildNoteCodeSnippetResourcesInline";
  sys: ResourceSys;
};

export type BlockCodeBuildNoteCollection = {
  __typename?: "BlockCodeBuildNoteCollection";
  items: Array<Maybe<BlockCodeBuildNote>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlockCodeBuildNoteDevThoughts = {
  __typename?: "BlockCodeBuildNoteDevThoughts";
  json: Scalars["JSON"]["output"];
  links: BlockCodeBuildNoteDevThoughtsLinks;
};

export type BlockCodeBuildNoteDevThoughtsAssets = {
  __typename?: "BlockCodeBuildNoteDevThoughtsAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlockCodeBuildNoteDevThoughtsEntries = {
  __typename?: "BlockCodeBuildNoteDevThoughtsEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlockCodeBuildNoteDevThoughtsLinks = {
  __typename?: "BlockCodeBuildNoteDevThoughtsLinks";
  assets: BlockCodeBuildNoteDevThoughtsAssets;
  entries: BlockCodeBuildNoteDevThoughtsEntries;
  resources: BlockCodeBuildNoteDevThoughtsResources;
};

export type BlockCodeBuildNoteDevThoughtsResources = {
  __typename?: "BlockCodeBuildNoteDevThoughtsResources";
  block: Array<BlockCodeBuildNoteDevThoughtsResourcesBlock>;
  hyperlink: Array<BlockCodeBuildNoteDevThoughtsResourcesHyperlink>;
  inline: Array<BlockCodeBuildNoteDevThoughtsResourcesInline>;
};

export type BlockCodeBuildNoteDevThoughtsResourcesBlock = ResourceLink & {
  __typename?: "BlockCodeBuildNoteDevThoughtsResourcesBlock";
  sys: ResourceSys;
};

export type BlockCodeBuildNoteDevThoughtsResourcesHyperlink = ResourceLink & {
  __typename?: "BlockCodeBuildNoteDevThoughtsResourcesHyperlink";
  sys: ResourceSys;
};

export type BlockCodeBuildNoteDevThoughtsResourcesInline = ResourceLink & {
  __typename?: "BlockCodeBuildNoteDevThoughtsResourcesInline";
  sys: ResourceSys;
};

export type BlockCodeBuildNoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockCodeBuildNoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockCodeBuildNoteFilter>>>;
  backgroundColor?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  backgroundColor_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  backgroundColor_not?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  codeSnippet_contains?: InputMaybe<Scalars["String"]["input"]>;
  codeSnippet_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  codeSnippet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  concept?: InputMaybe<Scalars["String"]["input"]>;
  concept_contains?: InputMaybe<Scalars["String"]["input"]>;
  concept_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  concept_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  concept_not?: InputMaybe<Scalars["String"]["input"]>;
  concept_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  concept_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  devThoughts_contains?: InputMaybe<Scalars["String"]["input"]>;
  devThoughts_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  devThoughts_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId?: InputMaybe<Scalars["String"]["input"]>;
  internalId_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalId_not?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  programmingLanguage?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_contains?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  programmingLanguage_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  programmingLanguage_not?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  screenshotsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlockCodeBuildNoteLinkingCollections = {
  __typename?: "BlockCodeBuildNoteLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageMusicCollection?: Maybe<PageMusicCollection>;
};

export type BlockCodeBuildNoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockCodeBuildNoteLinkingCollectionsPageMusicCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<BlockCodeBuildNoteLinkingCollectionsPageMusicCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum BlockCodeBuildNoteLinkingCollectionsPageMusicCollectionOrder {
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  FontTypeAsc = "fontType_ASC",
  FontTypeDesc = "fontType_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  MoodAsc = "mood_ASC",
  MoodDesc = "mood_DESC",
  RecentlyLikedIdAsc = "recentlyLikedId_ASC",
  RecentlyLikedIdDesc = "recentlyLikedId_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum BlockCodeBuildNoteOrder {
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  ConceptAsc = "concept_ASC",
  ConceptDesc = "concept_DESC",
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  ProgrammingLanguageAsc = "programmingLanguage_ASC",
  ProgrammingLanguageDesc = "programmingLanguage_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMedia = Entry &
  _Node & {
    __typename?: "BlockMedia";
    _id: Scalars["ID"]["output"];
    altText?: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulMetadata;
    description?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<BlockMediaLinkingCollections>;
    media?: Maybe<Asset>;
    post?: Maybe<ItemPost>;
    sys: Sys;
    tag?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaAltTextArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaMediaArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaPostArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemPostFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaTagArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockMedia) */
export type BlockMediaTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockMediaCollection = {
  __typename?: "BlockMediaCollection";
  items: Array<Maybe<BlockMedia>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlockMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockMediaFilter>>>;
  altText?: InputMaybe<Scalars["String"]["input"]>;
  altText_contains?: InputMaybe<Scalars["String"]["input"]>;
  altText_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  altText_not?: InputMaybe<Scalars["String"]["input"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  media_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  post?: InputMaybe<CfItemPostNestedFilter>;
  post_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  tag_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlockMediaLinkingCollections = {
  __typename?: "BlockMediaLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  itemAiArtPostCollection?: Maybe<ItemAiArtPostCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type BlockMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockMediaLinkingCollectionsItemAiArtPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<BlockMediaLinkingCollectionsItemAiArtPostCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockMediaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<BlockMediaLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum BlockMediaLinkingCollectionsItemAiArtPostCollectionOrder {
  PromptAsc = "prompt_ASC",
  PromptDesc = "prompt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TrackAsc = "track_ASC",
  TrackDesc = "track_DESC",
}

export enum BlockMediaLinkingCollectionsPageCollectionOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum BlockMediaOrder {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** profile data from spotify api, will have image, about, followers, [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockProfileData) */
export type BlockProfileData = Entry &
  _Node & {
    __typename?: "BlockProfileData";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    internalName?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<BlockProfileDataLinkingCollections>;
    profileData?: Maybe<Scalars["JSON"]["output"]>;
    sys: Sys;
  };

/** profile data from spotify api, will have image, about, followers, [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockProfileData) */
export type BlockProfileDataInternalNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** profile data from spotify api, will have image, about, followers, [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockProfileData) */
export type BlockProfileDataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** profile data from spotify api, will have image, about, followers, [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockProfileData) */
export type BlockProfileDataProfileDataArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockProfileDataCollection = {
  __typename?: "BlockProfileDataCollection";
  items: Array<Maybe<BlockProfileData>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlockProfileDataFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockProfileDataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockProfileDataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars["String"]["input"]>;
  internalName_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalName_not?: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  profileData_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
};

export type BlockProfileDataLinkingCollections = {
  __typename?: "BlockProfileDataLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type BlockProfileDataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockProfileDataLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<BlockProfileDataLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum BlockProfileDataLinkingCollectionsPageCollectionOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum BlockProfileDataOrder {
  InternalNameAsc = "internalName_ASC",
  InternalNameDesc = "internalName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** api JSON of my top artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockTopArtists) */
export type BlockTopArtists = Entry &
  _Node & {
    __typename?: "BlockTopArtists";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    itemType?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<BlockTopArtistsLinkingCollections>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
    topArtists?: Maybe<Scalars["JSON"]["output"]>;
  };

/** api JSON of my top artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockTopArtists) */
export type BlockTopArtistsItemTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** api JSON of my top artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockTopArtists) */
export type BlockTopArtistsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** api JSON of my top artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockTopArtists) */
export type BlockTopArtistsTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** api JSON of my top artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/blockTopArtists) */
export type BlockTopArtistsTopArtistsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockTopArtistsCollection = {
  __typename?: "BlockTopArtistsCollection";
  items: Array<Maybe<BlockTopArtists>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlockTopArtistsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockTopArtistsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockTopArtistsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  itemType?: InputMaybe<Scalars["String"]["input"]>;
  itemType_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  itemType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  itemType_not?: InputMaybe<Scalars["String"]["input"]>;
  itemType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  topArtists_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockTopArtistsLinkingCollections = {
  __typename?: "BlockTopArtistsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type BlockTopArtistsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type BlockTopArtistsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<BlockTopArtistsLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum BlockTopArtistsLinkingCollectionsPageCollectionOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum BlockTopArtistsOrder {
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPost = Entry &
  _Node & {
    __typename?: "ItemAiArtPost";
    _id: Scalars["ID"]["output"];
    aiMediaCollection?: Maybe<ItemAiArtPostAiMediaCollection>;
    contentfulMetadata: ContentfulMetadata;
    linkedFrom?: Maybe<ItemAiArtPostLinkingCollections>;
    prompt?: Maybe<Scalars["String"]["output"]>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
    track?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPostAiMediaCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemAiArtPostAiMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlockMediaFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPostPromptArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemAiArtPost) */
export type ItemAiArtPostTrackArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemAiArtPostAiMediaCollection = {
  __typename?: "ItemAiArtPostAiMediaCollection";
  items: Array<Maybe<BlockMedia>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum ItemAiArtPostAiMediaCollectionOrder {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ItemAiArtPostCollection = {
  __typename?: "ItemAiArtPostCollection";
  items: Array<Maybe<ItemAiArtPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemAiArtPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemAiArtPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemAiArtPostFilter>>>;
  aiMedia?: InputMaybe<CfBlockMediaNestedFilter>;
  aiMediaCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  prompt?: InputMaybe<Scalars["String"]["input"]>;
  prompt_contains?: InputMaybe<Scalars["String"]["input"]>;
  prompt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  prompt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  prompt_not?: InputMaybe<Scalars["String"]["input"]>;
  prompt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  prompt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  track?: InputMaybe<Scalars["String"]["input"]>;
  track_contains?: InputMaybe<Scalars["String"]["input"]>;
  track_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  track_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  track_not?: InputMaybe<Scalars["String"]["input"]>;
  track_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  track_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ItemAiArtPostLinkingCollections = {
  __typename?: "ItemAiArtPostLinkingCollections";
  aiArtCollectionCollection?: Maybe<AiArtCollectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ItemAiArtPostLinkingCollectionsAiArtCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<ItemAiArtPostLinkingCollectionsAiArtCollectionCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemAiArtPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemAiArtPostLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<ItemAiArtPostLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemAiArtPostLinkingCollectionsAiArtCollectionCollectionOrder {
  CollectionThemeAsc = "collectionTheme_ASC",
  CollectionThemeDesc = "collectionTheme_DESC",
  DateCreatedAsc = "dateCreated_ASC",
  DateCreatedDesc = "dateCreated_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ItemAiArtPostLinkingCollectionsPageCollectionOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ItemAiArtPostOrder {
  PromptAsc = "prompt_ASC",
  PromptDesc = "prompt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  TrackAsc = "track_ASC",
  TrackDesc = "track_DESC",
}

/** genre of a track [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenre) */
export type ItemGenre = Entry &
  _Node & {
    __typename?: "ItemGenre";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    genre?: Maybe<ItemGenres>;
    linkedFrom?: Maybe<ItemGenreLinkingCollections>;
    sys: Sys;
    tracks?: Maybe<Scalars["JSON"]["output"]>;
  };

/** genre of a track [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenre) */
export type ItemGenreGenreArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemGenresFilter>;
};

/** genre of a track [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenre) */
export type ItemGenreLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** genre of a track [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenre) */
export type ItemGenreTracksArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemGenreCollection = {
  __typename?: "ItemGenreCollection";
  items: Array<Maybe<ItemGenre>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemGenreFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemGenreFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemGenreFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  genre?: InputMaybe<CfItemGenresNestedFilter>;
  genre_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  tracks_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemGenreLinkingCollections = {
  __typename?: "ItemGenreLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ItemGenreLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemGenreOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** genres coming from database from spotify api app [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenres) */
export type ItemGenres = Entry &
  _Node & {
    __typename?: "ItemGenres";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    genres?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    linkedFrom?: Maybe<ItemGenresLinkingCollections>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** genres coming from database from spotify api app [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenres) */
export type ItemGenresGenresArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** genres coming from database from spotify api app [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenres) */
export type ItemGenresLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** genres coming from database from spotify api app [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemGenres) */
export type ItemGenresTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemGenresCollection = {
  __typename?: "ItemGenresCollection";
  items: Array<Maybe<ItemGenres>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemGenresFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemGenresFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemGenresFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  genres_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genres_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genres_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genres_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ItemGenresLinkingCollections = {
  __typename?: "ItemGenresLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  itemGenreCollection?: Maybe<ItemGenreCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ItemGenresLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemGenresLinkingCollectionsItemGenreCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<ItemGenresLinkingCollectionsItemGenreCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemGenresLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<ItemGenresLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemGenresLinkingCollectionsItemGenreCollectionOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ItemGenresLinkingCollectionsPageCollectionOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ItemGenresOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPost = Entry &
  _Node & {
    __typename?: "ItemPost";
    _id: Scalars["ID"]["output"];
    content?: Maybe<ItemPostContent>;
    contentfulMetadata: ContentfulMetadata;
    linkedFrom?: Maybe<ItemPostLinkingCollections>;
    previewText?: Maybe<Scalars["String"]["output"]>;
    publishedDate?: Maybe<Scalars["DateTime"]["output"]>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    testJosn?: Maybe<Scalars["JSON"]["output"]>;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostContentArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostPreviewTextArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostTestJosnArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemPost) */
export type ItemPostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemPostCollection = {
  __typename?: "ItemPostCollection";
  items: Array<Maybe<ItemPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemPostContent = {
  __typename?: "ItemPostContent";
  json: Scalars["JSON"]["output"];
  links: ItemPostContentLinks;
};

export type ItemPostContentAssets = {
  __typename?: "ItemPostContentAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ItemPostContentEntries = {
  __typename?: "ItemPostContentEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ItemPostContentLinks = {
  __typename?: "ItemPostContentLinks";
  assets: ItemPostContentAssets;
  entries: ItemPostContentEntries;
  resources: ItemPostContentResources;
};

export type ItemPostContentResources = {
  __typename?: "ItemPostContentResources";
  block: Array<ItemPostContentResourcesBlock>;
  hyperlink: Array<ItemPostContentResourcesHyperlink>;
  inline: Array<ItemPostContentResourcesInline>;
};

export type ItemPostContentResourcesBlock = ResourceLink & {
  __typename?: "ItemPostContentResourcesBlock";
  sys: ResourceSys;
};

export type ItemPostContentResourcesHyperlink = ResourceLink & {
  __typename?: "ItemPostContentResourcesHyperlink";
  sys: ResourceSys;
};

export type ItemPostContentResourcesInline = ResourceLink & {
  __typename?: "ItemPostContentResourcesInline";
  sys: ResourceSys;
};

export type ItemPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemPostFilter>>>;
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  previewText?: InputMaybe<Scalars["String"]["input"]>;
  previewText_contains?: InputMaybe<Scalars["String"]["input"]>;
  previewText_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  previewText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  previewText_not?: InputMaybe<Scalars["String"]["input"]>;
  previewText_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  previewText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  publishedDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedDate_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedDate_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  testJosn_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ItemPostLinkingCollections = {
  __typename?: "ItemPostLinkingCollections";
  blockMediaCollection?: Maybe<BlockMediaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  itemSpotifyTopItemCollection?: Maybe<ItemSpotifyTopItemCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type ItemPostLinkingCollectionsBlockMediaCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<ItemPostLinkingCollectionsBlockMediaCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemPostLinkingCollectionsItemSpotifyTopItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<
      InputMaybe<ItemPostLinkingCollectionsItemSpotifyTopItemCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemPostLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<ItemPostLinkingCollectionsPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemPostLinkingCollectionsBlockMediaCollectionOrder {
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ItemPostLinkingCollectionsItemSpotifyTopItemCollectionOrder {
  ItemDataAsc = "itemData_ASC",
  ItemDataDesc = "itemData_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ItemPostLinkingCollectionsPageCollectionOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ItemPostOrder {
  PreviewTextAsc = "previewText_ASC",
  PreviewTextDesc = "previewText_DESC",
  PublishedDateAsc = "publishedDate_ASC",
  PublishedDateDesc = "publishedDate_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentelyLikedTracks) */
export type ItemRecentelyLikedTracks = Entry &
  _Node & {
    __typename?: "ItemRecentelyLikedTracks";
    _id: Scalars["ID"]["output"];
    backgroundColor?: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulMetadata;
    genre?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
    linkedFrom?: Maybe<ItemRecentelyLikedTracksLinkingCollections>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    tracks?: Maybe<Scalars["JSON"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentelyLikedTracks) */
export type ItemRecentelyLikedTracksBackgroundColorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentelyLikedTracks) */
export type ItemRecentelyLikedTracksGenreArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentelyLikedTracks) */
export type ItemRecentelyLikedTracksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentelyLikedTracks) */
export type ItemRecentelyLikedTracksSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentelyLikedTracks) */
export type ItemRecentelyLikedTracksTracksArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemRecentelyLikedTracksCollection = {
  __typename?: "ItemRecentelyLikedTracksCollection";
  items: Array<Maybe<ItemRecentelyLikedTracks>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemRecentelyLikedTracksFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemRecentelyLikedTracksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemRecentelyLikedTracksFilter>>>;
  backgroundColor?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  backgroundColor_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  backgroundColor_not?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  genre_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genre_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genre_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genre_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  tracks_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemRecentelyLikedTracksLinkingCollections = {
  __typename?: "ItemRecentelyLikedTracksLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ItemRecentelyLikedTracksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemRecentelyLikedTracksOrder {
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** Recently liked items (songs) from my database that is from my spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentlyLiked) */
export type ItemRecentlyLiked = Entry &
  _Node & {
    __typename?: "ItemRecentlyLiked";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    linkedFrom?: Maybe<ItemRecentlyLikedLinkingCollections>;
    sys: Sys;
    tracks?: Maybe<Scalars["JSON"]["output"]>;
  };

/** Recently liked items (songs) from my database that is from my spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentlyLiked) */
export type ItemRecentlyLikedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Recently liked items (songs) from my database that is from my spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemRecentlyLiked) */
export type ItemRecentlyLikedTracksArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemRecentlyLikedCollection = {
  __typename?: "ItemRecentlyLikedCollection";
  items: Array<Maybe<ItemRecentlyLiked>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemRecentlyLikedFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemRecentlyLikedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemRecentlyLikedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  tracks_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemRecentlyLikedLinkingCollections = {
  __typename?: "ItemRecentlyLikedLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ItemRecentlyLikedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemRecentlyLikedOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** content type for my Spotify top tracks or artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemSpotifyTopItem) */
export type ItemSpotifyTopItem = Entry &
  _Node & {
    __typename?: "ItemSpotifyTopItem";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    itemData?: Maybe<Scalars["String"]["output"]>;
    itemType?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<ItemSpotifyTopItemLinkingCollections>;
    memory?: Maybe<ItemPost>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** content type for my Spotify top tracks or artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemSpotifyTopItem) */
export type ItemSpotifyTopItemItemDataArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** content type for my Spotify top tracks or artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemSpotifyTopItem) */
export type ItemSpotifyTopItemItemTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** content type for my Spotify top tracks or artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemSpotifyTopItem) */
export type ItemSpotifyTopItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** content type for my Spotify top tracks or artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemSpotifyTopItem) */
export type ItemSpotifyTopItemMemoryArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemPostFilter>;
};

/** content type for my Spotify top tracks or artist [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/itemSpotifyTopItem) */
export type ItemSpotifyTopItemTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ItemSpotifyTopItemCollection = {
  __typename?: "ItemSpotifyTopItemCollection";
  items: Array<Maybe<ItemSpotifyTopItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ItemSpotifyTopItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<ItemSpotifyTopItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ItemSpotifyTopItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  itemData?: InputMaybe<Scalars["String"]["input"]>;
  itemData_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemData_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  itemData_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  itemData_not?: InputMaybe<Scalars["String"]["input"]>;
  itemData_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemData_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  itemType?: InputMaybe<Scalars["String"]["input"]>;
  itemType_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  itemType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  itemType_not?: InputMaybe<Scalars["String"]["input"]>;
  itemType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  memory?: InputMaybe<CfItemPostNestedFilter>;
  memory_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ItemSpotifyTopItemLinkingCollections = {
  __typename?: "ItemSpotifyTopItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type ItemSpotifyTopItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ItemSpotifyTopItemOrder {
  ItemDataAsc = "itemData_ASC",
  ItemDataDesc = "itemData_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationItem) */
export type NavigationItem = Entry &
  _Node & {
    __typename?: "NavigationItem";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    externalUrl?: Maybe<Scalars["String"]["output"]>;
    icon?: Maybe<Scalars["String"]["output"]>;
    label?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<NavigationItemLinkingCollections>;
    sys: Sys;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationItem) */
export type NavigationItemExternalUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationItem) */
export type NavigationItemIconArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationItem) */
export type NavigationItemLabelArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationItem) */
export type NavigationItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type NavigationItemCollection = {
  __typename?: "NavigationItemCollection";
  items: Array<Maybe<NavigationItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type NavigationItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  externalUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  externalUrl_not?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  externalUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  icon_contains?: InputMaybe<Scalars["String"]["input"]>;
  icon_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  icon_not?: InputMaybe<Scalars["String"]["input"]>;
  icon_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  label_contains?: InputMaybe<Scalars["String"]["input"]>;
  label_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  label_not?: InputMaybe<Scalars["String"]["input"]>;
  label_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationItemLinkingCollections = {
  __typename?: "NavigationItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type NavigationItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum NavigationItemOrder {
  ExternalUrlAsc = "externalUrl_ASC",
  ExternalUrlDesc = "externalUrl_DESC",
  IconAsc = "icon_ASC",
  IconDesc = "icon_DESC",
  LabelAsc = "label_ASC",
  LabelDesc = "label_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationMenu) */
export type NavigationMenu = Entry &
  _Node & {
    __typename?: "NavigationMenu";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/navigationMenu) */
export type NavigationMenuTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NavigationMenuCollection = {
  __typename?: "NavigationMenuCollection";
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: "NavigationMenuLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum NavigationMenuOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type Page = Entry &
  _Node & {
    __typename?: "Page";
    _id: Scalars["ID"]["output"];
    category?: Maybe<Entry>;
    contentfulMetadata: ContentfulMetadata;
    featuredImage?: Maybe<Asset>;
    internalId?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<PageLinkingCollections>;
    pageType?: Maybe<Scalars["String"]["output"]>;
    sectionsCollection?: Maybe<PageSectionsCollection>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageInternalIdArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PagePageTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PageSectionsFilter>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A page on the website [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPost = Entry &
  _Node & {
    __typename?: "PageBlogPost";
    _id: Scalars["ID"]["output"];
    author?: Maybe<Entry>;
    category?: Maybe<Entry>;
    content?: Maybe<PageBlogPostContent>;
    contentfulMetadata: ContentfulMetadata;
    featuredImage?: Maybe<Asset>;
    internalId?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<PageBlogPostLinkingCollections>;
    publishedDate?: Maybe<Scalars["DateTime"]["output"]>;
    seo?: Maybe<Entry>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostCategoryArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostContentArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostInternalIdArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostSeoArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageBlogPost) */
export type PageBlogPostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PageBlogPostCollection = {
  __typename?: "PageBlogPostCollection";
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PageBlogPostContent = {
  __typename?: "PageBlogPostContent";
  json: Scalars["JSON"]["output"];
  links: PageBlogPostContentLinks;
};

export type PageBlogPostContentAssets = {
  __typename?: "PageBlogPostContentAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBlogPostContentEntries = {
  __typename?: "PageBlogPostContentEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBlogPostContentLinks = {
  __typename?: "PageBlogPostContentLinks";
  assets: PageBlogPostContentAssets;
  entries: PageBlogPostContentEntries;
  resources: PageBlogPostContentResources;
};

export type PageBlogPostContentResources = {
  __typename?: "PageBlogPostContentResources";
  block: Array<PageBlogPostContentResourcesBlock>;
  hyperlink: Array<PageBlogPostContentResourcesHyperlink>;
  inline: Array<PageBlogPostContentResourcesInline>;
};

export type PageBlogPostContentResourcesBlock = ResourceLink & {
  __typename?: "PageBlogPostContentResourcesBlock";
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: "PageBlogPostContentResourcesHyperlink";
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesInline = ResourceLink & {
  __typename?: "PageBlogPostContentResourcesInline";
  sys: ResourceSys;
};

export type PageBlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  author_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  category_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId?: InputMaybe<Scalars["String"]["input"]>;
  internalId_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalId_not?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedDate_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedDate_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  seo_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageBlogPostLinkingCollections = {
  __typename?: "PageBlogPostLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum PageBlogPostOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PublishedDateAsc = "publishedDate_ASC",
  PublishedDateDesc = "publishedDate_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageCollection = {
  __typename?: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  category_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId?: InputMaybe<Scalars["String"]["input"]>;
  internalId_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalId_not?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageType?: InputMaybe<Scalars["String"]["input"]>;
  pageType_contains?: InputMaybe<Scalars["String"]["input"]>;
  pageType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  pageType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  pageType_not?: InputMaybe<Scalars["String"]["input"]>;
  pageType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pageType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageLinkingCollections = {
  __typename?: "PageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusic = Entry &
  _Node & {
    __typename?: "PageMusic";
    _id: Scalars["ID"]["output"];
    backgroundColor?: Maybe<Scalars["String"]["output"]>;
    contentfulMetadata: ContentfulMetadata;
    developerLogsCollection?: Maybe<PageMusicDeveloperLogsCollection>;
    firstImpressionReview?: Maybe<PageMusicFirstImpressionReview>;
    fontType?: Maybe<Scalars["String"]["output"]>;
    itemJsonData?: Maybe<Scalars["JSON"]["output"]>;
    itemType?: Maybe<Scalars["String"]["output"]>;
    linkedFrom?: Maybe<PageMusicLinkingCollections>;
    memoryPic?: Maybe<Asset>;
    mood?: Maybe<Scalars["String"]["output"]>;
    outfitVibe?: Maybe<Asset>;
    recentlyLikedId?: Maybe<Scalars["String"]["output"]>;
    similarArtistsCollection?: Maybe<PageMusicSimilarArtistsCollection>;
    slug?: Maybe<Scalars["String"]["output"]>;
    sys: Sys;
    title?: Maybe<Scalars["String"]["output"]>;
  };

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicBackgroundColorArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicDeveloperLogsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageMusicDeveloperLogsCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlockCodeBuildNoteFilter>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicFirstImpressionReviewArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicFontTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicItemJsonDataArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicItemTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicMemoryPicArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicMoodArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicOutfitVibeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicRecentlyLikedIdArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicSimilarArtistsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageMusicSimilarArtistsCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SimilarArtistsFilter>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** music page that is heavy reliant on spotify api and contentful api [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/pageMusic) */
export type PageMusicTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PageMusicCollection = {
  __typename?: "PageMusicCollection";
  items: Array<Maybe<PageMusic>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PageMusicDeveloperLogsCollection = {
  __typename?: "PageMusicDeveloperLogsCollection";
  items: Array<Maybe<BlockCodeBuildNote>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum PageMusicDeveloperLogsCollectionOrder {
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  ConceptAsc = "concept_ASC",
  ConceptDesc = "concept_DESC",
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  ProgrammingLanguageAsc = "programmingLanguage_ASC",
  ProgrammingLanguageDesc = "programmingLanguage_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageMusicFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageMusicFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageMusicFilter>>>;
  backgroundColor?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  backgroundColor_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  backgroundColor_not?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  developerLogs?: InputMaybe<CfBlockCodeBuildNoteNestedFilter>;
  developerLogsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstImpressionReview_contains?: InputMaybe<Scalars["String"]["input"]>;
  firstImpressionReview_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstImpressionReview_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fontType?: InputMaybe<Scalars["String"]["input"]>;
  fontType_contains?: InputMaybe<Scalars["String"]["input"]>;
  fontType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fontType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fontType_not?: InputMaybe<Scalars["String"]["input"]>;
  fontType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fontType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  itemJsonData_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  itemType?: InputMaybe<Scalars["String"]["input"]>;
  itemType_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  itemType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  itemType_not?: InputMaybe<Scalars["String"]["input"]>;
  itemType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  itemType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  memoryPic_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  mood?: InputMaybe<Scalars["String"]["input"]>;
  mood_contains?: InputMaybe<Scalars["String"]["input"]>;
  mood_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  mood_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  mood_not?: InputMaybe<Scalars["String"]["input"]>;
  mood_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  mood_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  outfitVibe_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  recentlyLikedId?: InputMaybe<Scalars["String"]["input"]>;
  recentlyLikedId_contains?: InputMaybe<Scalars["String"]["input"]>;
  recentlyLikedId_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  recentlyLikedId_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  recentlyLikedId_not?: InputMaybe<Scalars["String"]["input"]>;
  recentlyLikedId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  recentlyLikedId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  similarArtists?: InputMaybe<CfSimilarArtistsNestedFilter>;
  similarArtistsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageMusicFirstImpressionReview = {
  __typename?: "PageMusicFirstImpressionReview";
  json: Scalars["JSON"]["output"];
  links: PageMusicFirstImpressionReviewLinks;
};

export type PageMusicFirstImpressionReviewAssets = {
  __typename?: "PageMusicFirstImpressionReviewAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageMusicFirstImpressionReviewEntries = {
  __typename?: "PageMusicFirstImpressionReviewEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageMusicFirstImpressionReviewLinks = {
  __typename?: "PageMusicFirstImpressionReviewLinks";
  assets: PageMusicFirstImpressionReviewAssets;
  entries: PageMusicFirstImpressionReviewEntries;
  resources: PageMusicFirstImpressionReviewResources;
};

export type PageMusicFirstImpressionReviewResources = {
  __typename?: "PageMusicFirstImpressionReviewResources";
  block: Array<PageMusicFirstImpressionReviewResourcesBlock>;
  hyperlink: Array<PageMusicFirstImpressionReviewResourcesHyperlink>;
  inline: Array<PageMusicFirstImpressionReviewResourcesInline>;
};

export type PageMusicFirstImpressionReviewResourcesBlock = ResourceLink & {
  __typename?: "PageMusicFirstImpressionReviewResourcesBlock";
  sys: ResourceSys;
};

export type PageMusicFirstImpressionReviewResourcesHyperlink = ResourceLink & {
  __typename?: "PageMusicFirstImpressionReviewResourcesHyperlink";
  sys: ResourceSys;
};

export type PageMusicFirstImpressionReviewResourcesInline = ResourceLink & {
  __typename?: "PageMusicFirstImpressionReviewResourcesInline";
  sys: ResourceSys;
};

export type PageMusicLinkingCollections = {
  __typename?: "PageMusicLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type PageMusicLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum PageMusicOrder {
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  FontTypeAsc = "fontType_ASC",
  FontTypeDesc = "fontType_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  MoodAsc = "mood_ASC",
  MoodDesc = "mood_DESC",
  RecentlyLikedIdAsc = "recentlyLikedId_ASC",
  RecentlyLikedIdDesc = "recentlyLikedId_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageMusicSimilarArtistsCollection = {
  __typename?: "PageMusicSimilarArtistsCollection";
  items: Array<Maybe<SimilarArtists>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum PageMusicSimilarArtistsCollectionOrder {
  GenreAsc = "genre_ASC",
  GenreDesc = "genre_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum PageOrder {
  InternalIdAsc = "internalId_ASC",
  InternalIdDesc = "internalId_DESC",
  PageTypeAsc = "pageType_ASC",
  PageTypeDesc = "pageType_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type PageSectionsCollection = {
  __typename?: "PageSectionsCollection";
  items: Array<Maybe<PageSectionsItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionsItem =
  | BlockMedia
  | BlockProfileData
  | BlockTopArtists
  | ItemAiArtPost
  | ItemGenres
  | ItemPost;

export type Query = {
  __typename?: "Query";
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  aiArtCollection?: Maybe<AiArtCollection>;
  aiArtCollectionCollection?: Maybe<AiArtCollectionCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  blockCodeBuildNote?: Maybe<BlockCodeBuildNote>;
  blockCodeBuildNoteCollection?: Maybe<BlockCodeBuildNoteCollection>;
  blockMedia?: Maybe<BlockMedia>;
  blockMediaCollection?: Maybe<BlockMediaCollection>;
  blockProfileData?: Maybe<BlockProfileData>;
  blockProfileDataCollection?: Maybe<BlockProfileDataCollection>;
  blockTopArtists?: Maybe<BlockTopArtists>;
  blockTopArtistsCollection?: Maybe<BlockTopArtistsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  itemAiArtPost?: Maybe<ItemAiArtPost>;
  itemAiArtPostCollection?: Maybe<ItemAiArtPostCollection>;
  itemGenre?: Maybe<ItemGenre>;
  itemGenreCollection?: Maybe<ItemGenreCollection>;
  itemGenres?: Maybe<ItemGenres>;
  itemGenresCollection?: Maybe<ItemGenresCollection>;
  itemPost?: Maybe<ItemPost>;
  itemPostCollection?: Maybe<ItemPostCollection>;
  itemRecentelyLikedTracks?: Maybe<ItemRecentelyLikedTracks>;
  itemRecentelyLikedTracksCollection?: Maybe<ItemRecentelyLikedTracksCollection>;
  itemRecentlyLiked?: Maybe<ItemRecentlyLiked>;
  itemRecentlyLikedCollection?: Maybe<ItemRecentlyLikedCollection>;
  itemSpotifyTopItem?: Maybe<ItemSpotifyTopItem>;
  itemSpotifyTopItemCollection?: Maybe<ItemSpotifyTopItemCollection>;
  navigationItem?: Maybe<NavigationItem>;
  navigationItemCollection?: Maybe<NavigationItemCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  page?: Maybe<Page>;
  pageBlogPost?: Maybe<PageBlogPost>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageMusic?: Maybe<PageMusic>;
  pageMusicCollection?: Maybe<PageMusicCollection>;
  similarArtists?: Maybe<SimilarArtists>;
  similarArtistsCollection?: Maybe<SimilarArtistsCollection>;
};

export type Query_NodeArgs = {
  id: Scalars["ID"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query_NodesArgs = {
  ids: Array<Scalars["ID"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAiArtCollectionArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAiArtCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AiArtCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AiArtCollectionFilter>;
};

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AuthorFilter>;
};

export type QueryBlockCodeBuildNoteArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlockCodeBuildNoteCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlockCodeBuildNoteOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlockCodeBuildNoteFilter>;
};

export type QueryBlockMediaArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlockMediaCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlockMediaOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlockMediaFilter>;
};

export type QueryBlockProfileDataArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlockProfileDataCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlockProfileDataOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlockProfileDataFilter>;
};

export type QueryBlockTopArtistsArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlockTopArtistsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<BlockTopArtistsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BlockTopArtistsFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryItemAiArtPostArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemAiArtPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemAiArtPostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemAiArtPostFilter>;
};

export type QueryItemGenreArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemGenreCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemGenreOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemGenreFilter>;
};

export type QueryItemGenresArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemGenresCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemGenresOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemGenresFilter>;
};

export type QueryItemPostArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemPostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemPostFilter>;
};

export type QueryItemRecentelyLikedTracksArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemRecentelyLikedTracksCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemRecentelyLikedTracksOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemRecentelyLikedTracksFilter>;
};

export type QueryItemRecentlyLikedArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemRecentlyLikedCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemRecentlyLikedOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemRecentlyLikedFilter>;
};

export type QueryItemSpotifyTopItemArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryItemSpotifyTopItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ItemSpotifyTopItemOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ItemSpotifyTopItemFilter>;
};

export type QueryNavigationItemArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryNavigationItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<NavigationItemOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NavigationItemFilter>;
};

export type QueryNavigationMenuArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NavigationMenuFilter>;
};

export type QueryPageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPageBlogPostArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PageBlogPostFilter>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PageFilter>;
};

export type QueryPageMusicArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPageMusicCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageMusicOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<PageMusicFilter>;
};

export type QuerySimilarArtistsArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QuerySimilarArtistsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<SimilarArtistsOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SimilarArtistsFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  linkType: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtists = Entry &
  _Node & {
    __typename?: "SimilarArtists";
    _id: Scalars["ID"]["output"];
    contentfulMetadata: ContentfulMetadata;
    description?: Maybe<SimilarArtistsDescription>;
    genre?: Maybe<Scalars["String"]["output"]>;
    image?: Maybe<Asset>;
    linkedFrom?: Maybe<SimilarArtistsLinkingCollections>;
    name?: Maybe<Scalars["String"]["output"]>;
    similarArtists?: Maybe<Scalars["JSON"]["output"]>;
    sys: Sys;
  };

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtistsDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtistsGenreArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtistsImageArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtistsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtistsNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** personally curated list of Similar Artists using the spotify API [See type definition](https://app.contentful.com/spaces/k64k3kt74fyv/content_types/similarArtists) */
export type SimilarArtistsSimilarArtistsArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SimilarArtistsCollection = {
  __typename?: "SimilarArtistsCollection";
  items: Array<Maybe<SimilarArtists>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type SimilarArtistsDescription = {
  __typename?: "SimilarArtistsDescription";
  json: Scalars["JSON"]["output"];
  links: SimilarArtistsDescriptionLinks;
};

export type SimilarArtistsDescriptionAssets = {
  __typename?: "SimilarArtistsDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SimilarArtistsDescriptionEntries = {
  __typename?: "SimilarArtistsDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SimilarArtistsDescriptionLinks = {
  __typename?: "SimilarArtistsDescriptionLinks";
  assets: SimilarArtistsDescriptionAssets;
  entries: SimilarArtistsDescriptionEntries;
  resources: SimilarArtistsDescriptionResources;
};

export type SimilarArtistsDescriptionResources = {
  __typename?: "SimilarArtistsDescriptionResources";
  block: Array<SimilarArtistsDescriptionResourcesBlock>;
  hyperlink: Array<SimilarArtistsDescriptionResourcesHyperlink>;
  inline: Array<SimilarArtistsDescriptionResourcesInline>;
};

export type SimilarArtistsDescriptionResourcesBlock = ResourceLink & {
  __typename?: "SimilarArtistsDescriptionResourcesBlock";
  sys: ResourceSys;
};

export type SimilarArtistsDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: "SimilarArtistsDescriptionResourcesHyperlink";
  sys: ResourceSys;
};

export type SimilarArtistsDescriptionResourcesInline = ResourceLink & {
  __typename?: "SimilarArtistsDescriptionResourcesInline";
  sys: ResourceSys;
};

export type SimilarArtistsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SimilarArtistsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SimilarArtistsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  genre?: InputMaybe<Scalars["String"]["input"]>;
  genre_contains?: InputMaybe<Scalars["String"]["input"]>;
  genre_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  genre_not?: InputMaybe<Scalars["String"]["input"]>;
  genre_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  similarArtists_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
};

export type SimilarArtistsLinkingCollections = {
  __typename?: "SimilarArtistsLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageMusicCollection?: Maybe<PageMusicCollection>;
};

export type SimilarArtistsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SimilarArtistsLinkingCollectionsPageMusicCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<SimilarArtistsLinkingCollectionsPageMusicCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  useFallbackLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum SimilarArtistsLinkingCollectionsPageMusicCollectionOrder {
  BackgroundColorAsc = "backgroundColor_ASC",
  BackgroundColorDesc = "backgroundColor_DESC",
  FontTypeAsc = "fontType_ASC",
  FontTypeDesc = "fontType_DESC",
  ItemTypeAsc = "itemType_ASC",
  ItemTypeDesc = "itemType_DESC",
  MoodAsc = "mood_ASC",
  MoodDesc = "mood_DESC",
  RecentlyLikedIdAsc = "recentlyLikedId_ASC",
  RecentlyLikedIdDesc = "recentlyLikedId_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum SimilarArtistsOrder {
  GenreAsc = "genre_ASC",
  GenreDesc = "genre_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  /** The locale that was requested. */
  locale?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion?: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: "TaxonomyConcept";
  id?: Maybe<Scalars["String"]["output"]>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars["String"]["input"]>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type _Node = {
  _id: Scalars["ID"]["output"];
};

export type CfAiArtCollectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAiArtCollectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAiArtCollectionNestedFilter>>>;
  aiArtworksCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  collectionTheme?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_contains?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  collectionTheme_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  collectionTheme_not?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collectionTheme_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  curatorNotes_contains?: InputMaybe<Scalars["String"]["input"]>;
  curatorNotes_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  curatorNotes_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  dateCreated_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  dateCreated_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  dateCreated_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  featuredArtwork_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  relatedCollectionsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tags_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tags_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfBlockCodeBuildNoteNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBlockCodeBuildNoteNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBlockCodeBuildNoteNestedFilter>>>;
  backgroundColor?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  backgroundColor_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  backgroundColor_not?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  backgroundColor_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  codeSnippet_contains?: InputMaybe<Scalars["String"]["input"]>;
  codeSnippet_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  codeSnippet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  concept?: InputMaybe<Scalars["String"]["input"]>;
  concept_contains?: InputMaybe<Scalars["String"]["input"]>;
  concept_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  concept_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  concept_not?: InputMaybe<Scalars["String"]["input"]>;
  concept_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  concept_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  devThoughts_contains?: InputMaybe<Scalars["String"]["input"]>;
  devThoughts_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  devThoughts_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId?: InputMaybe<Scalars["String"]["input"]>;
  internalId_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  internalId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  internalId_not?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  internalId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  programmingLanguage?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_contains?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  programmingLanguage_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  programmingLanguage_not?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  programmingLanguage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  screenshotsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfBlockMediaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBlockMediaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBlockMediaNestedFilter>>>;
  altText?: InputMaybe<Scalars["String"]["input"]>;
  altText_contains?: InputMaybe<Scalars["String"]["input"]>;
  altText_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  altText_not?: InputMaybe<Scalars["String"]["input"]>;
  altText_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  media_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  post_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  tag_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfItemAiArtPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfItemAiArtPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfItemAiArtPostNestedFilter>>>;
  aiMediaCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  prompt?: InputMaybe<Scalars["String"]["input"]>;
  prompt_contains?: InputMaybe<Scalars["String"]["input"]>;
  prompt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  prompt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  prompt_not?: InputMaybe<Scalars["String"]["input"]>;
  prompt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  prompt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  track?: InputMaybe<Scalars["String"]["input"]>;
  track_contains?: InputMaybe<Scalars["String"]["input"]>;
  track_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  track_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  track_not?: InputMaybe<Scalars["String"]["input"]>;
  track_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  track_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfItemGenresNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfItemGenresNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfItemGenresNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  genres_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genres_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genres_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  genres_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfItemPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfItemPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfItemPostNestedFilter>>>;
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  previewText?: InputMaybe<Scalars["String"]["input"]>;
  previewText_contains?: InputMaybe<Scalars["String"]["input"]>;
  previewText_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  previewText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  previewText_not?: InputMaybe<Scalars["String"]["input"]>;
  previewText_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  previewText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  publishedDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedDate_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedDate_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  testJosn_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfSimilarArtistsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSimilarArtistsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSimilarArtistsNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  genre?: InputMaybe<Scalars["String"]["input"]>;
  genre_contains?: InputMaybe<Scalars["String"]["input"]>;
  genre_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  genre_not?: InputMaybe<Scalars["String"]["input"]>;
  genre_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  image_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  similarArtists_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
};

export type CfsectionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};
