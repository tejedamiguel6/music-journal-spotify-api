# Deploying the music journal to Cloudflare

A step-by-step guide for putting this Next.js site live on Cloudflare Workers, written so you can do it yourself and understand each step.

**Time:** about 45 minutes the first time, about 5 minutes after that.
**Cost:** $0. The Workers free plan allows 100,000 requests a day, and this site's Worker is about 1.3 MB compressed, under the free plan's 3 MB limit.

---

## The big picture (read this first)

```
   your laptop                         Cloudflare                       already live
 ┌──────────────┐   npm run deploy   ┌────────────────────┐   fetch   ┌──────────────────────────┐
 │ Next.js code │ ─────────────────► │ Worker             │ ────────► │ Go backend (AWS)         │
 └──────────────┘                    │ "music-journal"    │           │ api-spotify-tracks.      │
                                     │ + static files     │ ────────► │   mtejeda.co             │
                                     │ + secrets          │           ├──────────────────────────┤
                                     └─────────┬──────────┘ ────────► │ Neon Postgres (read only)│
                                               │            ────────► │ Contentful, Spotify      │
                          music.mtejeda.co ────┘                      └──────────────────────────┘
```

A few words you'll see:

| Word | What it means here |
|---|---|
| **Worker** | A small program that runs on Cloudflare's servers worldwide. Your whole Next.js app (pages + `/api` routes) becomes one Worker. |
| **OpenNext** (`@opennextjs/cloudflare`) | The adapter that turns a Next.js build into a Worker. `opennextjs-cloudflare build` makes the `.open-next/` folder, and `opennextjs-cloudflare deploy` uploads it. |
| **Wrangler** | Cloudflare's command-line tool. Handles login, deploys, secrets and logs. Its settings live in `wrangler.jsonc`. |
| **Secret** | A setting such as a password or API key, stored encrypted in Cloudflare and handed to the Worker when it runs. It's the production version of `.env.local`. |
| **Build-time vs run-time setting** | A *build-time* setting gets baked into the code when you build. Anything starting with `NEXT_PUBLIC_` is one, and so are pages pre-built from Contentful. A *run-time* setting is read while the site is running, from secrets. |

### ⚠️ The one trap to know about

OpenNext copies **every value in `.env` and `.env.local`** into the Worker it uploads: your DB password, the Spotify secret, the Contentful management token, all of it. They aren't served publicly, but they'd be stored inside your Worker's code on Cloudflare, which is not where secrets belong.

So we **never deploy from your normal project folder**. You deploy from a *clean clone* of the repo, which has no `.env` files, and real secrets go into Cloudflare as secrets. `npm run deploy` enforces this. It refuses to run if it sees an `.env` file (see `script/check-no-env-files.mjs`).

---

## Step 0: Before you start

- [ ] The **Next.js 16 upgrade PR is merged** into `main`. The clean clone in step 4 downloads `main` from GitHub, so anything unmerged won't be deployed.
- [ ] Pick your web address. This guide uses **`music.mtejeda.co`**. You already own `mtejeda.co` and it's already on Cloudflare, so you don't need to buy anything.
  - `api-spotify-tracks.mtejeda.co` is the backend. Don't touch it.
  - The bare `mtejeda.co` is free too, if you'd rather keep it for a portfolio later. Swap it in wherever you see `music.mtejeda.co`.
- [ ] Have your `.env.local` open in your editor. You'll copy values from it, one at a time.

---

## Step 1: Tell Wrangler about your domain

Open `wrangler.jsonc` and add a `routes` section, so the whole file looks like this:

```jsonc
{
  "main": ".open-next/worker.js",
  "name": "music-journal",
  "compatibility_date": "2026-11-01",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  },
  "routes": [
    { "pattern": "music.mtejeda.co", "custom_domain": true }
  ]
}
```

**Why:** `"custom_domain": true` tells Cloudflare to create the DNS record and HTTPS certificate for you on deploy. Because it lives in the file (not just a dashboard click), every future deploy keeps it.

Commit this on a branch, open a PR, and merge it (same as any change).

> You can also skip this step. Every Worker gets a free address like `music-journal.<your-subdomain>.workers.dev`, which is fine for a first test. You'd just use that URL in steps 4 and 6 instead.

---

## Step 2: Log in to Cloudflare from the terminal

In your normal project folder:

```bash
npx wrangler login
```

A browser tab opens. Click **Allow**. Then check it worked:

