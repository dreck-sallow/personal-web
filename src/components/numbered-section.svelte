<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    n: number;
    title: string;
    children: Snippet<[]>;
  }

  const { n, title, children }: Props = $props();
</script>

<section>
  <div class="mb-5 font-newsreader">
    <span class="text-primary text-md font-semibold mb-1 block"> 0{n}. </span>
    <h1 class="text-3xl font-semibold">{title}</h1>
  </div>

  {@render children()}
</section>
