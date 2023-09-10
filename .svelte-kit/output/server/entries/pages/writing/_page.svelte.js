import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { A as ArrowUpRight } from "../../../chunks/arrow-up-right.js";
import { f as formatTime } from "../../../chunks/utils.js";
const WritingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="${"grid gap-y-4"}">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="${"block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"}" target="${"_blank"}" rel="${"noreferrer"}"><div class="${"flex flex-col sm:flex-row sm:items-end mb-1.5"}"><div class="${"text-lg text-black"}">${escape(item.title)}
          ${validate_component(ArrowUpRight, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div class="${"sm:ml-auto mb-0.5 text-neutral-500"}">${escape(formatTime("%B %-d, %Y", item.date))}
        </div></div>
      <div class="${"text-lg leading-snug font-serif italic"}">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = { papers: [
  {
    title: "Trajectory Prediction for Telescope Based UAV Tracking",
    date: /* @__PURE__ */ new Date(16566336e5),
    summary: "Bachelor thesis comparing the use of Kalman and Particle filters for object tracking, improving the performance in cases of object occlusion and jumping trackers.\n",
    link: "/assets/pdf/Vieweg_TrajectoryPrediction.pdf"
  },
  {
    title: "Oceanography Report",
    date: /* @__PURE__ */ new Date(16732224e5),
    summary: "Report from the class 'Oceanography', describing the cast of CTD's and the comparison between simulated drifter advection and data recorded with Ifremer. \n",
    link: "/assets/pdf/Vieweg_Oceanography_Trip_Report.pdf"
  },
  {
    title: "Summary - Adaptive missions for underwater vehicles",
    date: /* @__PURE__ */ new Date(1685664e6),
    summary: "Summary of three papers on the topic of adaptive missions for underwater vehicles.\n",
    link: "/assets/pdf/NTNU_Intro.pdf"
  },
  {
    title: "Transmission Box Report (GER)",
    date: /* @__PURE__ */ new Date(16304544e5),
    summary: "Report from the class 'Machine Design - Project', describing calculations for a transmission box, using DIN and ISO norms\n",
    link: "/assets/pdf/e11806443_Berechnung.pdf"
  },
  {
    title: "The Cultural Revolution in China (GER)",
    date: /* @__PURE__ */ new Date(14859072e5),
    summary: "High school thesis on the Chinese Cultural Revolution, including an interview held and translated by myself\n",
    link: "/assets/pdf/Vieweg_DieKulturrevolutionInChina.pdf"
  }
] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Maximilian Vieweg – Writing",
      description: "Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
    },
    {},
    {}
  )}

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Academic Writing and Reports</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.papers }, {}, {})}</section>`;
});
export {
  Page as default
};
