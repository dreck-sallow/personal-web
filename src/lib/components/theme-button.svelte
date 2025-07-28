<script lang="ts">
	import { getThemeFromStorage, type Theme } from '$lib/logic/theme';
	import { onMount } from 'svelte';

	let theme: Theme = 'light';

	function getThemeFromDocument(): Theme {
		const _theme = (document.firstElementChild as HTMLElement).dataset['theme'] as
			| Theme
			| undefined;
		return _theme ?? 'light';
	}

	function applyTheme(_theme: Theme) {
		document.firstElementChild?.setAttribute('data-theme', _theme);
		document.querySelector('#theme-toggle')?.setAttribute('data-label', _theme);
		localStorage.setItem('theme', _theme);
		theme = _theme;
	}

	function onClickToggle() {
		let _theme = getThemeFromDocument();
		_theme = _theme == 'dark' ? 'light' : 'dark';
		applyTheme(_theme as Theme);
	}

	onMount(() => {
		applyTheme(getThemeFromStorage());
	});
</script>

<button
	class="theme-button flex-center"
	aria-label={theme}
	aria-live="polite"
	title="Toggles light and dark"
	on:click={onClickToggle}
>
	{#if theme == 'light'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			class="theme-button__icon-light"
		>
			<path
				d="M6.99 12c0 2.76 2.25 5.01 5.01 5.01s5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12M12 8.99c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01S8.99 13.66 8.99 12 10.34 8.99 12 8.99M13 19h-2v2h2v-2M11 5h2V3h-2v2M3 11h2v2H3zM19 11h2v2h-2zM4.93 17.66l.71.7.7.71.71-.71.71-.7-.71-.71-.71-.71-.7.71zM17.66 4.93l-.71.71-.71.7.71.71.71.71.7-.71.71-.71-.71-.7zM4.93 6.34l.71.71.7.71.71-.71.71-.71-.71-.7-.71-.71-.7.71zM17.66 19.07l.7-.71.71-.7-.71-.71-.7-.71-.71.71-.71.71.71.7z"
			></path>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			class="theme-button__icon-dark"
		>
			<path
				d="m12.2,22c4.53,0,8.45-2.91,9.76-7.24.11-.35.01-.74-.25-1-.26-.26-.64-.36-1-.25-.78.23-1.58.35-2.38.35-4.52,0-8.2-3.68-8.2-8.2,0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25C4.91,3.35,2,7.28,2,11.8c0,5.62,4.57,10.2,10.2,10.2ZM8.18,4.65c-.03.34-.05.68-.05,1.02,0,5.62,4.57,10.2,10.2,10.2.34,0,.68-.02,1.02-.05-1.42,2.56-4.12,4.18-7.15,4.18-4.52,0-8.2-3.68-8.2-8.2,0-3.03,1.63-5.73,4.18-7.15Z"
			></path>
		</svg>
	{/if}
</button>

<style>
	.theme-button {
		--size: 3.1rem;
		inline-size: var(--size);
		block-size: var(--size);
		cursor: pointer;
	}

	.theme-button {
		padding: 0.4rem;
		aspect-ratio: 1;
		border-radius: 1000px;

		background-color: hsla(var(--th-color-on-bg), 1);
	}

	.theme-button__icon-light,
	.theme-button__icon-dark {
		width: 1.5rem;
		aspect-ratio: 1;
	}
</style>
