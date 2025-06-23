<script lang="ts">
	import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
	import { ArrowIcon, SocialIcon, WorldIcon } from './icons';

	export let src: EnhancedImgAttributes['src'];
	export let isGif: boolean = false;
	export let imgAlt: string;
	export let name: string;

	export let githubLink: string | undefined = undefined;
	export let websiteLink: string | undefined = undefined;
</script>

<div class="project-card">
	{#if isGif}
		<img class="project-card__image" src={src as string} alt={imgAlt} />
	{:else}
		<enhanced:img class="project-card__image" {src} alt={imgAlt} />
	{/if}
	<div class="project-card__content">
		<h4 class="project-card__title app-heading-text-bold">{name}</h4>
		<p class="project-card__desc app-text-regular">
			<slot />
		</p>
	</div>

	{#if githubLink || websiteLink}
		<div class="project-card__links">
			{#if githubLink}
				<a
					class="project-card__github-link app-text-regular"
					aria-label="Github repository"
					href={githubLink}
					target="_blank"
				>
					<SocialIcon name="github" />
					Github
					<ArrowIcon />
				</a>
			{/if}

			{#if websiteLink}
				<a
					class="project-card__web-link app-text-regular"
					aria-label="Project website"
					href={websiteLink}
					target="_blank"
				>
					<WorldIcon />
					Web
					<ArrowIcon />
				</a>
			{/if}
		</div>
	{/if}
</div>

<style>
	.project-card {
		--max-description-width: initial;
		--image-width: initial;
		--image-height: initial;
		--image-aspect-ratio: initial;

		background-color: hsla(var(--th-color-on-bg), 1);
		border-radius: 1rem;
		padding: 2rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.project-card__image {
		width: var(--image-width);
		height: var(--image-height);
		aspect-ratio: var(--image-aspect-ratio);
		border-radius: 0.5rem;
	}

	.project-card__content .project-card__title {
		color: hsla(var(--th-color-title), 1);
		margin-block-start: 1rem;
		margin-block-end: 1rem;
		font-size: 1.25rem;
	}

	.project-card__content .project-card__desc {
		color: hsla(var(--th-color-text), 0.9);
		max-width: var(--max-description-width);
	}

	.project-card__links {
		margin-top: auto;
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	.project-card__links :is(.project-card__github-link, .project-card__web-link) {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 0.3rem;

		font-size: 1rem;
	}
</style>
