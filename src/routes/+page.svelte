<script>
	import '../styles/main.css';
	import NavBar from '../components/nav-bar.svelte';
	import SectionHero from '../components/sections/section-hero.svelte';
	import Experience from '../components/sections/experience.svelte';
</script>

<main class="home-page">
	<NavBar />

	<SectionHero />
	<Experience />
</main>

<style>
	.home-page :global(.home-page__section) {
		padding-inline: 3rem;
	}
</style>
