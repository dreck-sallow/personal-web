<script lang="ts">
	import { onMount } from 'svelte';

	type ThemeType = 'dark' | 'light' | 'auto';
	let theme: ThemeType = 'light';

	const applyTheme = (theme: ThemeType) => {
		// Set the theme when
		document.firstElementChild?.setAttribute('data-theme', theme);
		document.querySelector('#theme-toggle')?.setAttribute('data-label', theme);
	};

	const onClickToggle = () => {
		theme = theme == 'dark' ? 'light' : 'dark';
		applyTheme(theme);
	};

	onMount(() => {
		window
			.matchMedia('(prefers-color-schema: dark)')
			.addEventListener('change', ({ matches: isDark }) => {
				theme = isDark ? 'dark' : 'light';
				applyTheme(theme);
			});
	});
</script>

<button
	on:click={onClickToggle}
	class="theme-toggle"
	id="theme-toggle"
	aria-label={theme}
	aria-live="polite"
	title="Toglles light and dark"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		class="theme-toggle__icon"
	>
		<clipPath id="theme-toggle__expand__cutout">
			<path d="M0-11h25a1 1 0 0017 13v30H0Z" />
		</clipPath>

		<g clip-path="url(#theme-toggle__expand__cutout)">
			<circle cx="12" cy="12" r="6" />
			<path
				d="
					M 12,1 L 12,3 
					M 12,21 L 12,23 
					
					M 4.22,4.22 L 5.64,5.64
					M 18.36,18.36 L 19.78,19.78
					
					M 1,12 L 3,12
					M 21,12 L 23,12

					M 4.22,19.78 L 5.64,18.36
					M 18.36,5.64 L 19.78,4.22
				"
				stroke="currentColor"
			/>
		</g>
	</svg>
</button>

<style>
	.theme-toggle {
		--btn-toggle-size: 24px;
		inline-size: var(--btn-toggle-size);
		block-size: var(--btn-toggle-size);
		cursor: pointer;
		touch-action: manipulation;
	}

	/*[aria-label='dark'] #theme-toggle__expand__cutout path {
		d: path('M 12 6 A 6 6 0 1 0 18 12 A 4 4 0 0 1 12 6 Z');
	}*/

	:global([data-theme='dark']) #theme-toggle__expand__cutout path {
		d: path('M 0 0 h 14 a1 1 0 0017 13 v 30 H 0 Z');
	}

	svg {
		inline-size: 100%;
		block-size: 100%;
	}

	.theme-toggle :is(g path, g circle) {
		transform-origin: center;
	}

	:global([data-theme='dark']) g path {
		opacity: 0;
	}

	:global([data-theme='dark']) g circle {
		transform: translateX(-7px);
	}

	@media (prefers-reduced-motion: no-preference) {
		#theme-toggle__expand__cutout path {
			transition-property: transform, d;
			transition-duration: 0.5s;
		}

		:global([data-theme='dark']) #theme-toggle__expand__cutout path {
			animation-delay: 1s;
			transition-timing-function: cubic-bezier(0, 0, 0, 1.25);
		}

		.theme-toggle__icon g circle {
			transition: transform 0.5s cubic-bezier(0.25, 0, 0.3, 1);
		}

		.theme-toggle__icon g path {
			transition:
				transform 0.5s cubic-bezier(0.25, 0, 0.3, 1),
				opacity 0.5s cubic-bezier(0.25, 0, 0.3, 1);
		}

		:global([data-theme='dark']) g path {
			transform: rotateX(-25deg);
			transition-duration: 0.15s;
		}

		:global([data-theme='dark']) g circle {
			transform: scale(1.4);
			transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
			transition-duration: 0.25s;
		}
	}
</style>
