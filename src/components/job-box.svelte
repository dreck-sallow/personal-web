<script>
	import Text from './text.svelte';
	export let title = '';
	export let date = '';
</script>

<div class="job-box" role="listitem">
	<header class="job-box__header">
		<Text className="job-box__title" type="subtitle-2">{title}</Text>
		<Text className="job-box__date" type="text-sm">{date}</Text>
	</header>
	<slot />
</div>

<style>
	.job-box {
		position: relative;
		padding-block-end: 1.5rem;
		padding-block-start: 0;
		padding-inline-end: 1rem;
		padding-inline-start: 2rem;
	}

	.job-box {
		--decorator-width: 0.5rem;
		--decorator-top: 0.70rem;
	}

	.job-box::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 1px;
		transform: translateX(-1px);
		height: calc(100% - var(--decorator-top));

		background-color: var(--bg-accent);
	}

	.job-box::after {
		content: '';
		margin-top: var(--decorator-top);
		aspect-ratio: 1;
		border-radius: 1000px;
		position: absolute;
		top: 0;
		left: 0;

		background-color: var(--bg-accent);
		width: var(--decorator-width);
		transform: translateX(calc(-1 * var(--decorator-width) / 2));
	}

	.job-box :global(.job-box__title) {
		font-weight: 700;
	}

	.job-box :global(.job-box__date) {
		font-weight: 400;
		opacity: 0.6;

		margin-bottom: 0.5rem;
	}
</style>
