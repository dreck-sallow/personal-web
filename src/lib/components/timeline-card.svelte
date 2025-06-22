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

	.timeline-item {
		--line-x-translate: 0;

		--line-right: initial;
		--line-left: initial;

		--margin-right: initial;
		--margin-left: initial;

		--card-margin-right: auto;
		--card-margin-left: auto;

		--indicator-direction: row;
		--indicator-x-translate: 0;
	}

	.timeline-item--left {
		--line-x-translate: 50%;

		--line-right: 0;

		--margin-right: 50%;

		--card-margin-right: 1.5rem;
		--card-margin-left: auto;

		--indicator-direction: row-reverse;
		--indicator-x-translate: calc(100% - (1.25rem / 2));
	}

	.timeline-item--right {
		--line-x-translate: -50%;

		--line-left: 0;

		--margin-left: 50%;

		--card-margin-right: auto;
		--card-margin-left: 1.5rem;

		--indicator-direction: row;
		--indicator-x-translate: calc(-100% + (1.25rem / 2));
	}

	.timeline-item::before {
		transform: translateX(var(--line-x-translate));
		left: var(--line-left);
		right: var(--line-right);
	}

	.timeline-item .timeline-item__indicator {
		--direction: var(--indicator-direction);
		right: var(--line-right);
		left: var(--line-left);
		transform: translateX(var(--indicator-x-translate)) translateY(-50%);
	}

	.timeline-item .timeline-card {
		margin-right: var(--card-margin-right);
		margin-left: var(--card-margin-left);
	}

	.timeline-item {
		margin-left: var(--margin-left);
		margin-right: var(--margin-right);
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

	@media (width <= 48rem) {
		.timeline-item--left,
		.timeline-item--right {
			--line-x-translate: -50%;

			--line-left: 0;

			--margin-left: none;
			--margin-right: none;

			--card-margin-right: 0;
			--card-margin-left: 1.5rem;

			--indicator-direction: row;
			--indicator-x-translate: calc(-100% + (1.25rem / 2));
		}
	}
</style>
