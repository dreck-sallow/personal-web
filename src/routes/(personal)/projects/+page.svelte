<script lang="ts">
  import {
    Code2,
    ExternalLink,
    Globe2,
  } from "@lucide/svelte";
  import Badge from "$lib/components/badge/badge.svelte";
  import { personal } from "$lib/../data/personal";

  type Project = {
    name: string;
    description: string;
    tags: readonly string[];
    github?: string;
    website?: string;
    media: { type: "image" | "video"; src: string } | null;
  };

  const stripEmoji = (description: string) =>
    description.replace(/^[^\w\s]+\s*/u, "");

  const entries: Project[] = personal.projects.map((project) => ({
    ...project,
    description: stripEmoji(project.description),
  }));

  const [featuredProject] = entries;
  const otherProjects = entries.slice(1);

  const previewClass =
    "relative min-h-44 overflow-hidden rounded-md border border-txt/12 bg-[#050807] shadow-[0_20px_45px_rgb(0_0_0/0.25)]";
</script>

<svelte:head>
  <title>My Projects | Dre</title>
</svelte:head>

<div class="flex flex-col">
  <header class="max-w-2xl">
    <p class="font-mono text-sm font-bold text-primary">03.</p>
    <h1 class="mt-3 font-newsreader text-6xl leading-none font-semibold md:text-8xl">
      My Projects
    </h1>
    <div class="mt-5 h-0.5 w-12 bg-primary"></div>
    <p class="mt-6 max-w-md font-mono text-sm leading-7 text-txt/90 md:text-base">
      I like to experiment, learn, and build useful things. These are some projects I have created with dedication and curiosity.
    </p>
  </header>

  <section class="mt-10 border-b border-txt/15 pb-8 md:mt-12">
    <p class="font-mono text-xs font-bold uppercase tracking-wider text-primary">
      Featured project
    </p>

    <article class="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_1fr] md:items-center md:gap-12">
      <div class={previewClass}>
        {#if featuredProject.media?.type === "video"}
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            src={featuredProject.media.src}
            class="absolute inset-0 h-full w-full object-cover"
            controls
            playsinline
            preload="metadata"
            aria-label={`${featuredProject.name} project preview`}
          ></video>
        {:else if featuredProject.media}
          <img
            src={featuredProject.media.src}
            alt={`${featuredProject.name} project preview`}
            class="absolute inset-0 h-full w-full object-cover"
          />
        {/if}
      </div>

      <div>
        <h2 class="font-newsreader text-3xl font-semibold leading-tight text-txt md:text-4xl">
          {featuredProject.name}
        </h2>
        <p class="mt-4 max-w-xl font-mono text-sm leading-7 text-txt-soft/75">
          {featuredProject.description}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          {#each featuredProject.tags as tag}
            <Badge>
              {tag}
            </Badge>
          {/each}
        </div>

        <div class="mt-7 flex flex-wrap gap-x-8 gap-y-4">
          {#if featuredProject.github}
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 font-mono text-sm font-bold text-txt-soft/85 transition-colors hover:text-primary"
            >
              <Code2 class="size-5 stroke-primary" />
              GitHub
              <ExternalLink class="size-4" />
            </a>
          {/if}
          {#if featuredProject.website}
            <a
              href={featuredProject.website}
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 font-mono text-sm font-bold text-txt-soft/85 transition-colors hover:text-primary"
            >
              <Globe2 class="size-5 stroke-primary" />
              Website
              <ExternalLink class="size-4" />
            </a>
          {/if}
        </div>
      </div>
    </article>
  </section>

  <section class="py-7">
    <p class="font-mono text-xs font-bold uppercase tracking-wider text-primary">
      Other projects
    </p>

    <div class="mt-4 divide-y divide-txt/15">
      {#each otherProjects as project}
        <article class="grid gap-5 py-5 md:grid-cols-[300px_minmax(0,1fr)_minmax(220px,0.72fr)] md:items-center md:gap-x-10 md:gap-y-7">
          <div class={previewClass}>
            {#if project.media?.type === "video"}
              <!-- svelte-ignore a11y_media_has_caption -->
              <video
                src={project.media.src}
                class="absolute inset-0 h-full w-full object-cover"
                controls
                playsinline
                preload="metadata"
                aria-label={`${project.name} project preview`}
              ></video>
            {:else if project.media}
              <img
                src={project.media.src}
                alt={`${project.name} project preview`}
                class="absolute inset-0 h-full w-full object-cover"
              />
            {/if}
          </div>

          <div>
            <h2 class="font-newsreader text-3xl font-semibold leading-tight text-txt">
              {project.name}
            </h2>
            <p class="mt-3 max-w-xl font-mono text-sm leading-7 text-txt/75">
              {project.description}
            </p>
          </div>

          <div class="md:justify-self-end">
            <div class="flex flex-wrap gap-3 md:justify-end">
              {#each project.tags as tag}
                <Badge>
                  {tag}
                </Badge>
              {/each}
            </div>

            <div class="mt-6 flex flex-wrap gap-x-7 gap-y-4 md:justify-end">
              {#if project.github}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center gap-2 font-mono text-sm font-bold text-txt-soft/85 transition-colors hover:text-primary"
                >
                  <Code2 class="size-5 stroke-primary" />
                  GitHub
                  <ExternalLink class="size-4" />
                </a>
              {/if}
              {#if project.website}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center gap-2 font-mono text-sm font-bold text-txt-soft/85 transition-colors hover:text-primary"
                >
                  <Globe2 class="size-5 stroke-primary" />
                  Website
                  <ExternalLink class="size-4" />
                </a>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>
