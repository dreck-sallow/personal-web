<script>
	import ProjectCard from './project-card.svelte';
	import QaImage from '../../assets/images/qa-screenshot.webp?enhanced';
	import FlixImage from '../../assets/images/flix-app.png?enhanced';
	import MelodyImage from '../../assets/images/melody-cli.webp?enhanced';
	import FlowImage from '../../assets/images/flow-cli.webp';
</script>

<div class="projects-grid">
	<ProjectCard
		src={QaImage}
		imgAlt="Quipp app"
		name="Quipp"
		githubLink="https://github.com/DreckSallow/qa-web"
		websiteLink="https://qa-web.vercel.app/"
	>
		🌐 A community-driven platform for interactive discussions, ideal for live streams and Q&A
		sessions.
	</ProjectCard>

	<ProjectCard
		src={FlixImage}
		imgAlt="Flix desktop"
		name="Flix"
		githubLink="https://github.com/DreckSallow/flix"
		websiteLink="https://flixdev.netlify.app/"
	>
		🖥️ An open-source desktop app that integrates Anki decks with note-taking for enhanced study
		sessions.
	</ProjectCard>

	<ProjectCard
		src={MelodyImage}
		imgAlt="Melody program"
		name="Melody"
		githubLink="https://github.com/DreckSallow/melody"
	>
		🎧 A terminal-based music player (TUI) with keyboard navigation, designed for efficiency and
		minimalism.
	</ProjectCard>

	<ProjectCard
		src={FlowImage}
		imgAlt="Flow cli"
		name="Flow"
		githubLink="https://github.com/DreckSallow/flow"
		isGif
	>
		✅ A CLI task manager for streamlined project organization and workflow optimization.
	</ProjectCard>
</div>

<style>
	.projects-grid {
		display: grid;
		gap: 1.5rem;
	}

	@media (width <= 40rem) {
		.projects-grid {
			grid-template-columns: 1fr;
			grid-auto-rows: 1fr;
		}

		.projects-grid :global(.project-card) {
			--image-width: 100%;
			--image-aspect-ratio: 16 / 9;
		}
	}

	@media (width <= 64rem) and (width > 40rem) {
		.projects-grid {
			grid-template-columns: repeat(2, minmax(12rem, 28rem));
		}
	}

	@media (width > 64rem) {
		.projects-grid {
			grid-template-columns: repeat(5, minmax(12rem, 14rem));
			grid-auto-rows: repeat(4, 12rem);
		}

		/* Apply grid styles for each item */
		.projects-grid :global(.project-card:nth-of-type(1)) {
			grid-row: 1 / 2;
			grid-column: 1 / 4;
		}

		.projects-grid :global(.project-card:nth-of-type(2)) {
			grid-row: 1 / 2;
			grid-column: 4 / 6;
		}

		.projects-grid :global(.project-card:nth-of-type(3)) {
			grid-row: 2 / 3;
			grid-column: 1 / 3;
		}

		.projects-grid :global(.project-card:nth-of-type(4)) {
			grid-row: 2 / 3;
			grid-column: 3 / 6;
		}

		.projects-grid :global(.project-card:is(:nth-of-type(1), :nth-of-type(4))) {
			--max-description-width: 23rem;
			--image-width: 100%;
			--image-aspect-ratio: 16 / 9;
		}

		.projects-grid :global(.project-card:is(:nth-of-type(2), :nth-of-type(3))) {
			--image-width: 100%;
			--image-height: 20rem;
		}
	}
</style>
