

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.70c4196d.js","_app/immutable/chunks/index.f109835d.js","_app/immutable/chunks/stores.5d17bdae.js","_app/immutable/chunks/singletons.c30d232e.js","_app/immutable/chunks/Seo.d3160c9d.js","_app/immutable/chunks/Icon.3cf822d1.js","_app/immutable/chunks/utils.873f02a7.js","_app/immutable/chunks/_commonjsHelpers.668aeb87.js"];
export const stylesheets = ["_app/immutable/assets/3.5f9ec808.css"];
export const fonts = [];
