<script>
	import JobBox from '../job-box.svelte';
	import Tag from '../tag.svelte';
	import Text from '../text.svelte';

	const frontSkills = ['React', 'Vue', 'Nuxt', 'Svelte', 'Sveltekit', 'Tailwindcss', 'SASS'];
	const languageSkills = ['Javascript', 'Typescript', 'HTML', 'CSS', 'Rust', 'Haskell'];
	const backendSkills = ['NodeJs', 'NestJs', 'Kafka', 'Docker :v'];
	const skills = [...frontSkills, ...languageSkills, ...backendSkills];
</script>

<section id="experience" class="home-page__section experience-section">
	<div class="experience-section__block">
		<Text type="title-3" className="block-title">Experience</Text>

		<div class="experience-section__timeline" role="list">
			<JobBox title="Full Stack Developer" date="Arisale (Jun 2024 - Dic 2024)">
				<Text type="text-sm" className="mt-4">
					I used Vue with Nuxt.js to create web projects and employed SASS for styling.
					<br />
					<br />
					I collaborated with the backend team to add features and resolve issues using Nest.js.
				</Text>
			</JobBox>

			<JobBox title="Frontend Developer" date="Liquid (Nov 2023 - Mar 2023)">
				<Text type="text-sm" className="mt-4">
					I developed web applications using Vue, Nuxt, Pinia, and Tailwind CSS, and deployed them
					on Google Cloud Platform (GCP).
					<br />
					<br />
					I worked closely with the design team to streamline workflows and enhance user experience.
				</Text>
			</JobBox>

			<JobBox title="Frontend Developer" date="Kimche (Jun 2022 - Aug 2022)">
				<Text type="text-sm" className="mt-4">
					I implemented new features in web applications, focusing on data visualization through
					tables, charts, and progress bars.
					<br />
					<br />
					I identified and fixed issues, improving functionality and user experience. Technologies used:
					React, React Context, and Cube.js.
				</Text>
			</JobBox>

			<!--<JobBox title="Full Stack Developer (Student)" date="SoyHenry (Oct 2021 - Mar 2022)">
				<Text type="text-sm" className="mt-4">
					I completed Soy Henry's Bootcamp, where I gained skills in full-stack web development
					within the JavaScript ecosystem (frontend and backend).
					<br />
					<br />
					For the final project, we developed an online tech store. Skills acquired: React, Redux, Node.js,
					PostgreSQL, HTML, CSS, Sequelize.
				</Text>
			</JobBox> -->
		</div>
	</div>

	<div class="experience-section__skills">
		<div class="experience-section__block">
			<Text type="title-3" className="block-title">Skills</Text>
			<div class="experience-section__skill">
				{#each skills as skill}
					<Tag label={skill} />
				{/each}
			</div>
		</div>

		<div class="experience-section__block experience-section__languages">
			<Text type="title-3" className="block-title">Languages</Text>
			<div class="experience-section__skill">
				<Tag label="English - B2" />
				<Tag label="Spanish - Native" />
			</div>
		</div>

		<div class="experience-section__block experience-section__education">
			<Text type="title-3" className="block-title">Education</Text>
			<Text type="text-xs">
				I completed Soy Henry's Bootcamp, where I gained skills in full-stack web development within
				the JavaScript ecosystem (frontend and backend).
				<br />
				For the final project, we developed an online tech store. Skills acquired: React, Redux, Node.js,
				PostgreSQL, HTML, CSS, Sequelize.
				<br />
				<a
					class="experience-section__education-link"
					href="https://certificates.soyhenry.com/cert?id=251d5f3a-678e-4dc1-85d4-b23df68894e6"
					target="_blank"
				>
					Certified link
				</a>
			</Text>
		</div>
	</div>
</section>

<style>
	.experience-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10rem;
		row-gap: 3rem;
	}

	.experience-section__block :global(.block-title) {
		font-weight: 700;
		margin-bottom: 2rem;
		text-decoration: underline;
	}

	.experience-section__education :global(.block-title),
	.experience-section__education :global(.block-title) {
		font-weight: 700;
		margin-bottom: 1rem;
		text-decoration: underline;
	}

	.experience-section__education-link {
		text-decoration: underline;
	}

	.experience-section__timeline :global(.job-box:not(:last-of-type)) {
		margin-bottom: 3px;
	}

	.experience-section__skills .experience-section__block:not(:last-of-type) {
		margin-bottom: 2rem;
	}

	.experience-section__skill {
		max-width: 450px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (width < 48rem) {
		.experience-section {
			grid-template-columns: 1fr;
		}
	}
</style>
