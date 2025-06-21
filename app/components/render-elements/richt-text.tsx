import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

type Props = {
  document?: any;
  assetMap?: Record<string, any>;
};

export default function RichText({ documents, assetMap }: Props) {
  if (!documents) return null;
  // 💡 Logs incoming rich text
  console.log(documents, "these do");

  // 🔁 Recursively inject resolved assets into the rich text document
  function injectAssetsIntoRichText(
    document: any,
    assetMap?: Record<string, any>
  ): any {
    if (
      document?.nodeType === "embedded-asset-block" &&
      document.data?.target?.sys?.id
    ) {
      const assetId = document.data.target?.sys.id;
      const resolvedAsset = assetMap?.[assetId];

      // 🛑 Prevent undefined asset usage
      if (!resolvedAsset) {
        console.warn(`⚠️ Missing asset for ID: ${assetId}`);
        document.data.target = { sys: { id: assetId }, missing: true };
      } else {
        document.data.target = resolvedAsset;
      }
    }

    // 📚 Recursively walk child nodes
    if (Array.isArray(document?.content)) {
      document.content = document.content.map((child) =>
        injectAssetsIntoRichText(child, assetMap)
      );
    }

    return document;
  }

  // 💧 Hydrate rich text with asset references
  const hydratedDocument = injectAssetsIntoRichText(
    JSON.parse(JSON.stringify(documents)), // deep clone to avoid mutation bugs
    assetMap
  );

  // Render rules for Contentful rich text
  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <div>
          <p>{children}</p>
        </div>
      ),

      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = node.data?.target;

        // Skip rendering if asset was not found
        if (!asset || asset.missing) {
          return null;
        }

        if (asset.contentType === "audio/mpeg") {
          const url = asset.url?.startsWith("http")
            ? asset.url
            : `https:${asset.url}`;

          if (!url || url === "https:undefined") {
            return <div>⚠️ Broken audio asset</div>;
          }

          return (
            <audio controls>
              <source src={url} type="audio/mpeg" />
            </audio>
          );
        }

        // 🖼️ IMAGE fallback
        const url = asset.url?.startsWith("http")
          ? asset.url
          : `https:${asset.url}`;
        const alt = asset.description || asset.title || "Untitled image";

        // 🛡️ Prevent Next/Image from crashing
        if (!url || url === "https:undefined") {
          return <div>⚠️ Invalid image asset</div>;
        }

        return (
          <Image
            src={url}
            alt={alt}
            width={600}
            height={400}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        );
      },
    },
  };

  return (
    <div>{documentToReactComponents(hydratedDocument, renderOptions)}</div>
  );
}
