<script>
	import '../styles/main.css';
	import NavBar from '$lib/components/nav-bar.svelte';
	import { SectionExperience, SectionProjects, SectionSkills } from '$lib/components/sections';
</script>

<NavBar />

<main class="web-page">
	<section class="section-about app-section flex-center">
		<header class="section-about__header">
			<h2 class="section-about__title app-heading-text-bold">
				👋 Hey there, <br />
				<span class="section-about__title-highlight">I'm Dikson Aranda</span>
			</h2>
			<p class="section-about__description app-text-regular">
				Welcome to my personal website. I'm Dikson Aranda (Dreck Sallow), a passionate web developer
				with 2 year of work experience creating software to gring a better experience for the users.
				Currently focused in Rust programming language and learning sometimes Haskell :)
			</p>
		</header>
		<img
			class="section-about__avatar"
			src="https://avatars.githubusercontent.com/u/86900322?v=4"
			alt="Dikson profile avatar"
		/>
	</section>
	<SectionExperience />
	<SectionProjects />
	<SectionSkills />
</main>

<style>
	:global(body) {
		padding-inline: var(--th-spacing-large);
		padding-block: var(--th-spacing-xs);
	}

	.section-about {
		width: inherit;
		height: calc(100vh - 70px - (var(--th-spacing-xs) * 2));
		gap: 2rem;
	}

	.section-about__header {
		max-width: 35rem;
	}

	.section-about__title {
		font-size: 3rem;
		color: hsla(var(--th-color-title), 1);
	}

	.section-about__title-highlight {
		display: inline-block;
		padding: 0.2rem 1.5rem;
		border-radius: 1000px;
		color: hsla(var(--th-color-bg), 1);
		background-color: hsla(var(--th-color-accent-text), 1);
	}

	.section-about__avatar {
		max-width: 25rem;
		border-radius: 50px;
	}

	.section-about__description {
		margin-block-start: 2rem;
		font-size: 1.2rem;
		/* FIXME: change to color-text */
		color: hsla(var(--th-color-title), 1);
	}
</style>
