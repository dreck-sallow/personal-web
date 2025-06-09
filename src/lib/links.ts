export interface InternalLink {
  key: string;
  label: string;
  href: string;
}

export const INTERNAL_LINKS: InternalLink[] = [
  {
    key: "about",
    href: "",
    label: "About"
  },
  {
    key: "experience",
    href: "#experience",
    label: "Experience"
  },
  {
    key: "projects",
    href: "#projects",
    label: "Projects"
  },
  {
    key: "blog",
    href: "/blog",
    label: "Blog"
  },
]
