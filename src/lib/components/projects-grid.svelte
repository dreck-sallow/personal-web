<div class="projects-grid">
	<div class="project-card">
		<img
			class="project-card__image"
			src="https://diksoncode.com/_astro/quipp-image.D24gA1-j_Z24EWD9.webp"
			alt="Quipp app"
		/>
		<h4 class="project-card__title app-heading-text-bold">Quipp</h4>
		<p class="project-card__desc app-text-regular">
			🌐 A community-driven platform for interactive discussions, ideal for live streams and Q&A
			sessions.
		</p>
	</div>

	<div class="project-card">
		<img
			class="project-card__image"
			src="https://diksoncode.com/_astro/flix-markdown.CEWhFR_V_gGm5X.webp"
			alt="Flix"
		/>
		<h4 class="project-card__title app-heading-text-bold">Flix</h4>
		<p class="project-card__desc app-text-regular">
			🖥️ An open-source desktop app that integrates Anki decks with note-taking for enhanced study
			sessions.
		</p>
	</div>

	<div class="project-card">
		<img
			class="project-card__image"
			src="https://diksoncode.com/_astro/prj-melody.B6fr3rcL_oqHa4.webp"
			alt="Melody program"
		/>
		<h4 class="project-card__title app-heading-text-bold">Melody</h4>
		<p class="project-card__desc app-text-regular">
			🎧 A terminal-based music player (TUI) with keyboard navigation, designed for efficiency and
			minimalism.
		</p>
	</div>

	<div class="project-card">
		<img
			class="project-card__image"
			src="https://diksoncode.com/_astro/flow-img.Cnk6rY7c_ZhgoMW.webp"
			alt="Flow cli"
		/>
		<h4 class="project-card__title app-heading-text-bold">Flow</h4>
		<p class="project-card__desc app-text-regular">
			✅ A CLI task manager for streamlined project organization and workflow optimization.
		</p>
	</div>
</div>

<style>
	.projects-grid {
		display: grid;
		/* grid-template-columns: repeat(5, 12rem);
		grid-auto-rows: repeat(4, 12rem); */
		gap: 1.5rem;
	}

	.project-card {
		--max-description-width: initial;
		--image-width: initial;
		--image-height: initial;
		--image-aspect-ratio: initial;

		background-color: hsla(var(--th-color-on-bg), 1);
		border-radius: 1rem;
		padding: 2rem;
	}

	.project-card__image {
		border-radius: 0.5rem;
		width: var(--image-width);
		height: var(--image-height);
		aspect-ratio: var(--image-aspect-ratio);
	}

	.project-card__title {
		color: hsla(var(--th-color-title), 1);
		margin-block-start: 1rem;
		margin-block-end: 1rem;
	}

	.project-card__desc {
		color: hsla(var(--th-color-text), 0.9);
		max-width: var(--max-description-width);
	}

	@media (width <= 40rem) {
		.projects-grid {
			grid-template-columns: 1fr;
			grid-auto-rows: 1fr;
		}
	}

	@media (width <= 64rem) {
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
		.project-card:nth-of-type(1) {
			grid-row: 1 / 2;
			grid-column: 1 / 4;
		}

		.project-card:nth-of-type(2) {
			grid-row: 1 / 2;
			grid-column: 4 / 6;
		}

		.project-card:nth-of-type(3) {
			grid-row: 2 / 3;
			grid-column: 1 / 3;
		}

		.project-card:nth-of-type(4) {
			grid-row: 2 / 3;
			grid-column: 3 / 6;
		}

		.project-card:is(:nth-of-type(1), :nth-of-type(4)) {
			--max-description-width: 23rem;
			--image-width: 100%;
			--image-aspect-ratio: 16 / 9;
		}

		.project-card:is(:nth-of-type(2), :nth-of-type(3)) {
			--image-width: 100%;
			--image-height: 20rem;
		}
	}
</style>
