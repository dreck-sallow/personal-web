<script lang="ts">
	import { ArrowIcon } from '../icons';
	import ProjectCard from '../project-card.svelte';
	import IconButton from '../buttons/icon.button.svelte';
	import Text from '../text.svelte';
	import { onMount } from 'svelte';

	const totalCards = 3;
	let offset = 3;

	let projectList: HTMLDivElement | null = null;
	let projectListContent: HTMLDivElement | null = null;
	let startIndex = 0;

	const applyMove = () => {
		if (projectList) {
			projectList.style.transform = `translate3d(${startIndex * 300 * -1}px, 0px, 0px)`;
		}
	};

	const onClickPrev = () => {
		if (startIndex == 0) return;
		startIndex -= 1;
		applyMove();
	};

	const onClickNext = () => {
		if (startIndex >= totalCards - offset) return;
		startIndex += 1;
		applyMove();
	};

	onMount(() => {
		const calculateOffset = () => {
			if (projectListContent) {
				const containerWidth = projectListContent.clientWidth;

				if (containerWidth < 900) {
					offset = Math.floor(containerWidth / 300);
				}
			}
		};

		calculateOffset();

		// window.addEventListener('resize', calculateOffset);
		// () => {
		// 	window.removeEventListener('resize', calculateOffset);
		// };
	});
</script>

<section id="projects" class="home-page__section projects-section">
	<div class="projects-section__inner">
		<header class="projects-section__header">
			<div class="projects-section__text">
				<Text type="title-2">Personal Projects</Text>
				<Text type="text-sm">
					A collection of self-driven projects where I explore new technologies, deepen my
					understanding of software architecture, and solve real-world problems through code.
				</Text>
			</div>
			<div class="projects-section__actions">
				<IconButton type="button" on:click={onClickPrev}>
					<ArrowIcon direction="left" />
				</IconButton>
				<IconButton type="button" on:click={onClickNext}>
					<ArrowIcon direction="right" />
				</IconButton>
			</div>
		</header>
		<div class="projects-section__list-content" bind:this={projectListContent}>
			<div class="projects-section__list" role="list" bind:this={projectList}>
				<ProjectCard
					imgUrl="https://github.com/dreck-sallow/personal-web/blob/main/src/assets/quipp-image.png?raw=true"
					imgAlt="Quipp web page"
					title="Quipp"
				>
					<Text type="text-xs" className="project-card__description-content">
						🌐 A community-driven platform for interactive discussions, ideal for live streams and
						Q&A sessions.
					</Text>
				</ProjectCard>
				<ProjectCard
					imgUrl="https://github.com/DreckSallow/melody/raw/main/melody-image.png"
					imgAlt="Melody project"
					title="Melody tui"
				>
					<Text type="text-xs" className="project-card__description-content">
						🎧 A terminal-based music player (TUI) with keyboard navigation, designed for efficiency
						and minimalism.
					</Text>
				</ProjectCard>

				<ProjectCard
					imgUrl="https://github.com/dreck-sallow/personal-web/raw/refs/heads/main/src/assets/flix-markdown.webp"
					imgAlt="Flix desktop"
					title="Flix"
				>
					<Text type="text-xs" className="project-card__description-content">
						🖥️ An open-source desktop app that integrates Anki decks with note-taking for enhanced
						study sessions.
					</Text>
				</ProjectCard>
			</div>
		</div>
	</div>
</section>

<style>
	.projects-section {
		margin-top: 4rem;
		margin-bottom: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.projects-section__inner {
		max-width: 100%;
	}

	.projects-section__header {
		margin-bottom: 2.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}

	.projects-section__actions {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;

		margin-top: auto;
	}

	.projects-section__text {
		text-align: start;
		max-width: 400px;
	}

	.projects-section__text :global(.title-2) {
		font-weight: 800;
	}

	.projects-section__list-content {
		max-width: calc(300px * 3 + (3 -1 * 1rem));
		overflow: hidden;
	}

	.projects-section__list {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	@media (prefers-reduced-motion: no-preference) {
		.projects-section__list {
			transition: transform 300ms ease;
		}
	}

	@media (width < 600px) {
		.projects-section__header {
			flex-direction: column;
		}
	}
</style>
