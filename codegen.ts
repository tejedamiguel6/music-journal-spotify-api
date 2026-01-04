import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,

  generates: {
    "types/contentful-graphql.ts": {
      plugins: ["typescript"],
      config: {
        scalars: {
          DateTime: "string",
          JSON: "any",
        },
      },
    },
  },
};

export default config;
