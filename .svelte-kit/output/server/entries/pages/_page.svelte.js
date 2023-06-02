import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../chunks/index.js";
import { A as ArrowUpRight } from "../../chunks/arrow-up-right.js";
import { S as Seo } from "../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".g.svelte-ikj1jd{--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity))\n}.project-pair.svelte-ikj1jd{margin-left:-0.75rem;margin-right:-0.75rem;display:grid;row-gap:0.25rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.project-pair.svelte-ikj1jd:hover{--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))\n}@media(min-width: 640px){.project-pair.svelte-ikj1jd{grid-template-columns:1fr 2fr\n    }}aside.svelte-ikj1jd{margin-top:0.125rem;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(115 115 115 / var(--tw-text-opacity))\n}@media(max-width: 420px){#eric-is.svelte-ikj1jd{margin-top:-2.5rem\n    }}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featuredProjects = [
    {
      name: "Trajectory Prediction of Unmanned Aerial Vehicles for a Telescope System",
      href: "/projects#01_trajectory_prediction",
      desc: "bachelor thesis @ TU Vienna"
    },
    {
      name: "Fish Classification",
      href: "/projects#02_fish_classification",
      desc: "classifying fish using CNNs in pytorch"
    },
    {
      name: "Maritime Object Detection",
      href: "/projects#03_maritime_object_detection",
      desc: "detecting sailboats at sea"
    },
    {
      name: "Transmission Box",
      href: "/projects#05_transmission_box",
      desc: "design and calculations for a transmission box"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Maximilian J. Vieweg",
      description: "Robotics Engineer, master student"
    },
    {},
    {}
  )}

<p class="${"layout-md text-black text-xl leading-tight font-light mb-16 svelte-ikj1jd"}" id="${"eric-is"}"><span class="${"g svelte-ikj1jd"}">is a</span> robotics engineer <span class="${"g svelte-ikj1jd"}">and </span><br>
  master student<span class="${"g svelte-ikj1jd"}">.</span></p>

<div class="${"layout-md text-lg space-y-14"}"><div class="${"space-y-5"}"><p>I study robotics at the Instituto Técnico Lisboa and the Université de
      Toulon.
    </p>

    <p>I am currently looking for PhD positions, where I can use my generalist
      background. My undergraduate degree in mechatronics gave me a broad
      foundation of cyber-physical systems, which I am now expanding with a
      master degree in robotics.
    </p></div>

  <div class="${"leading-snug space-y-4"}"><p class="${"pb-2"}">Notable projects:</p>

    ${each(featuredProjects, (project) => {
    return `<a class="${"project-pair svelte-ikj1jd"}"${add_attribute("href", project.href, 0)}><div class="${"text-black font-medium"}">${escape(project.name)}
          ${validate_component(ArrowUpRight, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div><p>${escape(project.desc)}</p>
          ${project.aside ? `<aside class="${"svelte-ikj1jd"}">${escape(project.aside)}</aside>` : ``}</div>
      </a>`;
  })}</div>

  <div class="${"space-y-5"}"><p>Other interests: math, physics, languages and cycling.</p></div>
</div>`;
});
export {
  Page as default
};
