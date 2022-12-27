<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import Uni from "./Uni.svelte";
</script>

<Seo
  title="Maximilian Vieweg – Resume"
  description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <Uni
    title="M.Sc. Marine and Maritime Intelligent Robotics"
    uni="Instituto Técnico Lisboa - Université de Toulon"
    url="https://www.master-mir.eu/"
    dates="10/2022 - Current"
    location="Portugal / France"
  >
    <li>
      Erasmus Mundus scholarship recipient for a double degree master focusing on Robotics in combination with maritime science
    </li>
    <li>
      Coursework: Machine Learning, Deep Learning, Optimization, Data Driven Machine Perception
    </li>
  </Uni>

  <Uni
    title="BA Mechanical Engineering - Mechatronics"
    uni="Vienna University of Technology"
    url="https://www.tuwien.at/en/"
    dates="10/2018 - 07/2022"
    location="Vienna, Austria"
  >
    <li>
      Graduated among top 15% of students in the department, among 20 students having followed an individual study plan
    </li>
    <li>
      Studium Irregulare - Created individual curriculum combining courses from the Mechanical and Electrical Engineering bachelor programs
    </li>
    <li>
      Coursework: Robotics and Computer Vision, Object Oriented Programming, Microcomputers, Signals and Systems I/II
    </li>
  </Uni>

  <Uni
    title="Extracurricular Study Exchanges"
    uni=""
    url=""
    dates=""
    location=""
  >
    <li>
      Universidad de Valencia: Spanish B2 Summer Language School, two months
    </li>
    <li>
      McGill University: B2 Full Time Intensive French Language program, three months
    </li>
    <li>
      Beijing No. 12 High School: Exchange at a local Chinese high school with courses in Chinese language, six months
    </li>
  </Uni>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Robotics Internship"
    company="Amazon"
    url="https://amazon.com/"
    dates="07/2020 ‐ 10/2020"
    location="Vienna, Austria"
  >
    <li>Listed as inventor on pending patent application</li>
    <li>
      Automated configuration management of external devices reducing time for
      configuration and updates by 85%
    </li>
    <li>
      Implementation of back-end system for internal performance dashboards,
      joining real-time data from databases in different networks
    </li>
  </Workplace>

  <Workplace
    title="Software Developer (part‐time)"
    company="billazy"
    url="https://billazy.com/"
    dates="01/2018 ‐ 06/2020"
    location="Vienna, Austria"
  >
    <li>
      Design of REST API and software integration into the existing system
    </li>
    <li>
      Co-development of PHP based Web-Interface and Automated testing of API
    </li>
  </Workplace>

  <Workplace
    title="Mandatory Military Service - Paramedic"
    company="Austrian Armed Forces – Gardebataillon Wien"
    url="https://www.bundesheer.at/"
    dates="10/2017 - 04/2018"
    location="Vienna, Austria"
  >
    <li>Certified Paramedic in Austria</li>
  </Workplace>

  <Workplace
    title="Back-End Developer Internship"
    company="Tailored Apps"
    url="https://www.tailored-apps.com/"
    dates="07/2017 ‐ 08/2017"
    location="Vienna, Austria"
  >
    <li>
      Implementation of backend endpoint in node.js for data conversion tasks
    </li>
  </Workplace>
</section>
