<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "Trajectory Prediction of Unmanned Aerial Vehicles for a Telescope System",
      href: "/projects#01_trajectory_prediction",
      desc: "bachelor thesis @ TU Vienna",
      // aside: "6000+ stars on GitHub",
    },
    {
      name: "Fish Classification",
      href: "/projects#02_fish_classification",
      desc: "classifying fish using CNNs in pytorch",
    },
    {
      name: "Maritime Object Detection",
      href: "/projects#03_maritime_object_detection",
      desc: "detecting sailboats at sea",
    },
  ];
</script>

<Seo
  title="Maximilian J. Vieweg"
  description="Robotics Engineer, master student"
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a</span> robotics engineer <span class="g"> and </span><br
  />
  master student<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    <p>
      I study robotics at the Instituto Técnico Lisboa and the Université de
      Toulon.
    </p>

    <p>
      I am currently looking for PhD positions, where I can use my generalist
      background. My undergraduate degree in mechatronics gave me a broad
      foundation of cyber-physical systems, which I am now expanding with a
      master degree in robotics.
    </p>
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable projects:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p>Other interests: math, physics, languages and cycling.</p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
