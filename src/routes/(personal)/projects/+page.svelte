<script lang="ts">
  import {
    CheckSquare,
    Code2,
    ExternalLink,
    Globe2,
    Headphones,
    Monitor,
  } from "@lucide/svelte";
  import data from "../../../../data.json";

  type ProjectKey = "quipp" | "flix" | "melody" | "flow";

  type Project = {
    key: ProjectKey;
    name: string;
    description: string;
    tags: string[];
    icon: typeof Globe2;
    github?: string;
    website?: string;
    featured?: boolean;
    preview: "quipp" | "flix" | "melody" | "flow";
  };

  const projects = data.projects;

  const stripEmoji = (description: string) =>
    description.replace(/^[^\w\s]+\s*/u, "");

  const entries: Project[] = [
    {
      key: "quipp",
      ...projects.quipp,
      description: stripEmoji(projects.quipp.description),
      tags: ["TypeScript", "Svelte", "WebSocket", "Tailwind"],
      icon: Globe2,
      github: "https://github.com/",
      website: "https://quipp.app/",
      featured: true,
      preview: "quipp",
    },
    {
      key: "flix",
      ...projects.flix,
      description: stripEmoji(projects.flix.description),
      tags: ["Rust", "Tauri", "SQLite"],
      icon: Monitor,
      github: "https://github.com/",
      website: "https://github.com/",
      preview: "flix",
    },
    {
      key: "melody",
      ...projects.melody,
      description: stripEmoji(projects.melody.description),
      tags: ["Rust", "Crossterm", "Ratatui"],
      icon: Headphones,
      github: "https://github.com/",
      preview: "melody",
    },
    {
      key: "flow",
      ...projects.flow,
      description: stripEmoji(projects.flow.description),
      tags: ["Rust", "Clap", "Serde"],
      icon: CheckSquare,
      github: "https://github.com/",
      preview: "flow",
    },
  ];

  const [featuredProject] = entries;
  const otherProjects = entries.slice(1);

  const previewClass = (preview: Project["preview"]) => {
    const base =
      "relative min-h-28 overflow-hidden rounded-md border border-txt/12 shadow-[0_20px_45px_rgb(0_0_0/0.25)]";

    if (preview === "quipp") {
      return `${base} min-h-42 bg-[radial-gradient(circle_at_17%_100%,#c42455_0_29%,transparent_30%),radial-gradient(circle_at_87%_100%,#ef7931_0_32%,transparent_33%),linear-gradient(135deg,#0a4788,#08213a_58%,#102e4d)] md:min-h-52`;
    }

    if (preview === "flix") {
      return `${base} bg-[radial-gradient(circle_at_100%_0%,rgb(111_193_144/0.3),transparent_38%),linear-gradient(135deg,#d6d9e4,#7f889f_62%,#242936)]`;
    }

    if (preview === "melody") {
      return `${base} bg-[linear-gradient(135deg,#101619,#27313b)]`;
    }

    return `${base} bg-[#090d0c]`;
  };
</script>

<svelte:head>
  <title>{projects.title} | Dre</title>
</svelte:head>

<div
  class="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-7xl flex-col px-5 pb-32! py-6 md:min-h-[calc(100vh-2.5rem)] md:px-12 md:py-8"
