<script lang="ts">
	import { onMount } from 'svelte';
	import { type InternalLink, get_page_links } from '$lib';
	import { getLangContext } from '$lib/pages/principal';
	import ThemeButton from './theme-button.svelte';
	import LanguagePicker from './pickers/language.svelte';
	import { getNavigationContext } from '$lib/pages/principal';
	import { isCurrent, setLocation } from '$lib/pages/principal/navigation.store';
	import NavigationMenu from './navigation-menu.svelte';

	const navigationStore = getNavigationContext();

	const onSelect = (link: InternalLink) => {
		setLocation(navigationStore, { location: link.href });
	};

	onMount(() => {
		setLocation(navigationStore, { location: window.location.hash });
		return 5;
	});

	const INTERNAL_LINKS = get_page_links(getLangContext());
</script>

<nav class="navbar flex-row">
	<span class="navbar__logo app-text-regular">{'< Dreck />'}</span>

	<ul class="navbar__links">
		{#each INTERNAL_LINKS as link}
			<li class="navbar__link-wrapper" class:selected={isCurrent($navigationStore, link.href)}>
				<a onclick={() => onSelect(link)} class="navbar__link" href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>

	<div class="navbar__btn-actions flex-row">
		<LanguagePicker />
		<ThemeButton />
		<NavigationMenu />
	</div>
</nav>

<style>
	.navbar {
		height: 70px;
		width: 100%;

		position: sticky;
		top: 0;
		z-index: 100;

		align-items: center;
		justify-content: space-between;
	}

	.navbar__logo {
		font-weight: 600;
		font-size: 1.5rem;

		color: hsla(var(--theme-color-primary), 1);
	}

	.navbar__links {
		font-size: 1rem;
		padding-inline: 0.5rem;
		padding-block: 0.4rem;

		background-color: hsla(var(--theme-color-surface), 1);
		/*border: 1px solid hsla(var(--th-color-accent-text), 0.3); */
		border-radius: 1000px;

		display: flex;
		flex-direction: row;
		gap: 1rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.navbar__links .navbar__link-wrapper {
		border-radius: 1000px;
	}

	.navbar__links .navbar__link-wrapper.selected {
		background-color: hsla(var(--theme-color-primary), 0.2);
	}

	.navbar__links .navbar__link-wrapper:hover:not(.selected) {
		color: hsla(var(--theme-color-primary), 1);
	}

	.navbar__links .navbar__link {
		border-radius: 100px;
		padding: 0.5rem 1rem;

		display: block;
		text-decoration: none;
		color: hsla(var(--theme-color-on-bg), 1);
	}

	.navbar__btn-actions {
		gap: 1rem;
	}

	@media (prefers-reduced-motion: no-preference) {
		.navbar__link-wrapper {
			transition: background-color 200ms ease;
		}
	}

	@media (width <= 48rem) {
		.navbar {
			backdrop-filter: blur(2px);
		}

		.navbar__links {
			gap: 0.5rem;
		}

		.navbar__links .navbar__link {
			padding: 0.25rem 0.5rem;
		}
	}

	@media (width <= 40rem) {
		.navbar__links {
			display: none;
		}

		/*.navbar__btn-actions {
			flex-direction: row-reverse;
		}*/
	}
</style>
