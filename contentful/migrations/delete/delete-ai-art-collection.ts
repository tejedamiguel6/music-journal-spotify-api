/* eslint-disable @typescript-eslint/no-explicit-any */

// NOTE: All entries of this content type must be unpublished and deleted
// in Contentful before running this migration.
module.exports = function (migration: any) {
  migration.deleteContentType("aiArtCollection");
};
