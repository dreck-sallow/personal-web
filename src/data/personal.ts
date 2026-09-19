export const personal = {
  about: {
    background: {
      soyHenry: {
        icon: "graduation",
        title: "Fullstack Development - SoyHenry",
        href: "https://certificates.soyhenry.com/cert?id=251d5f3a-678e-4dc1-85d4-b23df68894e6",
        desc: "Full Stack Web Development bootcamp.",
        tag: "Certificate",
      },
      english: {
        icon: "book-open",
        title: "English - B1",
        href: "https://www.poliglota.org/certificates/3f75ddfd6825247f.pdf",
        desc: "English language course.",
        tag: "B1 Certificate",
      },
      selfTaught: {
        icon: "infinity",
        title: "Self-taught learning",
        href: undefined,
        desc: "Systems, Web apps, Nixos, Rust and Tui apps",
        tag: "Always :)",
      },
    },
    tech: [
      "Rust",
      "TypeScript",
      "Nix/Nixos",
      "Git",
      "CLI Tools",
      "Tui",
      "Terminal",
      "Web APIs",
      "Svelte",
      "Vue",
      "TailwindCSS",
      "CSS",
      "HTML",
    ],
    contacts: {
      email: { label: "Email", href: "mailto:arandadikson@gmail.com", icon: "mail" },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dikson-aranda/",
        icon: "send",
      },
      github: { label: "GitHub", href: "https://github.com/DreckSallow", icon: "code" },
    },
  },
  experience: [
    {
      role: "Frontend Developer | Syself",
      date: "Oct 2025 - Present",
      description:
        "I work on an interactive web app, building features that make the product easier and more intuitive to use. Much of my work involves managing complex interactions and making sure information stays consistent as people use the app.",
      stack: ["JavaScript", "Svelte", "Tailwind CSS", "Docker"],
    },
    {
      role: "Full-stack Developer | Arisale",
      date: "Jun 2024 - Dec 2024",
      description:
        "I worked on several web projects, helping shape new features from the interface through to the services behind it. I also collaborated with the backend team and helped investigate and resolve technical issues.",
      stack: ["Vue", "Nuxt.js", "Sass", "NestJS", "APIs"],
    },
    {
      role: "Frontend Developer | Liquid",
      date: "Nov 2023 - Mar 2024",
      description:
        "I built and maintained web applications, helped deliver changes to production, and worked closely with the design team to make our workflows and user experiences smoother.",
      stack: ["Vue", "Nuxt", "Pinia", "Tailwind CSS", "GCP"],
    },
    {
      role: "Frontend Developer | Kimche",
      date: "Jun 2022 - Aug 2022",
      description:
        "I worked on new features for web applications, especially interfaces that helped people understand data through tables, charts, and progress indicators. I also fixed bugs and helped make the applications easier to use.",
      stack: ["React", "Styled Components", "Cube.js", "Charts", "Data UI"],
    },
  ],
  projects: [
    {
      name: "Htui",
      description: "A keyboard-first HTTP client for your terminal, featuring a text-based interface and built as a lightweight, developer-friendly alternative to Postman and Insomnia",
      tags: ["Rust", "Ratatui", "Terminal", "Tokio"],
      github: "https://github.com/dreck-sallow/htui/tree/iteration-2",
      media: {
        type: "video",
        src: "https://raw.githubusercontent.com/dreck-sallow/htui/iteration-2/demo/demo.mp4",
      },
    },
    {
      name: "Quipp",
      description: "A community-driven platform for interactive debates, ideal for live streams and Q&A sessions.",
      tags: ["TypeScript", "Svelte", "WebSocket", "Tailwind"],
      github: "https://github.com/DreckSallow/qa-web",
      website: "https://quipp.app/",
      media: {
        type: "image",
        src: "https://diksoncode.com/_app/immutable/assets/qa-screenshot.os4vNMIa.avif",
      },
    },
    {
      name: "Flix",
      description: "An open-source desktop app that integrates Anki decks with note-taking to improve study sessions.",
      tags: ["Rust", "Tauri", "SQLite"],
      github: "https://github.com/DreckSallow/flix",
      website: "https://flixdev.netlify.app/",
      media: {
        type: "image",
        src: "https://diksoncode.com/_app/immutable/assets/flix-app.D2AqiOpw.avif",
      },
    },
    {
      name: "Melody",
      description: "A terminal-based music player (TUI) with keyboard navigation, designed for efficiency and minimalism.",
      tags: ["Rust", "Crossterm", "Ratatui"],
      github: "https://github.com/DreckSallow/melody",
      media: {
        type: "image",
        src: "https://diksoncode.com/_app/immutable/assets/melody-cli.C4j2BKlJ.avif",
      },
    },
    {
      name: "Flow",
      description: "A CLI task manager for optimizing workflow and project organization.",
      tags: ["Rust", "Clap", "Serde"],
      github: "https://github.com/DreckSallow/flow",
      media: {
        type: "image",
        src: "https://diksoncode.com/_app/immutable/assets/flow-cli.DfxI7i3O.webp",
      },
    },
  ],
} as const;
