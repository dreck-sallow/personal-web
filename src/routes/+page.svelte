<script>
	import '../styles/main.css';
	import NavBar from '../components/nav-bar.svelte';
	import SectionHero from '../components/sections/section-hero.svelte';
</script>

<main class="home-page">
	<NavBar />

	<SectionHero />
</main>

<style>
	.home-page :global(.home-page__section) {
		padding-inline: 3rem;
	}

</style>
