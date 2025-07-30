<script lang="ts">
	import { OBSERVED_SELECTOR } from '$lib/pages/principal/section-observer';
	import { for_lang } from '$lib/langs';
	import { getLangContext } from '$lib/pages/principal';

	const lang = getLangContext();
	const t = for_lang(lang);

	interface SkillGroup {
		title: string;
		tools: string[];
	}

	const SKILL_GROUPS: SkillGroup[] = [
		{
			title: t.skills['frontend.title'],
			tools: [
				'React',
				'Next',
				'TypeScript',
				'JavaScript',
				'HTML5',
				'CSS3',
				'Tailwind CSS',
				'Sass/SCSS',
				'Nuxt',
				'Vue',
				'Sveltekit'
			]
		},
		{
			title: t.skills['backend.title'],
			tools: [
				'Node.js',
				'PostgreSQL',
				'MongoDB',
				'REST APIs',
				'Docker',
				'Rust',
				'Axum'
			]
		},

		{
			title: t.skills['terminal.title'],
			tools: [
				'Bash/Fish',
				'Git',
				'Linux',
				'GitHub Actions',
				'zellij',
				'Helix editor'
			]
		}
	];
</script>

<section id="skills" class={['section-skills flex-col', OBSERVED_SELECTOR]} data-location="#skills">
	<header class="section-skills__header">
		<h2 class="section-skills__title app-heading-text-bold">{t.skills.title}</h2>
		<p class="section-skills__summary app-text-regular">
			{t.skills.summary}
		</p>
	</header>

	<ul class="section-skills__groups">
		{#each SKILL_GROUPS as group}
			{@render SkillGroup(group)}
		{/each}
	</ul>
</section>

{#snippet SkillGroup(skillGroup: SkillGroup)}
	<li class="skill-group">
		<div class="skill-group__header">
			<h4 class="skill-group__title app-heading-text-bold">
				{skillGroup.title}
			</h4>
		</div>

		<ul class="skill-group__tools">
			{#each skillGroup.tools as tool}
				<li class="skill-group__tool app-text-regular">
					{tool}
				</li>
			{/each}
		</ul>
	</li>
{/snippet}

<style>
	.section-skills {
		margin-top: 5rem;
		padding-top: 70px;
		width: inherit;
		justify-content: center;
		gap: 2rem;
		align-items: center;
	}

	.section-skills__header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.section-skills__title {
		font-size: 3rem;
		color: hsla(var(--theme-color-on-bg), 1);
	}

	.section-skills__summary {
		font-size: 1rem;
		color: hsla(var(--theme-color-on-bg-soft), 0.9);
	}

	.section-skills__groups {
		display: grid;
		grid-template-columns: repeat(3, minmax(18rem, 26rem));
		gap: 2rem;
	}

	.skill-group {
		border-radius: 1.5rem;
		padding-inline: 2.5rem;
		padding-block: 2rem;
		background-color: hsla(var(--theme-color-surface), 1);
	}

	.skill-group__header {
		margin-block-end: 1.5rem;
	}

	.skill-group__title {
		font-size: 1.35rem;
		text-align: center;
		color: hsla(var(--theme-color-on-surface), 1);
	}

	.skill-group__tools {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.skill-group__tool {
		font-size: 0.8rem;
		font-weight: semibold;
		border-radius: 1000px;
		color: hsla(var(--theme-color-on-primary), 1);
		background-color: hsla(var(--theme-color-primary), 0.95);
		padding-inline: 1rem;
		padding-block: 0.4rem;
	}

	@media (width <= 40rem) {
		.section-skills__groups {
			grid-template-columns: minmax(18rem, 90%);
			justify-content: center;
		}
	}

	@media (width <= 64rem) and (width > 40rem) {
		.section-skills__groups {
			grid-template-columns: repeat(2, minmax(12rem, 22rem));
		}
	}
</style>
