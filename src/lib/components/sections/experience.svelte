<script lang="ts">
	import ExperienceCard from '../experience-card.svelte';
</script>

<section id="experience" class="section-experience flex-col">
	<header class="section-experience__header">
		<h2 class="section-experience__title app-heading-text-bold">Experience</h2>
		<p class="section-experience__summary app-text-regular">
			Show my experience so far, in some companies and my education
		</p>
	</header>

	<ul class="section-experience__list flex-col">
		<ExperienceCard tag="li" position="FullStack developer" company="Arisale" date="Jun 2024 - Dic 2024">
			I used Vue with Nuxt.js to create web projects and employed SASS for styling. I collaborated
			with the backend team to add features and resolve issues using Nest.js.
		</ExperienceCard>

		<ExperienceCard tag="li" position="Frontend developer" company="Liquid" date="Nov 2023 - Mar 2023">
			I developed web applications using Vue, Nuxt, Pinia, and Tailwind CSS, and deployed them on
			Google Cloud Platform (GCP). I worked closely with the design team to streamline workflows and
			enhance user experience.
		</ExperienceCard>

		<ExperienceCard tag="li" position="Frontend Developer" company="Kimche" date="Jun 2022 - Aug 2022">
			I implemented new features in web applications, focusing on data visualization through tables,
			charts, and progress bars. I identified and fixed issues, improving functionality and user
			experience. Technologies used: React, React Context, and Cube.js.
		</ExperienceCard>

		<ExperienceCard tag="li" position="FullStack Developer (Education)" company="SoyHenry" date="Oct 2021 - Mar 2022">
			I completed Soy Henry's Bootcamp, where I gained skills in full-stack web development within
			the JavaScript ecosystem (frontend and backend). For the final project, we developed an online
			tech store. Skills acquired: React, Redux, Node.js, PostgreSQL, HTML, CSS, Sequelize.
		</ExperienceCard>
	</ul>
</section>

<style>
	.section-experience {
		width: inherit;
		/* height: calc(100vh - 70px - (var(--th-spacing-xs) * 2)); */
		justify-content: center;
		gap: 2rem;
		align-items: center;
	}

	.section-experience__header {
		text-align: center;
	}

	.section-experience__title {
		font-size: 2.5rem;
		color: hsla(var(--th-color-title), 1);
	}

	.section-experience__summary {
		font-size: 1rem;
		color: hsla(var(--th-color-text), 0.85);
	}

	.section-experience__list {
		gap: 1.5rem;
	}
</style>
