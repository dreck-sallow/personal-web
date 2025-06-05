export type Theme = "dark" | "light";

const Themes: Theme[] = ["dark", "light"];

const STORE_THEME_KEY = "user_theme";

export function getThemeFromStorage(): Theme {
  const savedTheme = localStorage.getItem(STORE_THEME_KEY);
  if (savedTheme) {
    return Themes.includes(savedTheme as Theme) ? savedTheme as Theme : "light";
  }
  return "light";
}

export function saveThemeToStorage(theme: Theme) {
  localStorage.setItem(STORE_THEME_KEY, theme);
}
