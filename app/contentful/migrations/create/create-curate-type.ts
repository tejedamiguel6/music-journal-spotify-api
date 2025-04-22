const { runMigration } = require("contentful-migration");

module.exports = function (migration) {
  const aiArtCollection = migration
    .createContentType("aiArtCollection")
    .name("AI Art Collection")
    .description(
      "A collection of AI-generated artwork with curation information"
    )
    .displayField("title");

  aiArtCollection
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
      {
        regexp: {
          pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
          flags: null,
        },
        message:
          "Slug must contain only lowercase letters, numbers, and hyphens with no spaces.",
      },
    ])
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("aiArtworks")
    .name("AI Artworks")
    .type("Array")
    .localized(false)
    .required(true)
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["itemAiArtPost"],
        },
      ],
      linkType: "Entry",
    })
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("featuredArtwork")
    .name("Featured Artwork")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["itemAiArtPost"],
      },
    ])
    .linkType("Entry")
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("curatorNotes")
    .name("Curator Notes")
    .type("RichText")
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],
        message: "Only valid content types are allowed",
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("tags")
    .name("Tags")
    .type("Array")
    .localized(false)
    .required(false)
    .items({
      type: "Symbol",
      validations: [],
    })
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("dateCreated")
    .name("Date Created")
    .type("Date")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("collectionTheme")
    .name("Collection Theme")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        in: [
          "Cyberpunk",
          "Space",
          "Nature",
          "Abstract",
          "Futuristic",
          "Fantasy",
          "Dystopian",
          "Utopian",
          "Other",
        ],
      },
    ])
    .disabled(false)
    .omitted(false);

  aiArtCollection
    .createField("relatedCollections")
    .name("Related Collections")
    .type("Array")
    .localized(false)
    .required(false)
    .items({
      type: "Link",
      validations: [
        {
          linkContentType: ["aiArtCollection"],
        },
      ],
      linkType: "Entry",
    })
    .disabled(false)
    .omitted(false);

  // Set the order of fields for the UI
  aiArtCollection.changeFieldControl("title", "builtin", "singleLine", {});
  aiArtCollection.changeFieldControl("slug", "builtin", "slugEditor", {});
  aiArtCollection.changeFieldControl(
    "description",
    "builtin",
    "multipleLine",
    {}
  );
  aiArtCollection.changeFieldControl(
    "aiArtworks",
    "builtin",
    "entryLinksEditor",
    {
      bulkEditing: false,
    }
  );
  aiArtCollection.changeFieldControl(
    "featuredArtwork",
    "builtin",
    "entryLinkEditor",
    {
      helpText: "Select one artwork to be featured in this collection",
    }
  );
  aiArtCollection.changeFieldControl(
    "curatorNotes",
    "builtin",
    "richTextEditor",
    {}
  );
  aiArtCollection.changeFieldControl("tags", "builtin", "tagEditor", {});
  aiArtCollection.changeFieldControl(
    "dateCreated",
    "builtin",
    "datePicker",
    {}
  );
  aiArtCollection.changeFieldControl(
    "collectionTheme",
    "builtin",
    "dropdown",
    {}
  );
  aiArtCollection.changeFieldControl(
    "relatedCollections",
    "builtin",
    "entryLinksEditor",
    {
      bulkEditing: false,
      helpText: "Link to other AI art collections that are related to this one",
    }
  );
};
