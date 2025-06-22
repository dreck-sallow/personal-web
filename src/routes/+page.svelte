<script>
	import '../styles/main.css';
	import { onMount } from 'svelte';
	import { INTERNAL_LINKS } from '$lib';
	import { setPageContext } from '$lib/pages/principal';
	import { startSectionsObserver } from '$lib/pages/principal/section-observer';
	import NavBar from '$lib/components/nav-bar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import {
		ContactSection,
		AboutSection,
		SectionExperience,
		SectionProjects,
		SectionSkills
	} from '$lib/components/sections';

	setPageContext({
		navigationLocation: {
			location: INTERNAL_LINKS[0].href
		}
	});

	onMount(() => {
		startSectionsObserver();
	});
</script>

<NavBar />

<main class="web-page">
	<AboutSection />
	<SectionExperience />
	<SectionProjects />
	<SectionSkills />
	<ContactSection />
	<Footer />
</main>

<style>
	:global(body) {
		padding-inline: var(--th-spacing-large);
	}

	@media (width <= 40rem) {
		:global(body) {
			padding-inline: var(--th-spacing-sm);
		}
	}
</style>
