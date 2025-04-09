<script lang="ts">
	// type ButtonType = 'link' | 'button';
	export let type: 'link' | 'button' = 'button';
	export let href: string | undefined = undefined;
	export let size: 'md' | 'sm' | 'lg' = 'md';

	$: sizeClass = `btn--${size}`;
	$: element = (type == 'link' ? 'a' : 'button') as 'a' | 'button';
</script>

<svelte:element
	this={element}
	class={['btn', sizeClass]}
	href={type == 'link' ? href : undefined}
	target="_blank"
>
	<slot />
</svelte:element>

<style>
	.btn {
		--btn-bg: var(--text);
		--btn-text: var(--bg);
		--btn-padding-x: 0;
		--btn-padding-y: 0;
	}

	.btn {
		border-radius: 1000px;
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 0.25em;
		justify-content: space-between;

		background-color: var(--btn-bg);
		color: var(--btn-text);
		padding-inline: var(--btn-padding-x);
		padding-block: var(--btn-padding-y);
		font-size: var(--btn-text-size);

		cursor: pointer;
	}

	.btn--md {
		--btn-padding-x: 1.5em;
		--btn-padding-y: 0.5em;
	}

	.btn--sm {
		--btn-padding-x: 1em;
		--btn-padding-y: 0.25em;
	}

	/* Animations */
	.btn:hover {
		transform: translateY(-2px);
	}

	@media (prefers-reduced-motion: no-preference) {
		.btn {
			transition: transform 300ms ease;
		}
	}
</style>
