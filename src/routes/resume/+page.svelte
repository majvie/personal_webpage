<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import Uni from "./Uni.svelte";
  import PdfViewer from "svelte-pdf";
</script>

<Seo
  title="Maximilian Vieweg - Resume"
  description="robotics engineer, software developer, and student"
/>

<section class="layout-md py-0">
  <div class="flex justify-between items-end">
    <iframe
      src="https://drive.google.com/file/d/1LjNMcsACcvHgUMpml_GRSZ4LJId0KHKg/preview"
      width="900"
      height="1000"
      allow="autoplay"
    />
  </div>
</section>
