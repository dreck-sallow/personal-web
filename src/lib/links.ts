import { for_lang, type Lang } from "./langs";

export interface InternalLink {
  label: string;
  href: string;
}

// export const INTERNAL_LINKS: InternalLink[] = [
//   {
//     href: "#about",
//     label: "About"
//   },
//   {
//     href: "#experience",
//     label: "Experience"
//   },
//   {
//     href: "#projects",
//     label: "Projects"
//   },
//   {
//     href: "#skills",
//     label: "Skills"
//   },
// ];

export function get_page_links(lang: Lang): InternalLink[] {
  const t = for_lang(lang);

  return [
    {
      href: "#about",
      label: t["links.about"]
    },
    {
      href: "#experience",
      label: t["links.experience"]
    },
    {
      href: "#projects",
      label: t["links.projects"]
    },
    {
      href: "#skills",
      label: t["links.skills"]
    },
  ]

}
