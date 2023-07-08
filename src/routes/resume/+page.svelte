<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import Uni from "./Uni.svelte";
</script>

<Seo
  title="Maximilian Vieweg - Resume"
  description="Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
/>

<section class="layout-md py-0">
  <div class="flex justify-between items-end">
    <h2>
      <a
        class="link"
        href="https://drive.google.com/drive/folders/1BCYqXK22BOwYmRxizxsEz0RmXPknXWHi?usp=sharing"
        >Curriculum Vitae</a
      >
    </h2>
    <div class="text-neutral-500 mb-1">Download the latest version</div>
  </div>
</section>

<section class="layout-md py-10">
  <h2 class="heading2">Education</h2>

  <Uni
    title="M.Sc. Electrical and Computer Engineering"
    uni="Instituto Superior Técnico Lisboa — Universidade de Lisboa"
    url="https://www.master-mir.eu/"
    dates="09/2023 - 06/2024"
    location="Lisbon, Portugal"
  >
    <li>
      Second year of the Erasmus Mundus Marine and Maritime Intelligent Robotics
      program
    </li>
    <li>
      Relevant Coursework - Control of Cyber-Physical Systems, Artificial
      Intelligence and Decision Systems, Image Processing and Vision
    </li>
  </Uni>

  <Uni
    title="M.Sc. Engineering of Complex Systems — Marine and Maritime Intelligent Robotics"
    uni="niversité de Toulon"
    url="https://www.master-mir.eu/"
    dates="09/2022 - 06/2023"
    location="Toulon, France"
  >
    <li>
      Erasmus Mundus scholarship recipient for a double degree master focusing
      on robotics applied to the marine sciences
    </li>
    <li>
      Coursework: Machine Learning, Deep Learning, Optimization, Data Driven
      Machine Perception
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
      Graduated among top 15% of students in the department, among 20 students
      having followed an individual study plan
    </li>
    <li>
      Studium Irregulare - Created individual curriculum combining courses from
      the Mechanical and Electrical Engineering bachelor programs
    </li>
    <li>
      Coursework: Robotics and Computer Vision, Object Oriented Programming,
      Microcomputers, Signals and Systems I/II
    </li>
  </Uni>

  <Uni
    title=""
    uni="Extracurricular Study Exchanges"
    url=""
    dates=""
    location=""
  >
    <li>
      Universidad de Valencia: Spanish B2 Summer Language School,
      08/2021-09/2021
    </li>
    <li>
      McGill University: B2 Full Time Intensive French Language program,
      04/2018-07/2018
    </li>
    <li>
      Beijing No. 12 High School: Exchange at a local Chinese high school with
      courses in Chinese language, 01/2015-07/2015
    </li>
  </Uni>
</section>

<section class="layout-md py-10">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="Control Systems Development Internship"
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
    title="Software Developer (part-time)"
    company="billazy"
    url="https://billazy.com/"
    dates="01/2018 ‐ 06/2020"
    location="Vienna, Austria"
  >
    <li>
      Design of a REST API and integration into the existing system using
      Laravel
    </li>
    <li>
      Co-development of PHP based Web-Interface, expanding the database
      structure to new demands
    </li>
  </Workplace>

  <Workplace
    title="Mandatory Military Service - Paramedic"
    company="Austrian Armed Forces - Gardebataillon Wien"
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

<section class="layout-md py-12">
  <h2 class="heading2">Skills</h2>
  <ul>
    <li>
      <b>Programming</b> <br /> Python (PyTorch, Pandas, NumPy), C, C++, Java, MATLAB/Simulink,
      OpenCV, ROS, SQL
    </li>
    <li>
      <b>Miscellaneous</b> <br /> Linux, CATIA, 3D Printing, STM32, LaTeX, Microsoft
      Office, AWS Basic Knowledge, git
    </li>
    <li>
      <b>Languages</b> <br /> <b>German</b>: C2, <b>English</b>: C2,
      <b>French</b>: B2, <b>Chinese</b>: HSK4 eq. B2, <b>Spanish</b>: B1/B2
    </li>
  </ul>
</section>
