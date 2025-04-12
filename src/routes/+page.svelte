<script>
	import '../styles/main.css';
	import NavBar from '../components/nav-bar.svelte';
	import SectionHero from '../components/sections/section-hero.svelte';
	import Experience from '../components/sections/experience.svelte';
	import Projects from '../components/sections/projects.svelte';
</script>

<main class="home-page">
	<NavBar />

	<SectionHero />
	<Experience />
	<Projects />
</main>

<style>
	.home-page :global(.home-page__section) {
		padding-inline: 3rem;
	}
</style>
