import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.4b5a3691.js","_app/immutable/chunks/index.f109835d.js","_app/immutable/chunks/stores.5d17bdae.js","_app/immutable/chunks/singletons.c30d232e.js"];
export const stylesheets = ["_app/immutable/assets/0.2a4a6abd.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.15c2d816.woff2","_app/immutable/assets/newsreader-all-400-italic.b234bc8e.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.5bf368d2.woff2","_app/immutable/assets/newsreader-latin-400-italic.c935023f.woff2"];
