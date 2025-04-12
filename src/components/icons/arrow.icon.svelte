<script lang="ts">
	type Direction = 'up' | 'down' | 'left' | 'right';
	export let direction: Direction = 'right';

	$: directionClass = `icon-arrow--${direction}`;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	class={['icon', 'icon-arrow', directionClass]}
>
	<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
	></path>
</svg>

<style>
	.icon-arrow {
		--arrow-rotate: 0;
		transform: rotate(var(--arrow-rotate));
	}

	.icon-arrow--up {
		--arrow-rotate: -90deg;
	}

	.icon-arrow--right {
		--arrow-rotate: 0;
	}

	.icon-arrow--left {
		--arrow-rotate: 180deg;
	}

	.icon-arrow--down {
		--arrow-rotate: 90deg;
	}
</style>
