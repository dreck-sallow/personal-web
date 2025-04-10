<script lang="ts">
	// import Text from './text.svelte';
	export let label: string | undefined = undefined;
</script>

<span class="tag">
	<slot>
		{label}
	</slot>
</span>

<style>
	.tag {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		font-weight: var(--text-weight);
		font-size: var(--text-size);
		line-height: var(--text-height);
	}

	.tag {
		padding-inline: 1em;
		padding-block: 0.4em;
		outline: 1px solid var(--text);
		border-radius: 1000px;
		display: block;
	}

	.tag {
		--text-size: 0.75rem;
		--text-height: calc(1 / 0.75);
		--text-weight: light;
	}
</style>