```bash
npx wrangler whoami
```

You should see your email and account name.

**Why:** Wrangler needs permission to upload Workers and secrets to *your* account. The login is saved on your computer, so you only do this once.

---

## Step 3: Spotify: add the new callback address

Spotify will only send people back to addresses you've approved.

1. Go to <https://developer.spotify.com/dashboard>, open your app, and click **Settings → Edit**.
2. Under **Redirect URIs**, *add* (don't replace the local one):

   ```
   https://music.mtejeda.co/api/spotify/callback/
   ```

3. Save.

**Why:** After you log in with Spotify, it redirects to this address with a one-time code. It must match the `SPOTIFY_REDIRECT_URI` secret (step 6) **character for character**, including the trailing `/`. Your local one ends in `/`, so this one does too.

---

## Step 4: Make a clean copy of the code

```bash
cd ~/Developer
git clone https://github.com/tejedamiguel6/music-journal-spotify-api.git music-journal-deploy
cd music-journal-deploy
npm ci
```

**Why:**
- `git clone` gets exactly what's on `main` on GitHub. `.env` files are in `.gitignore`, so they never come along, which is the whole point.
- `npm ci` installs the exact versions from `package-lock.json`. It's stricter than `npm install`, which is what you want for deploys.
- If npm warns that **install scripts are blocked** for `esbuild` / `workerd`, run `npm approve-scripts esbuild workerd`. Those two download the build tool and Cloudflare's local runtime.

You only clone once. Next time, just `cd ~/Developer/music-journal-deploy && git pull && npm ci`.

---

## Step 5: Give the build the 4 settings it needs

Two pages (the homepage and `/music-journal/my-collection`) are **pre-built from Contentful during the build**, so the build needs Contentful's read-only keys. The site's own address is also baked in at build time.

Copy these lines, fill in the three Contentful values from your `.env.local`, and paste them into the **same terminal** you'll deploy from:

```bash
export CONTENTFUL_SPACE_ID="paste-from-.env.local"
export CONTENTFUL_ACCESS_TOKEN="paste-from-.env.local"
export CONTENTFUL_ENVIRONMENT="develop"
export NEXT_PUBLIC_APP_URL="https://music.mtejeda.co"
```

**Why `export` instead of a `.env` file?** Settings that live only in your terminal session are visible to the build, but OpenNext doesn't copy them into the Worker. They disappear when you close the terminal. (I checked: a build done this way has zero secrets inside it.)

> Use the delivery token (`CONTENTFUL_ACCESS_TOKEN`), **not** the management token. The site only reads from Contentful.

---

## Step 6: Deploy

Still in `music-journal-deploy`:

```bash
npm run deploy
```

What happens, in order:
1. `check-no-env-files.mjs` confirms there are no `.env` files (if there are, it stops).
2. `opennextjs-cloudflare build` runs `next build`, then packs everything into `.open-next/`. It takes about a minute.
3. `opennextjs-cloudflare deploy` uploads it. At the end you'll see a line like `Deployed music-journal triggers` with your URL(s).

The site is up, but **it can't reach the database, Spotify or the backend yet**, because it has no secrets. That's the next step.

---

## Step 7: Add the secrets

Each command asks you to paste the value, so it never ends up in your terminal history. Run them one at a time from inside `music-journal-deploy` (Wrangler reads the Worker name from `wrangler.jsonc`):

```bash
npx wrangler secret put CONTENTFUL_SPACE_ID
```

```bash
npx wrangler secret put CONTENTFUL_ACCESS_TOKEN
```

```bash
npx wrangler secret put CONTENTFUL_ENVIRONMENT
```

```bash
npx wrangler secret put SPOTIFY_CLIENT_ID
```

```bash
npx wrangler secret put SPOTIFY_CLIENT_SECRET
```

```bash
npx wrangler secret put SPOTIFY_REDIRECT_URI
```

```bash
npx wrangler secret put DB_HOST
```

```bash
npx wrangler secret put DB_PORT
```

```bash
npx wrangler secret put DB_NAME
```

```bash
npx wrangler secret put DB_USER
```

```bash
npx wrangler secret put DB_PASSWORD
```

```bash
npx wrangler secret put BACKEND_API_KEY
```

Where each value comes from:

| Secret | Value |
|---|---|
| `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_ENVIRONMENT` | Same as step 5 (from `.env.local`). The build needed them, and now the running site needs them too. |
| `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET` | From `.env.local`. |
| `SPOTIFY_REDIRECT_URI` | **Not** the local one. Use `https://music.mtejeda.co/api/spotify/callback/` (exactly what you added in step 3). |
| `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | From `.env.local`. This is the live Neon database; the website only reads from it. |
| `BACKEND_API_KEY` | From `.env` (the rotated key). Used only when saving your Spotify login to the Go backend. |

**Don't add** `ANTHROPIC_API_KEY`, `CONTENTFUL_MANAGEMENT_TOKEN` or `CONTENTFUL_PREVIEW_ACCESS_TOKEN`. The site never uses them, and a secret you don't upload can't leak.

**Optional:** `CONTENTFUL_APP_URL` matters only if you also host the separate Contentful App somewhere. Skip it for now.

Check the list (it shows names only, never values):

```bash
npx wrangler secret list
```

**Why secrets apply right away:** each `secret put` creates a new version of the Worker with the updated settings. There's no need to deploy again.

---

## Step 8: Check that it works

Open these and compare with what you see on `localhost:3000`:

- [ ] `https://music.mtejeda.co/`: artists grid and the "Last spin" box
- [ ] `/music-journal/calendar`: album covers on the days you listened
- [ ] `/music-journal/my-collection`, then click a genre
- [ ] Click an artist: the stats (total plays, unique tracks) load
- [ ] Log in with Spotify: you come back to the site, logged in

To watch live logs while you click around, run this in a second terminal (Ctrl-C stops it):

```bash
npx wrangler tail music-journal
```

The first visit to the custom domain can take a few minutes while Cloudflare issues the HTTPS certificate.

---

## Updating the site later

```bash
cd ~/Developer/music-journal-deploy
git pull
npm ci
```

Then repeat step 5 (the 4 `export` lines, in a new terminal) and step 6 (`npm run deploy`). Secrets and the domain stay as they are.

### Undo a bad deploy

```bash
npx wrangler deployments list
```

```bash
npx wrangler rollback
```

`rollback` puts the previous version back live in seconds. Then fix the bug and deploy again.

---

## Troubleshooting

| You see | Likely cause / fix |
|---|---|
| `Not deploying: found .env...` | You ran deploy from your normal folder. `cd ~/Developer/music-journal-deploy` instead. |
| Build fails with `Cannot read properties of undefined (reading 'itemGenresCollection')` | The Contentful build settings are missing. Redo step 5 in this terminal. |
| Spotify login says **INVALID_CLIENT: Invalid redirect URI** | Step 3 and the `SPOTIFY_REDIRECT_URI` secret don't match exactly (check `https`, the domain and the trailing `/`). |
| Page loads but "Last spin" / artist stats are empty | A `DB_*` secret is wrong or missing. Run `npx wrangler secret list`, and use `wrangler tail` to see the error. |
| `Next.js version ... is not supported` | You're deploying an old commit. `git pull` to get the Next 16 upgrade. |
| Error 1101 / "Worker threw exception" | Run `npx wrangler tail music-journal`, reload the page, and read the error. |

---

## Good to know

- **Homepage content is captured at build time.** The homepage and my-collection page are pre-built from Contentful. After you edit them in Contentful, redeploy to see the change. (Making them refresh on their own needs an R2 "incremental cache" in OpenNext, which is a nice later upgrade.)
- **The calendar, now-playing and last-spin data are live.** Those are fetched fresh, so they update without redeploying.
- **Database connections:** Workers can't reuse a database connection between visitors, so `app/lib/db/queries.ts` opens a short connection per query. That's why it no longer uses a shared `Pool`; the old code hung on Cloudflare after the first request.
- **Optional security upgrade:** the website only *reads* the database. Creating a read-only Postgres role in Neon for it (instead of the main user) would make it impossible for the website to change data, even if something went wrong.

### Level up later: deploy on every merge (no laptop needed)

Cloudflare can build and deploy from GitHub on its own (**Workers Builds**). In the dashboard, open your `music-journal` Worker, go to **Settings → Builds**, and connect the GitHub repo. Then set:
- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Build variables:** the same 4 settings from step 5 (mark `CONTENTFUL_ACCESS_TOKEN` as secret)

Cloudflare builds from a clean clone, so there's no `.env` trap. Merging a PR into `main` then deploys automatically. Do the manual steps at least once first, so you know what it's doing for you.
