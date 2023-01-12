import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute, o as add_classes, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { marked } from "marked";
import { f as formatTime } from "../../../chunks/utils.js";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star$1 = Star;
var title$8 = "Trajectory Prediction of Unmanned Aerial Vehicles for a Telescope System";
var date$8 = "August 2022";
var repo$6 = "majvie/transmission_box";
var topics$8 = [
  "Kalman Filter",
  "Particle Filter",
  "C++"
];
var lead$8 = "bachelor thesis @ TU Vienna";
var image$8 = "trajectory_prediction.png";
var content$8 = "`trajectory_prediction` - For my bachelor thesis I implemented a method for tracking UAVs for cases of malfunctioning object trackers and object occlusion, comparing the performance of Kalman and Particle Filter based approaches. I achieved a significant improvement in robustness for occluded and noisy trackers.";
const _01_trajectory_prediction = {
  title: title$8,
  date: date$8,
  repo: repo$6,
  topics: topics$8,
  lead: lead$8,
  image: image$8,
  content: content$8
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$8,
  date: date$8,
  repo: repo$6,
  topics: topics$8,
  lead: lead$8,
  image: image$8,
  content: content$8,
  default: _01_trajectory_prediction
}, Symbol.toStringTag, { value: "Module" }));
var title$7 = "Fish Classification";
var date$7 = "December 2022";
var repo$5 = "majvie/fish_categorisation";
var topics$7 = [
  "Machine Learning",
  "CNN",
  "pytorch"
];
var lead$7 = "fish classification using CNNs";
var image$7 = "fish_classification.png";
var content$7 = "`fish_classification` - This project involves using CNNs and PyTorch to classify fish images into different categories. We will train a model on a dataset of fish images and use it to predict the class of new, unseen images. Finally its performance is compared to a fine-tuned AlexNet and a MobileNet to explore Transfer Learning.";
const _02_fish_classification = {
  title: title$7,
  date: date$7,
  repo: repo$5,
  topics: topics$7,
  lead: lead$7,
  image: image$7,
  content: content$7
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$7,
  date: date$7,
  repo: repo$5,
  topics: topics$7,
  lead: lead$7,
  image: image$7,
  content: content$7,
  default: _02_fish_classification
}, Symbol.toStringTag, { value: "Module" }));
var title$6 = "Detection of Maritime Objects";
var date$6 = "January 2023";
var topics$6 = [
  "Object Detection",
  "R-CNN",
  "pytorch"
];
var lead$6 = "detecting sailboats at sea";
var image$6 = "maritime_object_detection.png";
var content$6 = "`object_detection` - A Faster R-CNN is trained to detect and categorize maritime objects, such as sailboats and buoys, at sea. Each detection is visualised with a bounding box and relevant metrics are displayed next to the image category. For this purpose images are filtered from the Pascal VOC for training.";
const _03_maritime_object_detection = {
  title: title$6,
  date: date$6,
  topics: topics$6,
  lead: lead$6,
  image: image$6,
  content: content$6
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$6,
  date: date$6,
  topics: topics$6,
  lead: lead$6,
  image: image$6,
  content: content$6,
  default: _03_maritime_object_detection
}, Symbol.toStringTag, { value: "Module" }));
var title$5 = "Simulation of Drifter Advection compared to Real-Life Data";
var date$5 = "October 2022";
var topics$5 = [
  "Numerical Simulation",
  "Oceanography",
  "MATLAB"
];
var lead$5 = "drifter simulation";
var image$5 = "drifter_movement_simulation.png";
var content$5 = "`drifter_simulation` - A simulation of drifter advection is created for the Toulon Bay. Its result is then compared to the movement of drifters set out at sea during a mission with Ifremer. Even during the time-span of five hours, the current velocities, sampled once per hour, could be used to predict drifter movement.";
const _04_drifter_movement_simulation = {
  title: title$5,
  date: date$5,
  topics: topics$5,
  lead: lead$5,
  image: image$5,
  content: content$5
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$5,
  date: date$5,
  topics: topics$5,
  lead: lead$5,
  image: image$5,
  content: content$5,
  default: _04_drifter_movement_simulation
}, Symbol.toStringTag, { value: "Module" }));
var title$4 = "Transmission Box";
var date$4 = "October 2021";
var repo$4 = "majvie/transmission_box";
var topics$4 = [
  "Mechanical Engineering",
  "Mechanical Design",
  "Clutch"
];
var lead$4 = "design and calculations for a transmission box";
var image$4 = "transmission_box.png";
var content$4 = "[`transmission_box`](https://github.com/majvie/transmission_box)- Design, Calculations and Dimensioning of a Transmission Box, clutches and roll for roll forming according to DIN and ISO standards. As the team leader I was responsible for the calculations and design of parts of the transmission as well as the hydraulically actuated multi-plate clutch and for project management.";
const _05_transmission_box = {
  title: title$4,
  date: date$4,
  repo: repo$4,
  topics: topics$4,
  lead: lead$4,
  image: image$4,
  content: content$4
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$4,
  date: date$4,
  repo: repo$4,
  topics: topics$4,
  lead: lead$4,
  image: image$4,
  content: content$4,
  default: _05_transmission_box
}, Symbol.toStringTag, { value: "Module" }));
var title$3 = "Chess Board";
var date$3 = new Date(16172352e5);
var repo$3 = "majvie/chessboard";
var topics$3 = [
  "CAD",
  "chess",
  "3D Printing"
];
var lead$3 = "3D printing a chessboard";
var image$3 = "chessboard.png";
var content$3 = "[`chessboard`](https://github.com/majvie/chessboard) - This project involves creating chess pieces using CAD software for 3D printing. The pieces are designed Fusion 360 after which the Ender-3 is used for 3D printing.";
const chess_board = {
  title: title$3,
  date: date$3,
  repo: repo$3,
  topics: topics$3,
  lead: lead$3,
  image: image$3,
  content: content$3
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$3,
  date: date$3,
  repo: repo$3,
  topics: topics$3,
  lead: lead$3,
  image: image$3,
  content: content$3,
  default: chess_board
}, Symbol.toStringTag, { value: "Module" }));
var title$2 = "HDD Based Line Follower";
var date$2 = "March 2022";
var repo$2 = "majvie/line_follower";
var topics$2 = [
  "Electronics",
  "motors",
  "C"
];
var lead$2 = "electrical wiring and low level programming";
var image$2 = "line_follower.png";
var content$2 = "[`line_follower`](https://github.com/majvie/line_follower) - Design, Implementation, and real-life testing of HDD-based Line-Follower involving writing code in C for microcontrollers, wiring of electrical components and choice of motors/sensors.";
const line_follower$1 = {
  title: title$2,
  date: date$2,
  repo: repo$2,
  topics: topics$2,
  lead: lead$2,
  image: image$2,
  content: content$2
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$2,
  date: date$2,
  repo: repo$2,
  topics: topics$2,
  lead: lead$2,
  image: image$2,
  content: content$2,
  default: line_follower$1
}, Symbol.toStringTag, { value: "Module" }));
var title$1 = "Handwritten Letters Classficiation";
var date$1 = "November 2022";
var repo$1 = "majvie/mnist_class";
var topics$1 = [
  "Machine Learning",
  "MLP",
  "pytorch"
];
var lead$1 = "MNIST classification using MLPs and pytorch";
var image$1 = "mnist_class.png";
var content$1 = "`mnist_class`- This project involves using MLPs and PyTorch to classify handwritten letters from the MNIST dataset.";
const mnist_class$1 = {
  title: title$1,
  date: date$1,
  repo: repo$1,
  topics: topics$1,
  lead: lead$1,
  image: image$1,
  content: content$1
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title: title$1,
  date: date$1,
  repo: repo$1,
  topics: topics$1,
  lead: lead$1,
  image: image$1,
  content: content$1,
  default: mnist_class$1
}, Symbol.toStringTag, { value: "Module" }));
var title = "Pong Clone";
var date = "November 2021";
var repo = "majvie/pong";
var topics = [
  "STM 32",
  "interrupts",
  "C"
];
var lead = "working with microcontrollers and sensors";
var image = "pong_clone.png";
var content = "[`pong_clone`](https://github.com/majvie/pong) - I built a pong clone running on a STM32 using a Nokia 5510 display and tilt sensors for controls. The microcontroller software architecture is built on interrupts, thereby saving energy.";
const pong_clone$1 = {
  title,
  date,
  repo,
  topics,
  lead,
  image,
  content
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title,
  date,
  repo,
  topics,
  lead,
  image,
  content,
  default: pong_clone$1
}, Symbol.toStringTag, { value: "Module" }));
const chessboard = "/_app/immutable/assets/chessboard-c91ba023.png";
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: chessboard
}, Symbol.toStringTag, { value: "Module" }));
const drifter_movement_simulation = "/_app/immutable/assets/drifter_movement_simulation-b4e4871d.png";
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: drifter_movement_simulation
}, Symbol.toStringTag, { value: "Module" }));
const fish_classification = "/_app/immutable/assets/fish_classification-fd2ac493.png";
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fish_classification
}, Symbol.toStringTag, { value: "Module" }));
const line_follower = "/_app/immutable/assets/line_follower-2f1a511f.png";
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: line_follower
}, Symbol.toStringTag, { value: "Module" }));
const maritime_object_detection = "/_app/immutable/assets/maritime_object_detection-6b8d8bbd.png";
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: maritime_object_detection
}, Symbol.toStringTag, { value: "Module" }));
const mnist_class = "data:image/png;base64,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";
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mnist_class
}, Symbol.toStringTag, { value: "Module" }));
const pong_clone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADpCAMAAACp8fr0AAAAnFBMVEUAAADT09P///8+Pj6Hh4fLy8vV1dWKiopmZmaOjo7a2tpjY2PPz8/Y2NgpKSkICAgEBASysrJCQkI6OjogICCDg4Pc3NzZ2dnX19d6enokJCQsLCx+fn5zc3OlpaWPj49FRUUwMDAQEBA1NTUbGxvQ0NBdXV1JSUkWFhaRkZGJiYlXV1dRUVGqqqqSkpK5ubm2traUlJSgoKCWlpZlGF1uAAADLklEQVR42uzd25LSQBRG4YZQhIAcTIgwEI4TZyDKwPs/nd1Ra27U6m1Z7k6yvkf4L7r2Kgowu3EPnhiLsWqMJcBYmsxrPAjNrefc80FoTIAmH+xWw8rAe6zYgLEYS81oPR6PPx0MPGRPzlcDAEB3bV6dk4GHSW+9Xo85SrngGcsfYwnRhlrqNixoQwBAly2PFm0oacPEgAuesXwxlqbRkDakDQEA8LZMj9bWwMOINuSCdxhLgLFkaEM12VNRFLQhAKDTlqlDG9KGFhe8J8YSYCwZ2lBNVlg5bQgA6LJl5MwMvNpwOp3ShlzwjCXAWDK0oZqsyPOcNgQAdFqZWbQhbehwwXtiLAHG0vLehrxZXqK6Db8YAAC6q8ycjQFtyAXvi7EEGEuGNlQT5daANgQAqNgcU6s0yspnS78N53/+2uO174zM32hfG876zmNufi0JY6xALvjvY31kLMbq5FiBtGEzxorc//zqt2EzxgoEYzFWjbEEGEugo2OVz87SSHVyrKDaMPSxuOAZ6wfGEqENtdRtWNGGTcJYjFVjLAHGEujoWJeTRRvShg4XvDfGEujkWG9hjDUarlarUNrw/ruxXm77/f6WGmXRoKqqWL0Ny3qN3cIAAPD/XU6Oehs2QyBt2AyBXPDNwFiM9a6FbdgM6SCOY/02BABA0WXr0Ia0ocUF74mxBBhLhjZUk1Y2DZMXA198tgkA7XOZbS31n8RpBtpQYPKZC57csRhLiDbUksZJkhxoQz8LizYEgPY5zxzakDZ0aEN/5I4nxhKiDbWk8eFwuNKGfhbEIQC00nlj0Ya0YY029EfueGIsGd4sNWlyvV7faEONNjxHzszAQ9R39gaMxVi+GEvYhs6FsRTurO398Xjcd6ad/nEbLs7O3LQTucNYPwX9Zn1rzw5SKAShMAorvSaPoCgbRhEUNBGs/e8tFZrfmRc53xL+gdyDddtW732gDUUG/g0BoE67i2IbgjvLaG7DupE7jPXhzSpmu0IID20oMvQJbQgA1dldQhtyZ0W0oRy5I8VYJZ15rJ/Rx42NMtOc36x7arQxi2216WxytOqY5W8hxFiMlTFWSS+n7VxGzUkCkAAAAABJRU5ErkJggg==";
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pong_clone
}, Symbol.toStringTag, { value: "Module" }));
const trajectory_prediction = "/_app/immutable/assets/trajectory_prediction-6c9362a8.png";
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: trajectory_prediction
}, Symbol.toStringTag, { value: "Module" }));
const transmission_box = "/_app/immutable/assets/transmission_box-68eb8a75.png";
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: transmission_box
}, Symbol.toStringTag, { value: "Module" }));
const Markdown_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".md-output.svelte-19wf98v p{margin-bottom:1rem\n}.md-output.svelte-19wf98v strong{font-weight:600\n}.md-output.svelte-19wf98v code{font-size:95%\n}",
  map: null
};
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let html;
  let { source } = $$props;
  marked.use({
    renderer: {
      link(href, title2, text) {
        let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
        if (title2) {
          out += ' title="' + title2 + '"';
        }
        out += ">" + text + "</a>";
        return out;
      }
    }
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  $$result.css.add(css$1);
  html = marked.parse(source, { smartLists: true, smartypants: true });
  return `<div class="${"md-output svelte-19wf98v"}"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->
</div>`;
});
const Project_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pill.svelte-1d8a62h{display:flex;align-items:center;font-size:0.875rem;line-height:1.25rem;font-weight:500;margin-right:0.375rem;margin-bottom:0.5rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding-left:0.375rem;padding-right:0.375rem;padding-top:1px;padding-bottom:1px\n}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { images } = $$props;
  let { stars = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.stars === void 0 && $$bindings.stars && stars !== void 0)
    $$bindings.stars(stars);
  $$result.css.add(css);
  return `
<h3 class="${"text-black text-xl font-semibold mb-2"}"><span class="${"mr-1"}">${escape(data.title)}</span>
  <small class="${"whitespace-nowrap text-neutral-500 text-base font-normal"}">${escape(formatTime("%B %Y", data.date))}</small></h3>


<div class="${"flex flex-wrap mb-1"}"><a class="${"pill hover:!bg-neutral-200 transition-colors svelte-1d8a62h"}" href="${"https://github.com/" + escape(data.repo, true) + "/stargazers"}">${validate_component(Star$1, "Star").$$render($$result, { size: 14, class: "fill-current" }, {}, {})}
    ${stars?.[data.repo] !== void 0 ? `<span class="${"ml-1"}">${escape(stars[data.repo].toLocaleString())}</span>` : `<span>​</span>`}</a>
  ${each(data.topics, (tag) => {
    return `<div class="${"pill svelte-1d8a62h"}">${escape(tag)}</div>`;
  })}</div>


<div class="${"space-y-4"}"><div class="${"grid grid-cols-3 gap-4 md:gap-8 lg:gap-12"}"><div class="${"col-span-3 md:col-span-2"}"><p class="${"text-lg font-light mb-3"}">${escape(data.lead)}</p>
      ${validate_component(Markdown, "Markdown").$$render($$result, { source: data.content }, {}, {})}</div>
    <div class="${"col-span-3 md:col-span-1"}"><a rel="${"external"}"${add_attribute("href", images[`../../projects/${data.image}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${data.image}`]?.default, 0)} alt="${escape(data.title, true) + " preview image"}"${add_classes((data.image_border ? "border" : "").trim())}></a></div></div>

  ${data.subimages ? `<div class="${"grid grid-cols-3 gap-4 md:gap-8 lg:gap-12"}">${each(data.subimages, (image2) => {
    return `<div class="${"col-span-full md:col-span-1"}"><a rel="${"external"}"${add_attribute("href", images[`../../projects/${image2}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${image2}`]?.default, 0)} alt="${escape(data.title, true) + " subimage"}"></a>
        </div>`;
  })}</div>` : ``}
</div>`;
});
function trimName(id) {
  return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsByDate;
  let projectsByTitle;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const projects = /* @__PURE__ */ Object.assign({ "../../projects/01_trajectory_prediction.md": __vite_glob_0_0, "../../projects/02_fish_classification.md": __vite_glob_0_1, "../../projects/03_maritime_object_detection.md": __vite_glob_0_2, "../../projects/04_drifter_movement_simulation.md": __vite_glob_0_3, "../../projects/05_transmission_box.md": __vite_glob_0_4, "../../projects/chess_board.md": __vite_glob_0_5, "../../projects/line_follower.md": __vite_glob_0_6, "../../projects/mnist_class.md": __vite_glob_0_7, "../../projects/pong_clone.md": __vite_glob_0_8 });
  const images = /* @__PURE__ */ Object.assign({ "../../projects/chessboard.png": __vite_glob_1_0, "../../projects/drifter_movement_simulation.png": __vite_glob_1_1, "../../projects/fish_classification.png": __vite_glob_1_2, "../../projects/line_follower.png": __vite_glob_1_3, "../../projects/maritime_object_detection.png": __vite_glob_1_4, "../../projects/mnist_class.png": __vite_glob_1_5, "../../projects/pong_clone.png": __vite_glob_1_6, "../../projects/trajectory_prediction.png": __vite_glob_1_7, "../../projects/transmission_box.png": __vite_glob_1_8 });
  let stars = null;
  projectsByDate = Object.keys(projects).sort((a, b) => projects[b].date - projects[a].date);
  projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  [...projectsByTitle].sort((a, b) => {
    const starsA = stars?.[projects[a].repo] ?? 0;
    const starsB = stars?.[projects[b].repo] ?? 0;
    return starsB - starsA;
  });
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Maximilian Vieweg – Projects",
      description: "Projects TODO"
    },
    {},
    {}
  )}

<div class="${"bg-gray-900 text-neutral-200 dark"}"><section class="${"layout-md py-12"}"><h2 class="${"heading2 text-white"}">Table of Contents</h2>
    <ul class="${"sm:columns-2"}">${each(projectsByDate, (id) => {
    return `<li><a class="${"link"}" href="${"#" + escape(trimName(id), true)}">${escape(projects[id].title)}</a>
        </li>`;
  })}</ul></section></div>


${each(projectsByDate, (id) => {
    return `<section class="${"py-10"}"${add_attribute("id", trimName(id), 0)}><div class="${"mx-auto max-w-[1152px] px-4 sm:px-6"}">${validate_component(Project, "Project").$$render($$result, { data: projects[id], images, stars }, {}, {})}</div>
  </section>`;
  })}`;
});
export {
  Page as default
};
