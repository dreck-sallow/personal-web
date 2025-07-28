<script lang="ts">
	import { getLangContext } from '$lib/pages/principal';

	const LANGUAGES = {
		en: {
			path: '/',
			label: 'English'
		},
		es: {
			path: '/es',
			label: 'Español'
		}
	};

	const lang = getLangContext();

	const currentLanguage = LANGUAGES[lang === 'en' ? 'es' : 'en'];
</script>

<a class="language-picker" href={currentLanguage.path} aria-label="Change language">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		class="icon"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="m5 8 6 6" />
		<path d="m4 14 6-6 2-3" />
		<path d="M2 5h12" />
		<path d="M7 2h1" />
		<path d="m22 22-5-10-5 10" />
		<path d="M14 18h6" />
	</svg>
	<span>{currentLanguage.label}</span>
</a>

<style>
	.language-picker {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		padding-inline: 1.2rem;
		padding-block: 0.4rem;

		border-radius: 1000px;
		font-size: 0.85rem;

		background-color: hsla(var(--th-color-on-bg), 1);
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.language-picker .icon {
		stroke-width: 1px;
		fill: none;
	}
</style>
