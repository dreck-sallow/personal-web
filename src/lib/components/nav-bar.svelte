<script lang="ts">
	import { onMount } from 'svelte';
	import { type InternalLink, INTERNAL_LINKS } from '$lib';
	import ThemeButton from './theme-button.svelte';
	import { getNavigationContext } from '$lib/pages/principal';
	import { isCurrent, setLocation } from '$lib/pages/principal/navigation.store';

	const navigationStore = getNavigationContext();

	const onSelect = (link: InternalLink) => {
		setLocation(navigationStore, { location: link.href });
	};

	// window.location.hash = $navigationStore.location;

	onMount(() => {
		setLocation(navigationStore, { location: window.location.hash });
	});
</script>

<nav class="navbar flex-row">
	<span class="navbar__logo app-text-regular">{'< Dreck />'}</span>

	<ul class="navbar__links flex-row">
		{#each INTERNAL_LINKS as link}
			<li class="navbar__link-wrapper" class:selected={isCurrent($navigationStore, link.href)}>
				<a onclick={() => onSelect(link)} class="navbar__link" href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>

	<ThemeButton />
</nav>

<style>
	.navbar {
		width: 100%;
		height: 70px;
		position: sticky;
		top: 0;
		z-index: 100;

		justify-content: space-between;
		align-items: center;
	}

	.navbar__logo {
		font-size: 1.2rem;
		font-weight: 600;
		font-size: 1.5rem;
		color: hsla(var(--th-color-accent-text), 1);
	}

	.navbar__links {
		gap: 1rem;
		width: max-content;
		border-radius: 1000px;

		padding-inline: 0.5rem;
		padding-block: 0.4rem;

		font-size: 1rem;
		background-color: hsla(var(--th-color-on-bg), 1);
		border: 1px solid hsla(var(--th-color-accent-text), 0.3);
	}

	.navbar__link-wrapper {
		border-radius: 1000px;
	}

	.navbar__link-wrapper.selected {
		background-color: hsla(var(--th-color-bg), 1);
	}

	.navbar__link-wrapper:hover:not(.selected) {
		background-color: hsla(var(--th-color-bg), 0.7);
	}

	.navbar__link {
		border-radius: 100px;
		padding: 0.5rem 1rem;
		text-decoration: none;
		display: block;
	}

	@media (prefers-reduced-motion: no-preference) {
		.navbar__link-wrapper {
			transition: background-color 200ms ease;
		}
	}
</style>
