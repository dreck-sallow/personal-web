<script lang="ts">
	import { INTERNAL_LINKS } from '$lib';
	import ThemeButton from './theme-button.svelte';
</script>

<nav class="nav-bar flex-row">
	<span class="nav-bar__logo app-text-regular">Dreck</span>
	<ul class="nav-bar__links flex-row">
		{#each INTERNAL_LINKS as link}
			<li class="nav-bar__link-wrapper">
				<a class="nav-bar__link" href={link.href}>{link.label}</a>
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
		padding-block: 0.9rem;

		font-size: 1rem;
		background-color: hsla(var(--th-color-on-bg), 1);
	}

	.nav-bar__link {
		border-radius: 100px;
		padding: 0.5rem 1rem;
		text-decoration: none;
	}

	.nav-bar__link:hover {
		background-color: hsla(var(--th-color-bg), 1);
	}
</style>
