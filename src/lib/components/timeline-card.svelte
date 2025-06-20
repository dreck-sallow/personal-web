<script lang="ts">
	export let tag: 'li' | 'div' = 'li';
	export let direction: 'left' | 'right' = 'right';
	export let position: 'start' | 'end' | 'center' = 'center';
</script>

<svelte:element
	this={tag}
	class={['timeline-item', `timeline-item--${direction}`, `timeline-item--${position}`]}
>
	<div class="timeline-item__indicator">
		<div class="timeline-item__label">
			<slot name="label" />
		</div>

		<div class="timeline-item__point"></div>
	</div>

	<div class="timeline-card">
		<header class="timeline-card__header">
			<slot name="header" />
		</header>

		<div class="timeline-card__content">
			<slot />
		</div>
	</div>
</svelte:element>

<style>
	.timeline-item {
		--raw-color: var(--th-color-accent-text);
		--color: hsla(var(--raw-color), 1);

		position: relative;
	}

	.timeline-item::before {
		--between-space: 1rem;
		content: '';
		width: 2px;
		background-color: hsla(var(--raw-color), 0.5);
		position: absolute;
	}

	.timeline-item__indicator {
		--direction: row;
		display: flex;
		flex-direction: var(--direction);
		gap: 1rem;
		align-items: center;
		justify-content: space-between;

		position: absolute;
		top: 50%;

		width: max-content;
	}

	.timeline-item__indicator .timeline-item__label {
		border-radius: 0.5rem;

		padding-inline: 1rem;
		padding-block: 0.35rem;

		background-color: hsla(var(--raw-color), 0.25);
	}

	.timeline-item__indicator .timeline-item__point {
		width: 1.25rem;
		aspect-ratio: 1;

		border-radius: 1000px;

		border: calc(1.25rem / 4) solid var(--color);
		background-color: hsla(var(--th-color-bg), 1);
	}

	.timeline-card {
		border-radius: 0.5rem;
		overflow: hidden;

		border: 1px solid var(--color);

		max-width: 35rem;
	}

	.timeline-card .timeline-card__header,
	.timeline-card .timeline-card__content {
		padding-inline: 1.5rem;
		padding-block: 0.75rem;
	}

	.timeline-card .timeline-card__header {
		background-color: var(--color);
		color: hsla(var(--th-color-bg), 1);

		font-size: 1.1rem;
		font-weight: 500;
	}

	/*  Add timeline styles for right */

	/* DEFULT */
	.timeline-item--right::before {
		transform: translateX(-50%);
		left: 0;
	}

	.timeline-item--left::before {
		transform: translateX(50%);
		right: 0;
	}

	.timeline-item--right {
		margin-left: 50%;
	}

	.timeline-item--left {
		margin-right: 50%;
	}

	.timeline-item--start::before {
		top: 50%;
		height: calc(50% + var(--between-space));
	}

	.timeline-item--end::before {
		top: 0;
		height: calc(50%);
	}

	.timeline-item--center::before {
		top: 0;
		height: calc(100% + var(--between-space));
	}

	.timeline-item--left .timeline-card {
		margin-right: 1.5rem;
		margin-left: auto;
	}

	.timeline-item--right .timeline-card {
		margin-left: 1.5rem;
		margin-right: auto;
	}

	.timeline-item--left .timeline-item__indicator {
		--direction: row-reverse;
		right: 0;
		transform: translateX(calc(100% - (1.25rem / 2))) translateY(-50%);
	}

	.timeline-item--right .timeline-item__indicator {
		left: 0;
		transform: translateX(calc(-100% + (1.25rem / 2))) translateY(-50%);
	}
</style>
