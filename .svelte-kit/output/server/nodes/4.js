

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.cd91c6cc.js","_app/immutable/chunks/index.f109835d.js","_app/immutable/chunks/Seo.d3160c9d.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js"];
export const stylesheets = ["_app/immutable/assets/4.70c59291.css"];
export const fonts = [];
