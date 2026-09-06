<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
  import { setSlidingState, SlidingState } from "./sliding.svelte";
  import { fade } from "svelte/transition";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet<[]>;
    tag: keyof SvelteHTMLElements;
    value?: string | null;
    maskClass?: string;
  }

  const { children, tag, value, maskClass, ...rest }: Props = $props();

  const slidingState = setSlidingState(new SlidingState());
  let maskEl = $state<HTMLDivElement>();
  let containerEl = $state<HTMLElement>();

  $effect(() => {
    slidingState.setSelected(value ?? null);
  });

  $effect(() => {
    void slidingState.selected;
    void slidingState.candidate;
    const current = slidingState.current;

    if (current && containerEl && maskEl) {
      const el = containerEl.querySelector(`[data-option-key="${current}"]`);
      if (!el) return;
      const optionRect = el.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      maskEl.style.width = optionRect.width + "px";
      maskEl.style.height = optionRect.height + "px";
      maskEl.style.translate = `${optionRect.left - containerRect.left}px ${optionRect.top - containerRect.top}px`;
    } else if (maskEl) {
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
  {#if slidingState.current}
    <div
      bind:this={maskEl}
      transition:fade={{ delay: 250, duration: 200 }}
      class={[
        maskClass,
        "absolute left-0 top-0 pointer-events-none transition-transfom duration-300",
      ]}
    ></div>
  {/if}

  {@render children()}
</svelte:element>
