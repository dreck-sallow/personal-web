<script lang="ts">
  import {
    BookOpen,
    Box,
    Code2,
    GraduationCap,
    Infinity,
    Leaf,
    Mail,
    Send,
    TerminalSquare,
    UsersRound,
  } from "@lucide/svelte";
  import avatar from "$lib/assets/images/avatar.png";

  const BACKGROUND = [
    {
      icon: GraduationCap,
      title: "Software Development - SoyHenry",
      desc: "Full Stack Web Development bootcamp.",
      tag: "Certificate",
    },
    {
      icon: BookOpen,
      title: "English - B1",
      desc: "English language course.",
      tag: "B1 Certificate",
    },
    {
      icon: Infinity,
      title: "Self-taught learning",
      desc: "Systems, backend, Linux, Rust and developer tooling.",
      tag: "Ongoing",
    },
  ];

  const VALUES = [
    { icon: Box, title: "Build", desc: "things" },
    { icon: TerminalSquare, title: "Explore", desc: "tech" },
    { icon: Leaf, title: "Keep it", desc: "simple" },
    { icon: UsersRound, title: "Share &", desc: "learn" },
  ];

  const TECH = [
    "Rust",
    "TypeScript",
    "Linux",
    "Git",
    "Databases",
    "CLI Tools",
    "WebSockets",
    "Terminal",
    "Svelte",
  ];

  const CONTACT = [
    { label: "Email", href: "mailto:hello@example.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Send },
    { label: "GitHub", href: "https://github.com/", icon: Code2 },
  ];
</script>

<svelte:head>
  <title>About me | Dre</title>
</svelte:head>

<div class="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full max-w-7xl flex-col px-5 py-6 md:min-h-[calc(100vh-2.5rem)] md:px-12 md:py-8 pb-12!">
  <section class="grid flex-1 items-center gap-10 border-b border-txt/15 py-14 md:grid-cols-[1fr_360px] md:py-18">
    <div>
      <p class="font-mono text-sm font-bold text-primary">01.</p>
      <h1 class="mt-3 font-newsreader text-6xl leading-none font-semibold md:text-8xl">
        About me
      </h1>
      <div class="mt-5 h-0.5 w-12 bg-primary"></div>

      <p class="mt-6 max-w-xl font-mono text-xl leading-relaxed text-txt md:text-2xl">
        I build useful software, learn constantly, and enjoy solving
        <span class="text-primary">real problems.</span>
      </p>

      <p class="mt-6 font-mono text-sm leading-7 text-txt-soft/65">
        Clean code. Thoughtful tools.<br />
        A better developer experience.
      </p>
    </div>

    <div class="flex justify-center md:justify-end">
      <img
        src={avatar}
        alt="Dre avatar"
        class="size-44 rounded-full border border-txt/15 bg-foreground object-cover md:size-64"
      />
    </div>
  </section>

  <section class="grid gap-12 border-b border-txt/15 py-10 md:grid-cols-2 md:py-12">
    <article id="background">
      <p class="font-mono text-sm font-bold text-primary">02.</p>
      <h2 class="mt-2 font-mono text-xl font-bold">Background</h2>

      <div class="mt-7 space-y-6">
        {#each BACKGROUND as item}
          <div class="grid grid-cols-[42px_1fr] gap-4">
            <item.icon class="mt-1 size-7 stroke-primary" />
            <div>
              <h3 class="font-mono text-sm font-bold md:text-base">{item.title}</h3>
              <p class="mt-1 font-mono text-sm leading-6 text-txt-soft/65">{item.desc}</p>
              <p class="mt-2 w-fit rounded-full bg-txt/10 px-3 py-1 font-mono text-xs text-txt-soft/75">
                {item.tag}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </article>

    <article id="i-build-and-explore">
      <p class="font-mono text-sm font-bold text-primary">03.</p>
      <h2 class="mt-2 font-mono text-xl font-bold">I build and explore</h2>

      <p class="mt-7 max-w-xl font-mono text-sm leading-7 text-txt-soft/70">
        I like turning ideas into useful tools, working with low-level systems, and
        improving developer experiences. I value simplicity, readable code, and
        solutions that actually solve real problems.
      </p>

      <div class="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {#each VALUES as item}
          <div>
            <item.icon class="mb-4 size-8 stroke-primary" />
            <p class="font-mono text-sm font-bold">{item.title}</p>
            <p class="font-mono text-sm font-bold">{item.desc}</p>
          </div>
        {/each}
      </div>
    </article>
  </section>

  <section class="grid gap-10 border-b border-txt/15 py-10 md:grid-cols-2 md:py-12">
    <article id="tech-i-enjoy">
      <p class="font-mono text-sm font-bold text-primary">04.</p>
      <h2 class="mt-2 font-mono text-xl font-bold">Tech I enjoy</h2>

      <div class="mt-7 flex flex-wrap gap-3">
        {#each TECH as tech}
          <span class="rounded-full bg-txt/10 px-4 py-2 font-mono text-xs text-txt-soft/80">
            {tech}
          </span>
        {/each}
      </div>
    </article>

    <article id="lets-connect" class="md:border-l md:border-txt/15 md:pl-12">
      <p class="font-mono text-sm font-bold text-primary">05.</p>
      <h2 class="mt-2 font-mono text-xl font-bold">Let's connect</h2>

      <p class="mt-7 font-mono text-sm leading-7 text-txt-soft/70">
        Have a project, idea, or just want to say hi?
      </p>

      <div class="mt-7 flex flex-wrap gap-x-8 gap-y-4">
        {#each CONTACT as item}
          <a
            href={item.href}
            class="inline-flex items-center gap-3 font-mono text-sm font-bold text-txt transition-colors hover:text-primary"
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <item.icon class="size-5 stroke-primary" />
            {item.label}
          </a>
        {/each}
      </div>
    </article>
  </section>

  <p class="py-8 font-mono text-xs text-txt-soft/60">Keep building.</p>
</div>
