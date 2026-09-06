import { createContext } from "svelte";

export class SlidingState<T = string> {
  #selected = $state<T | null>(null);
  #candidate = $state<T | null>(null);

  constructor(initialState?: T | null) {
    this.#selected = initialState ?? null;
  }

  get selected() {
    return this.#selected;
  }

  get candidate() {
    return this.#candidate;
  }

  /* Get the candidate or the current selected  */
  get current() {
    return this.candidate || this.selected;
  }

  setSelected(value: T) {
    this.#selected = value;
    this.#candidate = null;
  }

  setCandidate(value: T | null) {
    this.#candidate = value;
  }
}

export const [getSlidingState, setSlidingState] = createContext<SlidingState>();
