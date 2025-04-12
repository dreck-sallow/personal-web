<script lang="ts">
	export let type: 'link' | 'button' = 'button';
	export let href: string | undefined = undefined;

	$: element = (type == 'link' ? 'a' : 'button') as 'a' | 'button';
</script>

<svelte:element
	this={element}
	class={['icon-btn']}
	href={type == 'link' ? href : undefined}
	target="_blank"
	on:click
	role="button"
	tabindex="0"
>
	<slot />
</svelte:element>

<style>
	.icon-btn {
		--btn-bg: var(--bg);
		--btn-text: var(--text);
		--btn-padding: 0;
		--btn-padding: 0;
	}

	.icon-btn {
		border-radius: 1000px;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;

		background-color: var(--btn-bg);
		color: var(--btn-text);
		padding-inline: var(--btn-padding);
		padding-block: var(--btn-padding);
		cursor: pointer;
	}

	.icon-btn {
		border: 1px solid var(--text);
		--btn-padding: 0.25rem;
	}

	.icon-btn :global(.icon) {
		width: 1rem;
		height: 1rem;
	}

	.icon-btn:hover {
		opacity: 0.8;
	}
</style>
