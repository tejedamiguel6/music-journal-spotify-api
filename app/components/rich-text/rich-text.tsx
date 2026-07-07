import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

type Props = {
  documents?: unknown;
  assetMap?: Record<string, { url: string; title: string; contentType: string; width?: number; height?: number }>;
};

export default function RichText({ documents, assetMap }: Props) {
  // console.log("get the code", documents);
  if (!documents) return null;

  // 🔁 Recursively inject resolved assets into the rich text document
  function injectAssetsIntoRichText(
    document: { nodeType?: string; data?: { target?: { sys?: { id?: string } } }; content?: unknown[] },
    assetMap?: Record<string, { url: string; title: string; contentType: string; width?: number; height?: number }>,
  ): unknown {
    if (
      document?.nodeType === "embedded-asset-block" &&
      document.data?.target?.sys?.id
    ) {
      const assetId = document.data.target?.sys.id;
      const resolvedAsset = assetMap?.[assetId];

      // 🛑 Prevent undefined asset usage
      if (!resolvedAsset) {
        console.warn(`⚠️ Missing asset for ID: ${assetId}`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (document.data as any).target = { sys: { id: assetId }, missing: true };
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (document.data as any).target = resolvedAsset;
      }
    }

    // 📚 Recursively walk child nodes
    if (Array.isArray(document?.content)) {
      document.content = document.content.map((child) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        injectAssetsIntoRichText(child as any, assetMap),
      );
    }

    return document;
  }

  // 💧 Hydrate rich text with asset references
  const hydratedDocument = injectAssetsIntoRichText(
    JSON.parse(JSON.stringify(documents)), // deep clone to avoid mutation bugs
    assetMap,
  );

  // Render rules for Contentful rich text
  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => {
        return (
          <div className=" my-6  rounded-md overflow-hidden border border-[#2c2c2c] shadow-sm">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#2d2d2d] border-b border-[#3c3c3c]">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            {/* Code Block */}
            <pre className="bg-[#1e1e1e] text-sm text-amber-300 p-4 font-mono whitespace-pre overflow-x-auto">
              <code>{text}</code>
            </pre>
          </div>
        );
      },
    },
    renderText: (text: string) => <span className="">{text}</span>,

    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
        <div className="flex justify-center items-center border border-t-red-950 border-b-red-950 border-l-red-950 border-r-red-950">
          <p>{children}</p>
        </div>
      ),

      [BLOCKS.EMBEDDED_ASSET]: (node: { data?: { target?: { missing?: boolean; contentType?: string; url?: string; title?: string; width?: number; height?: number } } }) => {
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
            <div className="flex justify-center items-center border border-t-red-950 border-b-red-950 border-l-red-950 border-r-red-950 p-6">
              <audio controls>
                <source src={url} type="audio/mpeg" />
                {/* <CustomAudioPlayer src={ url} /> */}
              </audio>
            </div>
          );
        }

        // 🖼️ IMAGE fallback
        const url = asset.url?.startsWith("http")
          ? asset.url
          : `https:${asset.url}`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const alt = (asset as any).description || asset.title || "Untitled image";

        // 🛡️ Prevent Next/Image from crashing
        if (!url || url === "https:undefined") {
          return <div>⚠️ Invalid image asset</div>;
        }

        return (
          <div className="flex justify-center items-center border border-t-zinc-100">
            <Image
              src={url}
              alt={alt}
              width={600}
              height={400}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        );
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = hydratedDocument as any;

  return (
    <div>{documentToReactComponents(doc, renderOptions)}</div>
  );
}
