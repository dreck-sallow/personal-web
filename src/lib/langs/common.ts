// Define the web page content for translations
export interface WebContents {
  "page.head.title": string;
  "page.head.description": string;

  "links.about": string;
  "links.experience": string;
  "links.projects": string;
  "links.skills": string;

  // About section contents
  "about.greeting": string;
  "about.presentation": string;
  "about.primary_description": string;
  "about.secondary_description": string;

  "experience": {
    "title": string;
    "summary": string;

    "arisale": ExperienceContent
    "liquid": ExperienceContent
    "kimche": ExperienceContent
    "henry": ExperienceContent
  }

  "projects": {
    "title": string;
    "summary": string;

    "quipp": ProjectContent
    "flix": ProjectContent
    "melody": ProjectContent
    "flow": ProjectContent
  }

  "skills": {
    "title": string;
    "summary": string;

    "frontend.title": string;
    "backend.title": string;
    "terminal.title": string;
  }


  "contact.title": string;
  "contact.cta": string;
  "contact.for_copy_email": string;


  "footer.brand": string;
  "footer.summary": string;
  "footer.mail_label": string;
  "footer.copyright": string;
}

export interface ExperienceContent {
  role: string;
  date: string;
  desc_html: string;
}

export interface ProjectContent {
  name: string;
  description: string;
  // github: string;
  // web?: string;
}
