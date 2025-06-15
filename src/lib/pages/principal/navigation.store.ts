import { writable, type Writable } from "svelte/store";

export interface NavigationLocation {
  location: string;
}

export type NavigationStore = Writable<NavigationLocation>;

export function createNavigationStore(defaultLocation: NavigationLocation): NavigationStore {
  const store = writable(defaultLocation);
  return store;
}

export function setLocation(store: NavigationStore, location: NavigationLocation): void {
  store.set(location);
  history.pushState(null, "", location.location);
}

export function isCurrent(innerStore: NavigationLocation, location: NavigationLocation | NavigationLocation["location"]): boolean {
  if (typeof location === "string") {
    return innerStore.location === location;
  }

  return innerStore.location === location.location;
}
