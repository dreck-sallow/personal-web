<script lang="ts">
	import { onMount } from 'svelte';
	import { type InternalLink, INTERNAL_LINKS } from '$lib';
	import ThemeButton from './theme-button.svelte';

	let selected = INTERNAL_LINKS[0].href;

	const onSelect = (link: InternalLink) => {
		selected = link.href;
	};

	onMount(() => {
		const path = window.location.hash;
		selected = path;
	});
</script>

<nav class="nav-bar flex-row">
	<span class="nav-bar__logo app-text-regular">{'< Dreck />'}</span>
	<ul class="nav-bar__links flex-row">
		{#each INTERNAL_LINKS as link}
			<li class="nav-bar__link-wrapper" class:selected={link.href == selected}>
				<a on:click={() => onSelect(link)} class="nav-bar__link" href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>
	<ThemeButton />
</nav>

<style>
	.nav-bar {
		width: 100%;
		height: 70px;
		position: sticky;
		top: 0;
		z-index: 100;

		justify-content: space-between;
		align-items: center;
	}

	.nav-bar__logo {
		font-size: 1.2rem;
		font-weight: 600;
		font-size: 1.5rem;
		color: hsla(var(--th-color-accent-text), 1);
	}

	.nav-bar__links {
		gap: 1rem;
		width: max-content;
		border-radius: 1000px;

		padding-inline: 0.5rem;
		padding-block: 0.4rem;

		font-size: 1rem;
		background-color: hsla(var(--th-color-on-bg), 1);
		border: 1px solid hsla(var(--th-color-accent-text), 0.3);
	}

	.nav-bar__link-wrapper {
		border-radius: 1000px;
	}

	.nav-bar__link-wrapper.selected {
		background-color: hsla(var(--th-color-bg), 1);
	}

	.nav-bar__link-wrapper:hover:not(.selected) {
		background-color: hsla(var(--th-color-bg), 0.7);
	}

	.nav-bar__link {
		border-radius: 100px;
		padding: 0.5rem 1rem;
		text-decoration: none;
		display: block;
	}

	@media (prefers-reduced-motion: no-preference) {
		.nav-bar__link-wrapper {
			transition: background-color 200ms ease;
		}
	}
</style>
