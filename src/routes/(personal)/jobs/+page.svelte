<script lang="ts">
  import {
    BriefcaseBusiness,
    CalendarDays,
    Download,
    Mail,
  } from "@lucide/svelte";
  import Badge from "$lib/components/badge/badge.svelte";
  import data from "../../../../data.json";

  type ExperienceEntry = {
    role: string;
    date: string;
    desc_html: string;
    stack: string[];
  };

  const experience = data.experience;

  const entries: ExperienceEntry[] = [
    {
      ...experience.syself,
      stack: ["JavaScript", "Svelte", "Tailwind CSS", "Docker"],
    },
    {
      ...experience.arisale,
      stack: ["Vue", "Nuxt.js", "Sass", "NestJS", "APIs"],
    },
    {
      ...experience.liquid,
      stack: ["Vue", "Nuxt", "Pinia", "Tailwind CSS", "GCP"],
    },
    {
      ...experience.kimche,
      stack: ["React", "Styled Components", "Cube.js", "Charts", "Data UI"],
    },
  ];

  const splitRole = (role: string) => {
    const [title, company] = role.split("|").map((part) => part.trim());
    return { title, company };
  };
</script>

<svelte:head>
  <title>{experience.title} | Dreck</title>
</svelte:head>

<div
  class="grid gap-10 lg:grid-cols-[minmax(460px,0.9fr)_minmax(0,1.35fr)] lg:gap-24 pb-10"
>
  <aside class="border-b border-txt/15 pb-10 lg:border-b-0 lg:pb-0">
    <div class="lg:sticky lg:top-[3.25rem]">
      <p class="font-mono text-sm font-bold text-primary">02.</p>
      <h1
        class="mt-3 font-newsreader text-6xl leading-none font-semibold md:text-8xl lg:text-[5.5rem]"
      >
        {experience.title}
      </h1>
      <div class="mt-5 h-0.5 w-12 bg-primary"></div>

      <p
        class="mt-6 max-w-sm font-mono text-base leading-7 text-txt md:text-lg"
      >
        {experience.summary}
      </p>

      <div class="mt-10 border-l border-primary/25 pl-6">
        <div class="flex items-start gap-3 font-mono text-sm text-txt-soft/75">
          <BriefcaseBusiness class="mt-0.5 size-5 shrink-0 stroke-primary" />
          <p>
            Curious about the details?<br />
            <span class="text-txt">You can download my short CV or send me an email.</span>
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-4">
          <a
            href="/cv/dikson-aranda-cv.pdf"
            download
            class="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 font-mono text-sm font-bold text-background transition-opacity hover:opacity-85"
          >
            <Download class="size-4" />
            Download CV
          </a>

          <a
            href="mailto:arandadikson@gmail.com"
            class="inline-flex items-center gap-2 rounded-full border border-primary/35 px-4 py-2.5 font-mono text-sm font-bold text-txt transition-colors hover:border-primary hover:text-primary"
          >
            <Mail class="size-4 stroke-primary" />
            Email me
          </a>
        </div>
      </div>
    </div>
  </aside>

  <section class="relative pl-9 lg:pl-12">
    <div
      class="absolute left-1 top-0 h-full w-px bg-primary/25 lg:left-3"
      aria-hidden="true"
    ></div>

    <div class="space-y-12 lg:space-y-16">
      {#each entries as job}
        {@const role = splitRole(job.role)}

        <article
          class="job-container relative grid gap-4 after:absolute after:-left-8 after:top-1.5 after:size-3 after:-translate-x-[2px] after:rounded-full after:bg-primary lg:grid-cols-[1fr_auto] lg:after:-left-12 lg:after:top-0 lg:after:size-4 lg:after:translate-x-[25%]"
        >
          <div>
            <div class="flex items-start gap-3">
              <div>
                <h2
                  class="font-newsreader text-3xl leading-tight font-semibold text-txt md:text-4xl"
                >
                  {role.title}
                </h2>
                <p class="mt-1 font-mono text-base text-txt-soft/85">
                  {role.company}
                </p>
              </div>
            </div>

            <div
              class="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm font-bold text-primary"
            >
              <span class="inline-flex items-center gap-2">
                <CalendarDays class="size-4" />
                {job.date}
              </span>
            </div>

            <p
              class="mt-5 max-w-3xl font-mono text-sm leading-7 text-txt-soft/75 md:text-base"
            >
              {job.desc_html}
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              {#each job.stack as tech}
                <Badge>
                  {tech}
                </Badge>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>
