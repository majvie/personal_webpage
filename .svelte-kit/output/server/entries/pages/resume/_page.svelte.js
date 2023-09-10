import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "pdfjs-dist";
const Tooltip_svelte_svelte_type_style_lang = "";
const PdfViewer_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Maximilian Vieweg - Resume",
      description: "robotics engineer, software developer, and student"
    },
    {},
    {}
  )}

<section class="${"layout-md py-0"}"><div class="${"flex justify-between items-end"}"><iframe src="${"https://drive.google.com/file/d/1LjNMcsACcvHgUMpml_GRSZ4LJId0KHKg/preview"}" width="${"900"}" height="${"1000"}" allow="${"autoplay"}"></iframe></div></section>`;
});
export {
  Page as default
};
