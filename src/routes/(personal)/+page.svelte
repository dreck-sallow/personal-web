<script lang="ts">
  import {
    BookOpen,
    Box,
    Code2,
    ExternalLink,
    GraduationCap,
    Infinity,
    Leaf,
    Mail,
    Send,
    TerminalSquare,
    UsersRound,
  } from "@lucide/svelte";
  import avatar from "$lib/assets/images/avatar.png";
  import Badge from "$lib/components/badge/badge.svelte";

  const BACKGROUND = [
    {
      icon: GraduationCap,
      title: "Fullstack Development - SoyHenry",
      href: "https://certificates.soyhenry.com/cert?id=251d5f3a-678e-4dc1-85d4-b23df68894e6",
      desc: "Full Stack Web Development bootcamp.",
      tag: "Certificate",
    },
    {
      icon: BookOpen,
      title: "English - B1",
      href: "https://www.poliglota.org/certificates/3f75ddfd6825247f.pdf",
      desc: "English language course.",
      tag: "B1 Certificate",
    },
    {
      icon: Infinity,
      title: "Self-taught learning",
      desc: "Systems, backend, Linux, Rust and developer tooling.",
      tag: "Always :)",
    },
  ];

  const VALUES = [
    { icon: Box, title: "Build", desc: "Useful tools" },
    { icon: TerminalSquare, title: "Explore", desc: "Systems" },
    { icon: Leaf, title: "Simplify", desc: "Complexity" },
    { icon: UsersRound, title: "Share", desc: "What I learn" },
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
    { label: "Email", href: "mailto:arandadikson@gmail.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dikson-aranda/", icon: Send },
    { label: "GitHub", href: "https://github.com/DreckSallow", icon: Code2 },
  ];
</script>

<svelte:head>
  <title>About me | Dreck</title>
</svelte:head>

<div class="flex flex-col pb-12">
  <section class="grid flex-1 items-center gap-10 border-b border-txt/15 pb-14 md:grid-cols-[1fr_360px] md:pb-18">
    <div>
      <p class="font-mono text-sm font-bold text-primary">01.</p>
      <h1 class="mt-3 font-newsreader text-6xl leading-none font-semibold md:text-8xl">
        Dikson Aranda
      </h1>
      <div class="mt-5 h-0.5 w-12 bg-primary"></div>

      <p class="mt-6 max-w-xl font-mono text-xl leading-relaxed text-txt md:text-2xl">
        I like building practical software, exploring how things work, and solving
        <span class="text-primary">interesting problems.</span>
      </p>

      <p class="mt-6 font-mono text-sm leading-7 text-txt-soft/65">
        Readable code. Different angles.<br />
        Useful abstractions. Tools that feel good to use.
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
    <article id="background" class="border-b border-txt/15 pb-10 md:border-b-0 md:pb-0">
      <h2 class="font-mono text-xl font-bold">Background</h2>

      <div class="mt-7 space-y-6">
        {#each BACKGROUND as item}
          <div class="grid grid-cols-[42px_1fr] gap-4">
            <item.icon class="mt-1 size-7 stroke-primary" />
            <div>
              <h3 class="font-mono text-sm font-bold md:text-base">
                {#if item.href}
                  <a
                    href={item.href}
                    class="inline-flex items-center gap-2 text-txt transition-colors hover:text-primary"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {item.title}
                    <ExternalLink class="size-4 stroke-primary" />
                  </a>
                {:else}
                  {item.title}
                {/if}
              </h3>
              <p class="mt-1 font-mono text-sm leading-6 text-txt-soft/65">{item.desc}</p>
              <Badge class="mt-2">
                {item.tag}
              </Badge>
            </div>
          </div>
        {/each}
      </div>
    </article>

    <article id="i-build-and-explore">
      <h2 class="font-mono text-xl font-bold">How I think about software</h2>

      <p class="mt-7 max-w-xl font-mono text-sm leading-7 text-txt-soft/70">
        I like software that is built in thoughtful layers: small pieces, clear
        responsibilities, and abstractions that make the next step easier. Good
        code should tell a story and feel elegant when you read it.
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
    <article id="tech-i-enjoy" class="border-b border-txt/15 pb-10 md:border-b-0 md:pb-0">
      <h2 class="font-mono text-xl font-bold">Tech I enjoy</h2>

      <div class="mt-7 flex flex-wrap gap-3">
        {#each TECH as tech}
          <Badge>
            {tech}
          </Badge>
        {/each}
      </div>
    </article>

    <article id="lets-connect" class="md:border-l md:border-txt/15 md:pl-12">
      <h2 class="font-mono text-xl font-bold">Let's connect</h2>

      <p class="mt-7 font-mono text-sm leading-7 text-txt-soft/70">
        Open to projects, conversations, and good technical rabbit holes.
      </p>

      <div class="mt-7 flex flex-wrap gap-x-8 gap-y-4">
        {#each CONTACT as item}
          <a
            href={item.href}
            class="inline-flex items-center gap-3 border-b border-primary pb-1 font-mono text-sm font-bold text-txt transition-colors hover:text-primary"
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <item.icon class="size-5 stroke-primary" />
            {item.label}
            <ExternalLink class="size-4 stroke-primary" />
          </a>
        {/each}
      </div>
    </article>
  </section>

  <p class="py-8 font-mono text-xs text-txt-soft/60">Keep exploring & building.</p>
</div>
