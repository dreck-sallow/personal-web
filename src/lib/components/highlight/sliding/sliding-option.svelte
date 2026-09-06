<script lang="ts">
  import type { Snippet } from "svelte";
  import type { SvelteHTMLElements, HTMLAttributes } from "svelte/elements";
  import { getSlidingState } from "./sliding.svelte";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet<[]>;
    tag: keyof SvelteHTMLElements;
    key: string;
    disabled?: boolean;
    selectedClass?: string;
  }

  const {
    children,
    tag,
    key,
    disabled,
    class: className,
    selectedClass,
    ...rest
  }: Props = $props();

  const state = getSlidingState();
</script>

<svelte:element
  this={tag}
  {...rest}
  class={[className, state.current === key && selectedClass]}
  role="option"
  tabindex="0"
  aria-selected={disabled
    ? "false"
    : (String(state.current === key) as "true" | "false")}
  aria-disabled={disabled}
  data-option-key={key}
  onpointerenter={() => {
    state.setCandidate(key);
  }}
  onpointerleave={() => {
    state.setCandidate(null);
  }}
>
  {@render children()}
</svelte:element>
