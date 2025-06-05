<script lang="ts">
	import { CalendarIcon, CompanyIcon } from './icons';

	export let tag: 'li' | 'div' = 'li';
	export let position: string;
	export let company: string;
	export let date: string;
</script>

<svelte:element this={tag} class="experience-card flex-col">
	<header class="experience-card__header">
		<h2 class="experience-card__title app-heading-text-bold">
			{position}
		</h2>

		<div class="experience-card__header-info flex-row">
			<CompanyIcon />
			<span class="experience-card__header-info__text">
				{company}
			</span>
		</div>

		<div class="experience-card__header-info flex-row">
			<CalendarIcon />
			<span class="experience-card__header-info__text">
				{date}
			</span>
		</div>
	</header>
	<div class="experience-card__description">
		<slot />
	</div>
</svelte:element>

<style>
	.experience-card {
		gap: 0.5rem;
		position: relative;
		max-width: 38rem;
		border: 1px solid hsla(var(--th-color-accent-text), 0.5);
		border-radius: 1.5rem;
		padding-inline: 2rem;
		padding-block: 2.1rem;
		background-color: hsla(var(--th-color-on-bg), 1);
	}

	.experience-card::before {
		--size: 8px;
		content: '';
		width: var(--size);
		border-radius: 1000px;
		aspect-ratio: 1;
		background-color: hsla(var(--th-color-text), 1);
		position: absolute;
		transform: translateX(calc(var(--size) * -3));
		top: 0;
		left: 0;
	}

	.experience-card::after {
		--size: 8px;
		content: '';
		width: 1px;
		background-color: hsla(var(--th-color-accent-text), 0.5);
		position: absolute;
		transform: translateX(calc(var(--size) * -3 + 4px));
		top: calc(var(--size) + 2px);
		left: 0;
		bottom: 0;
		height: calc(100% + var(--size));
	}

	.experience-card__title {
		color: hsla(var(--th-color-title-text), 1);
		font-size: 1.2rem;
		margin-bottom: 0.25rem;
	}

	.experience-card__header-info {
		color: hsla(var(--th-color-text), 0.75);
		align-items: center;
		gap: 0.275rem;
		/* FIXME: apply direct styles to svg like size, to combine with info__text*/
	}

	.experience-card__header-info__text {
		font-family: var(--th-text-font);
		font-weight: 400;
		font-style: normal;
		font-size: 0.875rem;
	}

	.experience-card__description {
		margin-top: 0.5rem;
	}
</style>
