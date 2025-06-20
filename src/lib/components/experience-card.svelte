<script lang="ts">
	// import { CalendarIcon, CompanyIcon } from './icons';
	import TimelineCard from './timeline-card.svelte';

	type Direction = 'left' | 'right';
	type Position = 'start' | 'end' | 'center';

	export let tag: 'li' | 'div' = 'li';
	export let place: `${Direction}-${Position}` = 'right-center';

	export let title: string;
	export let date: string;

	$: position = place.split('-')[1] as Position;
	$: direction = place.split('-')[0] as Direction;
</script>

<TimelineCard {tag} {direction} {position}>
	<span slot="header">{title}</span>
	<span slot="label">{date}</span>
	<p class="app-text-regular">
		<slot />
	</p>
</TimelineCard>

<style>
</style>
