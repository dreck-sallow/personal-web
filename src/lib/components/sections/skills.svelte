<script lang="ts">
	import { OBSERVED_SELECTOR } from '$lib/pages/principal/section-observer';

	interface SkillGroup {
		title: string;
		tools: string[];
	}

	const SKILL_GROUPS: SkillGroup[] = [
		{
			title: 'Frontend development',
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
			title: 'Backend Development',
			tools: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Docker']
		},

		{
			title: 'Backend Development',
			tools: ['Bash/Fish', 'Git', 'Linux', 'Docker', 'CI/CD', 'GitHub Actions', 'zellij']
		}
	];
</script>

<section id="skills" class={['section-skills flex-col', OBSERVED_SELECTOR]} data-location="#skills">
	<header class="section-skills__header">
		<h2 class="section-skills__title app-heading-text-bold">Skills & Technologies</h2>
		<p class="section-skills__summary app-text-regular">
			A comprehensive overview of my technical expertise across different domains
		</p>
	</header>

	<div class="section-skills__groups">
		{#each SKILL_GROUPS as group}
			{@render SkillGroup(group)}
		{/each}
	</div>
</section>

{#snippet SkillGroup(skillGroup: SkillGroup)}
	<div class="skill-group">
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
	</div>
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
		color: hsla(var(--th-color-title), 1);
	}

	.section-skills__summary {
		font-size: 1rem;
		color: hsla(var(--th-color-text), 0.85);
	}

	.section-skills__groups {
		display: grid;
		grid-template-columns: repeat(3, 21rem);
		gap: 2rem;
	}

	.skill-group {
		border: 1px solid hsla(var(--th-color-accent-text), 0.4);
		padding: 1.5rem;
		border-radius: 0.5rem;
	}

	.skill-group__header {
		color: hsla(var(--th-color-title), 1);
		margin-block-end: 1rem;
	}

	.skill-group__title {
		font-size: 1.25rem;
	}

	.skill-group__tools {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.skill-group__tool {
		font-size: 0.75rem;
		border-radius: 1000px;
		background-color: hsla(var(--th-color-accent-text), 0.3);
		padding-inline: 0.6rem;
		padding-block: 0.2rem;
	}
</style>
