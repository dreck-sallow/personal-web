<script lang="ts">
	import { OBSERVED_SELECTOR } from '$lib/pages/principal/section-observer';
	// import ExperienceCard from '../experience-card.svelte';
	import TimelineCard from '../timeline-card.svelte';
</script>

<section
	id="experience"
	class={['section-experience flex-col', OBSERVED_SELECTOR]}
	data-location="#experience"
>
	<header class="section-experience__header">
		<h2 class="section-experience__title app-heading-text-bold">Experience</h2>
		<p class="section-experience__summary app-text-regular">
			Show my experience so far, in some companies and my education
		</p>
	</header>

	<ul class="section-experience__timeline">
		<TimelineCard tag="li" position="left" time="start">
			<span slot="header">FullStack developer - Arisale</span>
			<span slot="label">Nov 2023 - Mar 2023</span>
			<p>
				I used Vue with Nuxt.js to create web projects and employed SASS for styling. I collaborated
				with the backend team to add features and resolve issues using Nest.js.
			</p>
		</TimelineCard>

		<TimelineCard tag="li" time="inside" position="right">
			<span slot="header">Frontend developer - Liquid</span>
			<span slot="label">Nov 2023 - Mar 2023</span>
			<p>
				I developed web applications using Vue, Nuxt, Pinia, and Tailwind CSS, and deployed them on
				Google Cloud Platform (GCP). I worked closely with the design team to streamline workflows
				and enhance user experience.
			</p>
		</TimelineCard>

		<TimelineCard tag="li" time="inside" position="left">
			<span slot="header">Frontend Developer - Kimche</span>
			<span slot="label">Jun 2022 - Aug 2022</span>
			<p>
				I implemented new features in web applications, focusing on data visualization through
				tables, charts, and progress bars. I identified and fixed issues, improving functionality
				and user experience. Technologies used: React, React Context, and Cube.js.
			</p>
		</TimelineCard>

		<TimelineCard tag="li" time="end" position="right">
			<span slot="header">FullStack Developer (Education) - SoyHenry</span>
			<span slot="label">Oct 2021 - Mar 2022</span>
			<p>
				I completed Soy Henry's Bootcamp, where I gained skills in full-stack web development within
				the JavaScript ecosystem (frontend and backend). For the final project, we developed an
				online tech store. Skills acquired: React, Redux, Node.js, PostgreSQL, HTML, CSS, Sequelize.
			</p>
		</TimelineCard>
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
</style>
