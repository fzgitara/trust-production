# Environment Variables

The security tooling in this environment blocks editing `.env` files directly,
so the variable names are documented here instead.

## Variables

| Name | Required | Purpose |
|------|----------|---------|
| `NEXT_PUBLIC_IMAGEKIT_ENDPOINT` | **Yes** | ImageKit URL endpoint / public key (the subdomain part of `https://ik.imagekit.io/<endpoint>/`). Required for `next build` to pre-render pages using `IKImage`. Without it, the build fails at image prerender. |
There are **no server-only secrets** in this project — all env vars are `NEXT_PUBLIC_*`.
(ImageKit only needs the public key for client-side URL building; auth/signing of
uploads would use a separate, server-only setup which is out of scope here.)

## How to set up

Create a `.env.local` file in the project root (gitignored):


