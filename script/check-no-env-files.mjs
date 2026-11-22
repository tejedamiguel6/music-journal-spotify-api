// Guard for `npm run deploy`.
// OpenNext copies every value in .env / .env.local / .env.production(.local)
// into the Worker bundle it uploads. Production secrets belong in Cloudflare
// (`npx wrangler secret put NAME`), so refuse to deploy from a folder that
// has .env files in it. Deploy from a clean clone instead; see
// docs/deploy-cloudflare.md.
import { readdirSync } from "node:fs";

const envFiles = readdirSync(process.cwd()).filter(
  (name) => name.startsWith(".env") && name !== ".env.example"
);

if (envFiles.length > 0) {
  console.error(
    `\nNot deploying: found ${envFiles.join(", ")} in this folder.\n` +
      "OpenNext would bundle those secrets into the Worker.\n" +
      "Deploy from a clean clone instead (docs/deploy-cloudflare.md).\n"
  );
  process.exit(1);
}
