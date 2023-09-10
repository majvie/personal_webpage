

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.74d80c70.js","_app/immutable/chunks/index.f109835d.js","_app/immutable/chunks/arrow-up-right.83e446eb.js","_app/immutable/chunks/Icon.3cf822d1.js","_app/immutable/chunks/Seo.d3160c9d.js"];
export const stylesheets = ["_app/immutable/assets/2.78b5bbd9.css"];
export const fonts = [];
