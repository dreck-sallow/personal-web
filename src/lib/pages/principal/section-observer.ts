import { getNavigationContext } from ".";
import { setLocation } from "./navigation.store";

export const OBSERVED_SELECTOR = "section-observed";

export function startSectionsObserver() {
  const navigationStore = getNavigationContext();

  function cb(entries: IntersectionObserverEntry[], _observer: IntersectionObserver) {
    entries.forEach((entry) => {
      const location = (entry.target as HTMLElement).dataset["location"];

      if (entry.isIntersecting && location) {
        console.log("set location: ", location);
        setLocation(navigationStore, { location });
      }
    });
  }

  const ob = new IntersectionObserver(cb, {
    rootMargin: "0px",
    threshold: 0.2
  });

  const pageSections = document.querySelectorAll(`.${OBSERVED_SELECTOR}`);

  pageSections.forEach((section) => {
    ob.observe(section);
  });
}
