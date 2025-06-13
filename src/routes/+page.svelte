<script>
	import '../styles/main.css';
	import NavBar from '$lib/components/nav-bar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import {
		// ContactSection,
		AboutSection,
		SectionExperience,
		SectionProjects,
		SectionSkills
	} from '$lib/components/sections';
</script>

<NavBar />

<main class="web-page">
	<AboutSection />
	<SectionExperience />
	<SectionProjects />
	<SectionSkills />
	<!-- <ContactSection /> -->
	<Footer />
</main>

<style>
	:global(body) {
		padding-inline: var(--th-spacing-large);
	}
</style>
