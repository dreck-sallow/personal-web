<script>
	import ProjectsGrid from '../projects-grid.svelte';
</script>

<section id="projects" class="section-projects flex-col">
	<header class="section-projects__header">
		<h2 class="section-projects__title app-heading-text-bold">My projects</h2>
		<p class="section-projects__summary app-text-regular">
			Show my experience so far, in some companies and my education
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
		font-size: 3rem;
		color: hsla(var(--th-color-title), 1);
	}

	.section-projects__summary {
		font-size: 1rem;
		color: hsla(var(--th-color-text), 0.85);
	}
</style>
