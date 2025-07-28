import type { WebContents } from "./common";
import { t as t_en } from "./en";
import { t as t_es } from "./es";

export type Lang = "en" | "es";

export function for_lang(lang: Lang): WebContents {
  if (lang == "en") {
    return t_en;
  } else if (lang == "es") {
    return t_es;
  }

  throw new Error("No language content provided");
}