>
  <header class="max-w-2xl">
    <h1 class="font-newsreader text-6xl leading-none font-semibold md:text-8xl">
      {projects.title}
    </h1>
    <div class="mt-5 h-0.5 w-12 bg-primary"></div>
    <p class="mt-6 max-w-md font-mono text-sm leading-7 text-txt-soft/75 md:text-base">
      {projects.summary}
    </p>
  </header>

  <section class="mt-10 border-b border-txt/15 pb-8 md:mt-12">
    <p class="font-mono text-xs font-bold uppercase tracking-wider text-primary">
      Featured project
    </p>

    <article class="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.05fr)_1fr] md:items-center md:gap-12">
      <div class={previewClass("quipp")} aria-hidden="true">
        <div
          class="absolute left-1/2 top-1/2 min-h-32 w-[68%] min-w-55 -translate-x-1/2 -translate-y-[45%] -rotate-4 rounded-[5px] border-2 border-[#050705] bg-[#f8faf7] px-6 py-5 text-[#101610] shadow-[0_18px_24px_rgb(0_0_0/0.28)]"
        >
          <span
            class="inline-flex w-fit rounded-full bg-[#7d49ee] px-2 py-1 font-mono text-[10px] font-extrabold text-white"
          >
            Quipp
          </span>
          <h2
            class="mt-3 text-center font-mono text-[clamp(18px,3vw,28px)] font-black leading-none"
          >
            Start Your Q&amp;A Journey
          </h2>
          <div class="mx-auto mt-4 flex justify-center gap-2">
            <span class="h-3.5 w-16 rounded-[2px] bg-[#7d49ee]"></span>
            <span class="h-3.5 w-16 rounded-[2px] bg-[#ebe8f4]"></span>
          </div>
          <div class="mt-4 grid grid-cols-3 gap-2">
            <span class="h-4.5 rounded-[2px] bg-[#ebeef3]"></span>
            <span class="h-4.5 rounded-[2px] bg-[#ebeef3]"></span>
            <span class="h-4.5 rounded-[2px] bg-[#ebeef3]"></span>
          </div>
        </div>
      </div>

      <div class="grid gap-5 md:grid-cols-[28px_1fr]">
        <featuredProject.icon class="mt-1 size-6 stroke-primary" />
        <div>
          <h2 class="font-newsreader text-3xl font-semibold leading-tight text-txt md:text-4xl">
            {featuredProject.name}
          </h2>
          <p class="mt-4 max-w-xl font-mono text-sm leading-7 text-txt-soft/75">
            {featuredProject.description}
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            {#each featuredProject.tags as tag}
              <span class="rounded-md bg-txt/10 px-3 py-2 font-mono text-xs font-bold text-txt-soft/85">
                {tag}
              </span>
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
      </div>
    </article>
  </section>

  <section class="py-7">
    <p class="font-mono text-xs font-bold uppercase tracking-wider text-primary">
      Other projects
    </p>

    <div class="mt-4 divide-y divide-txt/15">
      {#each otherProjects as project}
        <article class="grid gap-5 py-5 md:grid-cols-[300px_28px_minmax(0,1fr)_minmax(220px,0.72fr)] md:items-center md:gap-7">
          <div class={previewClass(project.preview)} aria-hidden="true">
            {#if project.preview === "flix"}
              <div
                class="absolute left-1/2 top-1/2 min-h-17 w-[68%] min-w-55 -translate-x-1/2 -translate-y-[45%] -rotate-5 rounded-[5px] border-2 border-[#050705] bg-[#f8faf7] px-4 py-4 text-[#101610] shadow-[0_18px_24px_rgb(0_0_0/0.28)]"
              >
                <span class="block h-2 w-13 rounded-full bg-[#d9dce3]"></span>
                <strong
                  class="mt-2 block overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[9px]"
                >
                  The 100 Most Commonly Used...
                </strong>
                <small
                  class="mt-2 block max-w-37 overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[7px] text-[#4d5750]"
                >
                  Operating and basic expressions
                </small>
              </div>
            {:else if project.preview === "melody"}
              <div class="absolute inset-3.5 grid grid-cols-[1fr_1.25fr] gap-2">
                <span class="rounded-[3px] border border-txt/8 bg-[linear-gradient(180deg,#263443,#0e1418)]"></span>
                <span class="rounded-[3px] border border-txt/8 bg-[linear-gradient(180deg,#263443,#0e1418)]"></span>
                <span class="rounded-[3px] border border-txt/8 bg-[linear-gradient(180deg,#263443,#0e1418)]"></span>
                <span class="rounded-[3px] border border-txt/8 bg-[linear-gradient(180deg,#263443,#0e1418)]"></span>
              </div>
            {:else}
              <div class="absolute inset-x-4.5 inset-y-5.5 grid content-start gap-2.5">
                <div class="mb-0.5 flex gap-2">
                  <span class="size-2 rounded-full bg-[#fb5f57]"></span>
                  <span class="size-2 rounded-full bg-[#f3bd45]"></span>
                  <span class="size-2 rounded-full bg-[#5fcc61]"></span>
                </div>
                <span class="h-1.5 rounded-full bg-txt/60"></span>
                <span class="h-1.5 w-[78%] rounded-full bg-txt/60"></span>
                <span class="h-1.5 w-[56%] rounded-full bg-txt/60"></span>
                <span class="h-1.5 w-[68%] rounded-full bg-txt/60"></span>
              </div>
            {/if}
          </div>

          <project.icon class="hidden size-6 stroke-primary md:block" />

          <div>
            <div class="flex items-start gap-3 md:block">
              <project.icon class="mt-1 size-6 shrink-0 stroke-primary md:hidden" />
              <div>
                <h2 class="font-newsreader text-3xl font-semibold leading-tight text-txt">
                  {project.name}
                </h2>
                <p class="mt-3 max-w-xl font-mono text-sm leading-7 text-txt-soft/75">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          <div class="md:justify-self-end">
            <div class="flex flex-wrap gap-3 md:justify-end">
              {#each project.tags as tag}
                <span class="rounded-md bg-txt/10 px-3 py-2 font-mono text-xs font-bold text-txt-soft/85">
                  {tag}
                </span>
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
