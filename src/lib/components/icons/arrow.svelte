<script lang="ts">
	type Direction = 'left' | 'right';
	export let direction: Direction = 'right';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={['arrow-icon icon', `arrow-direction-${direction}`]}
	viewBox="0 0 24 24"
>
	<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
	></path>
</svg>

<style>
	.arrow-icon:is(.arrow-direction-left) {
		transform: translateX(180deg);
	}
</style>
