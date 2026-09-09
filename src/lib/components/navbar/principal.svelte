<script lang="ts">
  import { page } from "$app/state";
  import SlidingContainer from "../highlight/sliding/sliding-container.svelte";
  import SlidingOption from "../highlight/sliding/sliding-option.svelte";

  import MilestoneIcon from "@lucide/svelte/icons/milestone";
  import ShapesIcon from "@lucide/svelte/icons/shapes";
  import AboutIcon from "@lucide/svelte/icons/user-round";

  const links = [
    { label: "About", link: "/", icon: AboutIcon, key: "about" },
    { label: "Experience", link: "/jobs", icon: MilestoneIcon, key: "jobs" },
    { label: "Projects", link: "/projects", icon: ShapesIcon, key: "projects" },
  ];

  const matchesRoute = (pathname: string, route: string) => {
    if (route === "/") return pathname === route;
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  const activeLinkKey = $derived(
    links.find(({ link }) => matchesRoute(page.url.pathname, link))?.key ?? null,
  );
</script>

<nav
  class="fixed bottom-10 mx-auto rounded-full overflow-hidden left-1/2 -translate-x-1/2 shadow-md shadow-primary outline-2 outline-primary bg-background/40 backdrop-blur-xs"
>
  <SlidingContainer
    tag="ul"
    value={activeLinkKey}
    class="relative w-full h-full px-8 py-4 flex flex-row"
    maskClass="rounded-full bg-primary"
  >
    {#each links as { link, label, icon: Icon, key }}
      <SlidingOption
        tag="li"
        key={key}
        class={[
          "rounded-full transition-colors duration-300",
          "text-txt-principal",
        ]}
        selectedClass="!text-background"
      >
        <a
          class="relative z-10 w-full h-full px-8 py-4 block font-normal flex items-center justify-center gap-4 font-semibold"
          tabindex="-1"
          href={link}
        >
          <Icon />

          <span> {label}</span>
        </a>
      </SlidingOption>
    {/each}
  </SlidingContainer>
</nav>
