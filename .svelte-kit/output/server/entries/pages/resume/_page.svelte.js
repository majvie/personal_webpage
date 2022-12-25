import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Workplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { company } = $$props;
  let { url } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { defaultHidden = false } = $$props;
  let hidden = defaultHidden;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.defaultHidden === void 0 && $$bindings.defaultHidden && defaultHidden !== void 0)
    $$bindings.defaultHidden(defaultHidden);
  return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""].join(" ").trim()}"><h3 class="${"text-black text-lg leading-tight mb-1"}">${escape(title)} at <a class="${"link"}"${add_attribute("href", url, 0)}>${escape(company)}</a></h3>
  <p class="${"font-light mb-2"}"><span class="${"whitespace-nowrap"}">${escape(dates)}</span>
    <span class="${"px-0.5 text-gray-500"}">•</span>
    <span class="${"whitespace-nowrap"}">${escape(location)}</span></p>
  ${!hidden ? `<ul class="${"list-disc pl-7 marker:text-neutral-400"}">${slots.default ? slots.default({}) : ``}</ul>` : ``}</div>`;
});
const Uni = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { uni } = $$props;
  let { url } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { defaultHidden = false } = $$props;
  let hidden = defaultHidden;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.uni === void 0 && $$bindings.uni && uni !== void 0)
    $$bindings.uni(uni);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.defaultHidden === void 0 && $$bindings.defaultHidden && defaultHidden !== void 0)
    $$bindings.defaultHidden(defaultHidden);
  return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""].join(" ").trim()}"><div><div class="${"flex justify-between items-end"}"><h2 class="${"text-black text-lg leading-tight mb-1"}"><a class="${"link"}"${add_attribute("href", url, 0)}>${escape(uni)}</a></h2>
      <div class="${"text-neutral-500 mb-1"}">${escape(dates)}</div></div>
    <div class="${"flex justify-between items-end"}"><h3>${escape(title)}</h3>
        <span class="${"text-neutral-500 mb-1"}">${escape(location)}</span></div></div>

  ${!hidden ? `<ul class="${"list-disc pl-7 marker:text-neutral-400"}">${slots.default ? slots.default({}) : ``}</ul>` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Maximilian Vieweg – Resume",
      description: "Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
    },
    {},
    {}
  )}

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Education</h2>

  ${validate_component(Uni, "Uni").$$render(
    $$result,
    {
      title: "M.Sc. Marine and Maritime Intelligent Robotics",
      uni: "Instituto Técnico Lisboa - Université de Toulon",
      url: "https://www.master-mir.eu/",
      dates: "10/2022 - Current",
      location: "Portugal / France"
    },
    {},
    {
      default: () => {
        return `<li>Erasmus Mundus scholarship recipient for a double degree master focusing on Robotics in combination with maritime science
    </li>
    <li>Coursework: Machine Learning, Deep Learning, Optimization, Data Driven Machine Perception
    </li>`;
      }
    }
  )}

  ${validate_component(Uni, "Uni").$$render(
    $$result,
    {
      title: "BA Mechanical Engineering - Mechatronics",
      uni: "Vienna University of Technology",
      url: "https://www.tuwien.at/en/",
      dates: "10/2018 - 07/2022",
      location: "Vienna, Austria"
    },
    {},
    {
      default: () => {
        return `<li>Graduated among top 15% of students in the department, among 20 students having followed an individual study plan
    </li>
    <li>Studium Irregulare - Created individual curriculum combining courses from the Mechanical and Electrical Engineering bachelor programs
    </li>
    <li>Coursework: Robotics and Computer Vision, Object Oriented Programming, Microcomputers, Signals and Systems I/II
    </li>`;
      }
    }
  )}</section>

<section class="${"layout-md py-12"}"><h2 class="${"heading2"}">Professional Experience</h2>

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Robotics Internship",
      company: "Amazon",
      url: "https://amazon.com/",
      dates: "07/2020 ‐ 10/2020",
      location: "Vienna, Austria"
    },
    {},
    {
      default: () => {
        return `<li>Listed as inventor on pending patent application</li>
    <li>Automated configuration management of external devices reducing time for
      configuration and updates by 85%
    </li>
    <li>Implementation of back-end system for internal performance dashboards,
      joining real-time data from databases in different networks
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Software Developer (part‐time)",
      company: "billazy",
      url: "https://billazy.com/",
      dates: "01/2018 ‐ 06/2020",
      location: "Vienna, Austria"
    },
    {},
    {
      default: () => {
        return `<li>Design of REST API and software integration into the existing system
    </li>
    <li>Co-development of PHP based Web-Interface and Automated testing of API
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Mandatory Military Service - Paramedic",
      company: "Austrian Armed Forces – Gardebataillon Wien",
      url: "https://www.bundesheer.at/",
      dates: "10/2017 - 04/2018",
      location: "Vienna, Austria"
    },
    {},
    {
      default: () => {
        return `<li>Certified Paramedic in Austria</li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Back-End Developer Internship",
      company: "Tailored Apps",
      url: "https://www.tailored-apps.com/",
      dates: "07/2017 ‐ 08/2017",
      location: "Vienna, Austria"
    },
    {},
    {
      default: () => {
        return `<li>Implementation of backend endpoint in node.js for data conversion tasks
    </li>`;
      }
    }
  )}</section>`;
});
export {
  Page as default
};
