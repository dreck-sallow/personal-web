<script>
	import '../styles/main.css';
	import Text from '../components/text.svelte';
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

	<footer class="home-page__footer">
		<div>
			Dikson Aranda
			<Text type="text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam perspiciatis
				reprehenderit! Suscipit tempore quae officiis omnis eveniet, natus ipsum! Accusantium, iure
				doloremque! Itaque officia quam esse rerum voluptate porro.
			</Text>
		</div>
	</footer>
</main>

<style>
	.home-page :global(.home-page__section) {
		padding-inline: 3rem;
	}

	.home-page__footer {
		padding-inline: 3rem;
		padding-block-start: 6rem;
		padding-block-end: 4rem;
		display: flex;
		display: grid;
		grid-template-columns: 1.2fr 1fr 1fr;
	}
</style>
