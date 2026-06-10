# Telypas Web

The web client for **Telypas** — a professional networking platform where people are found by what they do. Vite + React 18 + TypeScript, Apollo Client over the Telypas GraphQL API, Better Auth sessions, and GetStream-powered messaging.

## ⚠️ Before anything else: trust the web origin

Better Auth on the API enforces a CSRF origin check. Sign-in/sign-up from this app **will fail with 403s** until the web dev origin is added to the API's `.env`:

```env
# telypas-api/.env
TRUSTED_ORIGINS=connect://,http://localhost:8081,http://localhost:5173
```

Restart the API after changing it. This is the most common "nothing works" issue.

## Prerequisites

- Node 20+
- The API running locally: [`telypas-api`](../telypas-api) (`npm run start:dev`) with MongoDB up and its `.env` configured (including the `TRUSTED_ORIGINS` change above)
- Optional: `npm run seed` in the API repo creates sample users (e.g. `ada@connect.dev` / `Password123!`)

## Run it

```bash
npm install
cp .env.example .env   # VITE_API_BASE=http://localhost:3000
npm run dev            # http://localhost:5173
```

No proxy is needed — `localhost:5173 → localhost:3000` is same-site, so session cookies flow with `credentials: "include"`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Serve the production build |
| `npm run codegen` | Regenerate GraphQL types from `../telypas-api/src/schema.gql` |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run lint` | ESLint over `src` |
| `npm run format` | Prettier over `src` |

## GraphQL codegen

Typed operations come from `@graphql-codegen` (client preset) reading the API's SDL at `../telypas-api/src/schema.gql` — the repos are expected to be **siblings on disk**. Generated output lives in `src/graphql/generated/` and is committed, so the app builds without the API repo present. **Re-run `npm run codegen` whenever the backend schema changes.**

## Architecture notes

- `src/lib/apollo.ts` — Apollo client with `credentials: "include"` and an error link that turns `UNAUTHENTICATED` GraphQL errors into a redirect to `/login` (via `src/lib/auth-events.ts`).
- `src/lib/auth-client.ts` — `better-auth/react` client; `useSession()` drives route guarding (`RequireAuth` / `RedirectIfAuthed`). The `me` query is profile data only, never the auth gate.
- `src/features/chat/ChatProvider.tsx` — fetches `streamChatToken`, connects the Stream client for the lifetime of the signed-in shell, exposes `{ client, unreadCount }`. The Messages route is code-split so the chat SDK stays out of the main bundle.
- Mutations return the full `User`, so the normalized Apollo cache self-heals; the `connections` list is the exception and is patched manually in `src/features/network/useConnections.ts`.
- Design tokens live in `src/styles/tokens.css` (paper `#F7F4EC`, ink `#1A2B16`, acid lime `#C6F432`); Stream chat is re-themed in `src/styles/chat-theme.css`.

## Password reset in development

The API logs the reset URL to **its own console** instead of sending email. Use the **Forgot password** screen, then copy the logged link (it points at `/reset-password?token=…`).
