<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggleButton from './theme-toggle-button.svelte';

	const links = [
		{
			href: '#',
			label: 'Overview'
		},
		{
			href: '#experience',
			label: 'Experience'
		},
		{
			href: '#projects',
			label: 'Projects'
		},
		{
			href: '#contact',
			label: 'Contact'
		}
	];

	let selectedLink = undefined as string | undefined;

	const onClickSelect = (link: string) => {
		selectedLink = link.length == 0 ? '#' : link;
	};

	onMount(() => {
		// TODO: add focus for paths like: /blog
		// console.log('window.location.hash: ', window.location.hash);
		onClickSelect('');
		window.addEventListener('hashchange', () => {
			onClickSelect(window.location.hash);
		});
	});
</script>

<nav class="nav-bar">
	<ul class="nav-bar__links">
		{#each links as link}
			<li class="nav-bar__link-item">
				<a
					class="nav-bar__link"
					on:click={() => onClickSelect(link.href)}
					class:nav-bar__link--selected={selectedLink == link.href}
					href={link.href}>{link.label}</a
				>
			</li>
		{/each}

		<li class="nav-bar__theme">
			<ThemeToggleButton />
		</li>
	</ul>
</nav>

<style>
	.nav-bar {
		width: 100%;
		height: 80px;
		margin: auto;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-bar__links {
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 1000px;
		padding-inline: 0.5em;
		padding-block: 0.4em;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
		z-index: 10;
		/*box-shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08);*/
	}

	.nav-bar__link {
		display: block;
		padding-block: 0.2rem;
		padding-inline: 0.7em;
		border-radius: 1000px;
		font-size: 0.9rem;
	}

	.nav-bar__link:hover {
		opacity: 0.8;
	}

	.nav-bar__link--selected,
	.nav-bar__link:hover {
		background-color: var(--border);
	}

	.nav-bar__theme {
		height: 24px;
	}

	@media (prefers-reduced-motion: no-preference) {
		.nav-bar__link {
			transition: background-color 0.3s ease;
		}
	}
</style>
