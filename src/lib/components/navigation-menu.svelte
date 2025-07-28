<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { InternalLink } from '$lib/links';
	import { get_page_links } from '$lib/links';
	import { getLangContext, getNavigationContext } from '$lib/pages/principal';
	import { isCurrent, setLocation } from '$lib/pages/principal/navigation.store';
	import { MenuIcon } from './icons';

	let open = false;

	const navigationStore = getNavigationContext();

	const onSelect = (link: InternalLink) => {
		setLocation(navigationStore, { location: link.href });
		open = false;
	};

	const INTERNAL_LINKS = get_page_links(getLangContext());
</script>

<div class="navigation-menu">
	<slot name="trigger">
		<button
			class="navigation-menu__trigger"
			aria-label="Toggle menu"
			onclick={() => (open = !open)}
		>
			<MenuIcon />
		</button>
	</slot>

	{#if open}
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<ul
			transition:scale={{ duration: 240 }}
			class="navigation-menu__links flex-col"
			onkeydown={() => {}}
		>
			{#each INTERNAL_LINKS as link}
				<li>
					<a
						class:selected={isCurrent($navigationStore, link.href)}
						onclick={() => onSelect(link)}
						class="navigation-menu__link"
						href={link.href}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.navigation-menu {
		position: relative;
	}

	.navigation-menu__trigger {
		--size: 3.1rem;
		inline-size: var(--size);
		block-size: var(--size);
		display: none;
		cursor: pointer;

		padding: 0.4rem;
		aspect-ratio: 1;
		border-radius: 1000px;

		align-items: center;
		justify-content: center;

		background-color: hsla(var(--th-color-on-bg), 1);
	}

	.navigation-menu__trigger :global(.icon) {
		width: 2rem;
		aspect-ratio: 1;
	}

	.navigation-menu__links {
		border-radius: 1rem;
		padding: 1rem;

		gap: 0.5rem;

		position: absolute;
		bottom: -0.2rem;
		right: 0;

		transform: translateY(100%);

		background-color: hsla(var(--th-color-on-bg), 1);
	}

	.navigation-menu__links .navigation-menu__link {
		border-radius: 1000px;
		padding-inline: 1.25rem;
		padding-block: 0.4rem;
	}

	.navigation-menu__links .navigation-menu__link:is(.selected) {
		background-color: hsla(var(--th-color-bg), 1);
	}

	@media (width <= 40rem) {
		.navigation-menu__trigger {
			display: flex;
		}
	}
</style>
