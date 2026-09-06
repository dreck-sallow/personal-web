<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
  import { setSlidingState, SlidingState } from "./sliding.svelte";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet<[]>;
    tag: keyof SvelteHTMLElements;
    value?: string | null;
    maskClass?: string;
  }

  const { children, tag, value, maskClass, ...rest }: Props = $props();

  const state = setSlidingState(new SlidingState(value));
  let maskEl: HTMLDivElement;
  let containerEl: HTMLElement;

  $effect(() => {
    void state.selected;
    void state.candidate;
    const current = state.current;

    if (current) {
      const el = containerEl.querySelector(`[data-option-key="${current}"]`);
      if (!el) return;
      const optionRect = el.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      maskEl.style.width = optionRect.width + "px";
      maskEl.style.height = optionRect.height + "px";
      maskEl.style.translate = `${optionRect.left - containerRect.left}px ${optionRect.top - containerRect.top}px`;
    } else {
      maskEl.style.display = "none";
    }
  });
</script>

<svelte:element
  this={tag}
  {...rest}
  role="listbox"
  tabindex="0"
  bind:this={containerEl}
>
  {#if state.current}
    <div
      bind:this={maskEl}
      class={[
        maskClass,
        "absolute left-0 top-0 transition-transform duration-200 ease-out",
      ]}
    ></div>
  {/if}

  {@render children()}
</svelte:element>
