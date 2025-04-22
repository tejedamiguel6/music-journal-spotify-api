const { runMigration } = require("contentful-migration");


module.exports = function(migration) { 

    const author = migration.createContentType("author",{
        name: "[Item] Author",
        description: "content type for authors",
        displayField: "name"
    })

    author.createField("internalId")
        .name("Internal ID")
        .type("Symbol")
        .required(true)
        .localized(false);

    author.createField("name")
        .name("Name")
        .type("Symbol")
        .required(true);

    author.createField("bio")
        .name("Biography")
        .type("Text")
        .required(false);

    author.createField("profilePicture")
        .name("Profile Picture")
        .type("Link")
        .linkType("Asset")
        .required(false);

    author.createField("email") 
        .name("Email")
        .type("Symbol")
        .required(false);

    
}