import type { WebContents } from "./common";

export const t: WebContents = {
  "page.head.title": "Dreck Sallow | Web developer",
  "page.head.description": "Portfolio of Dreck (Dikson Aranda), full-stack developer specializing in frontent with vue & react.",

  "links.about": "About",
  "links.experience": "Experience",
  "links.projects": "Projects",
  "links.skills": "Skills",

  "about.greeting": "Hey there,",
  "about.presentation": "I'm Dikson Aranda",
  "about.primary_description": "Also known as Dreck Sallow, I'm a curious and dedicated web developer with experience crafting user-focused digital products.",
  "about.secondary_description": "I enjoy designing intuitive interfaces and writing clean, efficient code that solves real-world problems.",
  // "about.secondary_description": "I enjoy designing intuitive interfaces and writing clean, efficient code that solves real-world problems. Lately, I’ve been deepening my understanding of systems and software architecture — always learning, always building.",
  experience: {
    title: "Experience",
    summary: "Show my experience so far, in some companies and my education",
    arisale: {
      role: "Full Stack developer | Arisale",
      date: "Jun 2024 - Dic 2024",
      desc_html: "I used Vue with Nuxt.js to create web projects and employed SASS for styling. I collaborated with the backend team to add features and resolve issues using Nest.js."
    },
    liquid: {
      role: "Frontend developer | Liquid",
      date: "Nov 2023 - Mar 2023",
      desc_html: "I developed web applications using Vue, Nuxt, Pinia, and Tailwind CSS, and deployed them on Google Cloud Platform (GCP). I worked closely with the design team to streamline workflows and enhance user experience."
    },
    kimche: {
      role: "Frontend Developer | Kimche",
      date: "Jun 2022 - Aug 2022",
      desc_html: "I implemented new features in web applications, focusing on data visualization through tables, charts, and progress bars. I identified and fixed issues, improving functionality and user experience. Technologies used: React, React Context, and Cube.js."
    },
    henry: {
      role: "FullStack Developer (Education) | SoyHenry",
      date: "Oct 2021 - Mar 2022",
      desc_html: "I completed Soy Henry's Bootcamp, where I gained skills in full-stack web development within the JavaScript ecosystem (frontend and backend). For the final project, we developed an online tech store. Skills acquired: React, Redux, Node.js, PostgreSQL, HTML, CSS, Sequelize."
    }
  },

  projects: {
    title: "My Projects",
    summary: "I like to experiment,  learn, and build useful things. These are some projects I've created with dedication and a lot of curiosity",
    quipp: {
      name: "Quipp",
      description: "🌐 A community-driven platform for interactive discussions, ideal for live streams and Q&A sessions.",
    },
    flix: {
      name: "Flix",
      description: "🖥️ An open-source desktop app that integrates Anki decks with note-taking for enhanced study sessions."
    },
    melody: {
      name: "Melody",
      description: "🎧 A terminal-based music player (TUI) with keyboard navigation, designed for efficiency and minimalism."
    },
    flow: {
      name: "Flow",
      description: "✅ A CLI task manager for streamlined project organization and workflow optimization."
    }
  },

  skills: {
    title: "Skills & Technologies",
    summary: "A comprehensive overview of my technical expertise across different domains",
    "frontend.title": "Frontend Development",
    "backend.title": "Backend Development",
    "terminal.title": "Terminal & Tools"
  },

  "contact.title": "Have a question, a project in mind, or just want to say hi?",
  "contact.cta": "Open mail",
  "contact.for_copy_email": "Or copy",

  "footer.brand": "Dreck Sallow",
  "footer.summary": "Full-stack developer passionate about clean code and meaningful products.",
  "footer.mail_label": "Mail",
  "footer.copyright": "All right reserved.",
};
