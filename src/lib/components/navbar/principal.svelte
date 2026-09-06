<script lang="ts">
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
</script>

<nav
  class="fixed bottom-10 mx-auto rounded-full overflow-hidden left-1/2 -translate-x-1/2 shadow-md shadow-primary outline-2 outline-primary"
>
  <SlidingContainer
    tag="ul"
    value={"about"}
    class="relative w-full h-full px-8 py-4 flex flex-row gap-6"
    maskClass="rounded-full bg-primary"
  >
    {#each links as { link, label, icon: Icon }}
      <SlidingOption
        tag="li"
        key={link}
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
