<script>
	import '../styles/main.css';
	import { onMount } from 'svelte';
	import { get_page_links } from '$lib';
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
			location: get_page_links('en')[0].href
		},
		lang: 'en'
	});

	onMount(() => {
		startSectionsObserver();
	});
</script>

<svelte:head>
	<title>Dreck Sallow | Web Developer</title>
	<meta
		name="description"
		content="Portfolio of Dreck (Dikson Aranda), full-stack developer specializing in frontent with vue & react."
	/>

	<meta property="og:title" content="Dreck (Dikson) — Full-Stack Developer" />
	<meta
		property="og:description"
		content="Projects, blog posts, and contact info for Dreck, software developer."
	/>
	<meta property="og:type" content="website" />

	<script>
		const theme = localStorage.getItem('user_theme');
		if (theme == 'dark') {
			document.firstElementChild?.setAttribute('data-theme', theme);
			document.querySelector('#theme-toggle')?.setAttribute('data-label', theme);
		}
	</script>
</svelte:head>

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
	:global(.navbar, body > .section) {
		padding-inline: var(--th-spacing-large);
	}

	@media (width <= 40rem) {
		:global(body) {
			padding-inline: var(--th-spacing-sm);
		}
	}
</style>
