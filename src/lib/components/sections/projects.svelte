<script>
	import { OBSERVED_SELECTOR } from '$lib/pages/principal/section-observer';
	import ProjectsGrid from '../projects-grid.svelte';

	import { for_lang } from '$lib/langs';
	import { getLangContext } from '$lib/pages/principal';

	const lang = getLangContext();
	const t = for_lang(lang);
</script>

<section
	id="projects"
	class={['section-projects flex-col', OBSERVED_SELECTOR]}
	data-location="#projects"
>
	<header class="section-projects__header">
		<h2 class="section-projects__title app-heading-text-bold">{t.projects.title}</h2>
		<p class="section-projects__summary app-text-regular">
			{t.projects.summary}
		</p>
	</header>
	<ProjectsGrid />
</section>

<style>
	.section-projects {
		margin-top: 5rem;
		padding-top: 70px;

		width: inherit;

		justify-content: center;
		gap: 2rem;
		align-items: center;
	}

	.section-projects__header {
		text-align: center;
		margin-bottom: 1rem;
	}

	.section-projects__title {
		color: hsla(var(--theme-color-on-bg), 1);
		font-size: 3rem;
	}

	.section-projects__summary {
		color: hsla(var(--theme-color-on-bg-soft), 0.9);
		font-size: 1rem;
	}
</style>
