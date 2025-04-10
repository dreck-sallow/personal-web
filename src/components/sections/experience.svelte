<script>
	import JobBox from '../job-box.svelte';
	import Text from '../text.svelte';
</script>

<section id="experience" class="home-page__section experience-section">
	<div class="experience-section__block">
		<Text type="title-3" className="block-title">Experience</Text>
		<div class="experience-section__timeline" role="list">
			<JobBox title="Arisale - Full Stack Developer" date="06/06/2024">
				<Text type="text" className="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto quo quos esse ullam
					inventore optio cum a eum asperiores obcaecati, harum, ipsum delectus velit, corrupti ea
					excepturi! Facere, laboriosam.
				</Text>
			</JobBox>

			<JobBox title="Liquid - Frontend Developer" date="06/06/2023 - 10/04/2024">
				<Text type="text" className="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto quo quos esse ullam
					inventore optio cum a eum asperiores obcaecati, harum, ipsum delectus velit, corrupti ea
					excepturi! Facere, laboriosam.
				</Text>
			</JobBox>
		</div>
	</div>

	<div class="experience-section__skills">
		<div class="experience-section__block">
			<Text type="title-3" className="block-title">Skills</Text>
			<Text>React, NextJs, Nuxtjs, Svelte</Text>
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

	.experience-section__timeline :global(.job-box:not(:last-of-type)) {
		margin-bottom: 3px;
	}

	@media (width < 48rem) {
		.experience-section {
			grid-template-columns: 1fr;
		}
	}
</style>
