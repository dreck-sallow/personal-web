<script lang="ts">
	type Text =
		| 'title-1'
		| 'title-2'
		| 'title-3'
		| 'subtitle-1'
		| 'subtitle-2'
		| 'text'
		| 'text-sm'
		| 'text-xs';

	export let type: Text = 'text';

	$: tag = (() => {
		const tags: Record<Text, string> = {
			'title-1': 'h1',
			'title-2': 'h2',
			'title-3': 'h3',
			'subtitle-1': 'h4',
			'subtitle-2': 'h5',
			text: 'p',
			'text-sm': 'span',
			'text-xs': 'span'
		};

		return tags[type];
	})();
</script>

<svelte:element this={tag} class={['typography', type]}> <slot/> </svelte:element>

<style>
	.typography {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-style: normal;
		font-weight: var(--text-weight);
		font-size: var(--text-size);
		line-height: var(--text-height);
	}

	.title-1 {
		--text-size: 3rem;
		--text-height: 1;
		--text-weight: semibold;
	}

	.title-2 {
		--text-size: 2.25rem;
		--text-height: calc(2.5, 2.25);
		--text-weight: semibold;
	}

	.title-3 {
		--text-size: 1.875rem;
		--text-height: calc(2.25 / 1.875);
		--text-weight: semibold;
	}

	.subtitle-1 {
		--text-size: 1.5rem;
		--text-height: calc(2 / 1.5);
		--text-weight: semibold;
	}

	.subtitle-2 {
		--text-size: 1.25rem;
		--text-height: calc(1.875 / 1.25);
		--text-weight: semibold;
	}

	.text {
		--text-size: 1rem;
		--text-height: calc(1.5 / 1);
		--text-weight: normal;
	}

	.text-sm {
		--text-size: 0.875rem;
		--text-height: calc(1.25 / 0.875);
		--text-weight: normal;
	}

	.text-xs {
		--text-size: 0.75rem;
		--text-height: calc(1 / 0.75);
		--text-weight: light;
	}
</style>
