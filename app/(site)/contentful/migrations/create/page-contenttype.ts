const { runMigration } = require("contentful-migration");

module.exports = function (migration) {
  const page = migration.createContentType("page", {
    name: "[Page] Page",
    description: "A page on the website",
    displayField: "title",
  });

  page
    .createField("internalId")
    .name("Internal ID")
    .type("Symbol")
    .required(true)
    .localized(false);

  page
    .createField("title")
    .name("Title")
    .type("Symbol")
    .required(true)
    .localized(false);

  page
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .required(true)
    .localized(false)
    .validations([
      {
        unique: true,
      },
    ]);

  page.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "title",
  });

  page
    .createField("content")
    .name("Content")
    .type("RichText")
    .required(true)
    .localized(false);

  
  page
    .createField("publishedDate")
    .name("Published Date")
    .type("Date")
    .required(false)
    .localized(false);

    page
    .createField("author")  
    .name("Author")
    .type("Link")
    .linkType("Entry")
    .required(false)
    .localized(false)
    .validations([
      {
        linkContentType: ["author"],
      },
    ]);

    page
    .createField("category")
    .name("Category")
    .type("Link")
    .linkType("Entry")
    .required(false)
    .localized(false)
    .validations([
        {   
            linkContentType: ["category"],
        },
    ]);

    page
    .createField("featuredImage")
    .name("Featured Image")
    .type("Link")
    .linkType("Asset")
    .required(false)
    .localized(false);

};
