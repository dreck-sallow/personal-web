<script lang="ts">
	import { OBSERVED_SELECTOR } from '$lib/pages/principal/section-observer';
	import ExperienceCard from '../experience-card.svelte';
	import { for_lang } from '$lib/langs';
	import { getLangContext } from '$lib/pages/principal';

	const lang = getLangContext();
	const t = for_lang(lang);
</script>

<section
	id="experience"
	class={['section-experience flex-col', OBSERVED_SELECTOR]}
	data-location="#experience"
>
	<header class="section-experience__header">
		<h2 class="section-experience__title app-heading-text-bold">{t.experience.title}</h2>
		<p class="section-experience__summary app-text-regular">
			{t.experience.summary}
		</p>
	</header>

	<ul class="section-experience__timeline">
		<ExperienceCard
			tag="li"
			place="left-start"
			title={t.experience.arisale.role}
			date={t.experience.arisale.date}
		>
			{t.experience.arisale.desc_html}
		</ExperienceCard>

		<ExperienceCard
			tag="li"
			place="right-center"
			title={t.experience.liquid.role}
			date={t.experience.liquid.date}
		>
			{t.experience.liquid.desc_html}
		</ExperienceCard>

		<ExperienceCard
			tag="li"
			place="left-center"
			title={t.experience.kimche.role}
			date={t.experience.kimche.date}
		>
			{t.experience.kimche.desc_html}
		</ExperienceCard>

		<ExperienceCard
			tag="li"
			place="right-end"
			title={t.experience.henry.role}
			date={t.experience.henry.date}
		>
			{t.experience.henry.desc_html}
		</ExperienceCard>
	</ul>
</section>

<style>
	.section-experience {
		width: inherit;
		padding-top: 70px;
		justify-content: center;
		gap: 2rem;
		align-items: center;
	}

	.section-experience__header {
		text-align: center;
		margin-bottom: 1rem;
	}

	.section-experience__title {
		font-size: 3rem;
		color: hsla(var(--th-color-title), 1);
	}

	.section-experience__summary {
		font-size: 1rem;
		color: hsla(var(--th-color-text), 0.85);
	}

	.section-experience__timeline {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		width: 80%;
	}

	@media (width <=48rem) {
		.section-experience__timeline {
			/*  DEFINE OTHER SIZE FOR LABEL WIDTH  */
			transform: translateX(20px);
		}
	}
</style>
