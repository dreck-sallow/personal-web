import { getContext, setContext } from "svelte";
import { createNavigationStore, type NavigationLocation, type NavigationStore } from "./navigation.store";

export interface PageContextParams {
  /**
   * set the default navigation location
   */
  navigationLocation: NavigationLocation
}

export function setPageContext(params: PageContextParams) {
  setNavigationContext(createNavigationStore(params.navigationLocation));
};

export const NAVIGATION_CONTEXT_KEY = "NAVIGATION";

export function setNavigationContext(store: NavigationStore) {
  setContext(NAVIGATION_CONTEXT_KEY, store);
  return store;
};

export function getNavigationContext() {
  return getContext<NavigationStore>(NAVIGATION_CONTEXT_KEY);
};
