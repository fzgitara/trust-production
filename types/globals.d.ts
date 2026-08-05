/**
 * Ambient module declarations for non-TS side-effect imports.
 *
 * Resolves the IDE/editor-only "Cannot find module ... './globals.css'"
 * warning for plain CSS imports (e.g. `import "./globals.css"` in the root
 * layout). Next.js compiles these fine at build time; this declaration simply
 * satisfies TypeScript's language service in the editor.
 */
declare module "*.css";
