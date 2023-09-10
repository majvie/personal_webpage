

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.09d3e1fe.js","_app/immutable/chunks/index.f109835d.js","_app/immutable/chunks/stores.5d17bdae.js","_app/immutable/chunks/singletons.c30d232e.js","_app/immutable/chunks/Icon.3cf822d1.js"];
export const stylesheets = [];
export const fonts = [];
