<script lang="ts">
  import { BriefcaseBusiness, CalendarDays, MapPin } from "@lucide/svelte";
  import data from "../../../../data.json";

  type ExperienceEntry = {
    role: string;
    date: string;
    desc_html: string;
    location: string;
    stack: string[];
  };

  const experience = data.experience;

  const entries: ExperienceEntry[] = [
    {
      ...experience.syself,
      location: "Remote",
      stack: ["JavaScript", "Svelte", "Tailwind CSS", "Docker"],
    },
    {
      ...experience.arisale,
      location: "Remote",
      stack: ["Vue", "Nuxt.js", "Sass", "NestJS", "APIs"],
    },
    {
      ...experience.liquid,
      location: "Remote",
      stack: ["Vue", "Nuxt", "Pinia", "Tailwind CSS", "GCP"],
    },
    {
      ...experience.kimche,
      location: "Remote",
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
  class="mx-auto grid min-h-[calc(100vh-1.5rem)] w-full max-w-7xl gap-10 px-5 py-6 md:min-h-[calc(100vh-2.5rem)] md:grid-cols-[1fr_2fr] md:py-8 pb-22! gap-20"
>
  <aside
    class="flex flex-col border-b border-txt/15 pb-10 md:min-h-[calc(100vh-8rem)] md:border-b-0 md:pb-0"
  >
    <div class="md:sticky md:top-12">
      <!-- <p class="font-mono text-sm font-bold text-primary">02.</p> -->
      <h1
        class="mt-3 font-newsreader text-6xl leading-none font-semibold md:text-8xl"
      >
        {experience.title}
      </h1>
      <div class="mt-5 h-0.5 w-12 bg-primary"></div>

      <p
        class="mt-6 max-w-64 font-mono text-base leading-7 text-txt md:text-lg"
      >
        {experience.summary}
      </p>
    </div>

    <div class="mt-auto hidden md:flex">
      <div class="border-l border-primary/25 pl-6">
        <div class="flex items-start gap-3 font-mono text-sm text-txt-soft/75">
          <BriefcaseBusiness class="mt-0.5 size-5 shrink-0 stroke-primary" />
          <p>
            Want to know more?<br />
            <span class="text-txt">Full resume available on request.</span>
          </p>
        </div>
      </div>
    </div>
  </aside>

  <section class="relative md:pl-12">
    <div
      class="absolute left-3 top-0 hidden h-full w-px bg-primary/25 md:block"
      aria-hidden="true"
    ></div>

    <div class="space-y-12 md:space-y-16">
      {#each entries as job}
        {@const role = splitRole(job.role)}

        <article
          class="job-container relative grid gap-4 md:grid-cols-[1fr_auto] after:absolute after:-left-12 after:size-4 after:bg-primary after:rounded-full after:translate-x-[25%]"
        >
          <div>
            <div class="flex items-start gap-3">
              <span
                class="mt-1.5 size-3 shrink-0 rounded-full bg-primary md:hidden"
                aria-hidden="true"
              ></span>
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
              <span class="inline-flex items-center gap-2">
                <MapPin class="size-4" />
                {job.location}
              </span>
            </div>

            <p
              class="mt-5 max-w-3xl font-mono text-sm leading-7 text-txt-soft/75 md:text-base"
            >
              {job.desc_html}
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              {#each job.stack as tech}
                <span
                  class="rounded-md bg-txt/10 px-4 py-2 font-mono text-xs font-bold text-primary/90"
                >
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>
