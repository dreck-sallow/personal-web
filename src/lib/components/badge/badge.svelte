<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes, HTMLAttributes } from "svelte/elements";

  type TagProps = {
    href?: string;
    prepend?: Snippet;
    append?: Snippet;
    children?: Snippet;
    class?: string;
  };

  type Props = TagProps &
    Omit<HTMLAnchorAttributes, keyof TagProps | "href"> &
    Omit<HTMLAttributes<HTMLSpanElement>, keyof TagProps>;

  let {
    href,
    prepend,
    append,
    children,
    class: className = "",
    ...rest
  }: Props = $props();

  const classes = $derived(
    [
      "inline-flex w-fit items-center gap-1.5 rounded-full bg-txt/10 px-3 py-1.5 font-mono text-xs leading-none text-txt-soft/75",
      href ? "transition-colors hover:text-primary" : "",
      className,
    ]
      .filter(Boolean)
      .join(" "),
  );
</script>

{#if href}
  <a {href} class={classes} {...rest}>
    {#if prepend}
      {@render prepend()}
    {/if}

    {#if children}
      {@render children()}
    {/if}

    {#if append}
      {@render append()}
    {/if}
  </a>
{:else}
  <span class={classes} {...rest}>
    {#if prepend}
      {@render prepend()}
    {/if}

    {#if children}
      {@render children()}
    {/if}

    {#if append}
      {@render append()}
    {/if}
  </span>
{/if}
