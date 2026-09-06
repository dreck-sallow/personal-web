<script lang="ts">
  import NavPrincipal from "$lib/components/navbar/principal.svelte";
  import "../../app.css";

  const { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="bg-background h-screen w-screen">
  {@render children()}

  <NavPrincipal />
</main>
