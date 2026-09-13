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

<main class="min-h-screen bg-background p-3 pb-22 text-txt md:p-5 md:pb-22">
  <div class="mx-auto min-h-[calc(100vh-1.5rem)] w-full max-w-7xl px-5 py-6 pb-32 md:min-h-[calc(100vh-2.5rem)] md:px-12 md:py-8">
    {@render children()}
  </div>

  <NavPrincipal />
</main>
