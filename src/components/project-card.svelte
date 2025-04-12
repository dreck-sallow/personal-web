<script lang="ts">
	import Text from './text.svelte';

	export let imgUrl: string;
	export let imgAlt: string;
	export let title: string;

	export let className = '';
</script>

<div class={['project-card', className]}>
	<div class="project-card__content">
		<Text type="subtitle-2" className="project-card__title-content">{title}</Text>
		<slot class="project-card__description-content" />
	</div>
	<img class="project-card__image" src={imgUrl} alt={imgAlt} />
</div>

<style>
	.project-card {
		background-color: var(--bg-accent);
		overflow: hidden;
		width: 300px;
		min-width: 300px;
		padding-inline: 1rem;
		padding-block: 1rem;
	}

	.project-card__image {
		aspect-ratio: 16 / 9;
		width: calc(300px - 2rem);
	}

	.project-card__content {
		margin-bottom: 1rem;
	}

	.project-card__content :global(.project-card__title-content) {
		font-weight: 600;
		margin-bottom: 0.25rem;
	}
</style>
