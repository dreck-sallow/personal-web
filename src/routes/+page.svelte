<script>
	import '../styles/main.css';
	import NavBar from '$lib/components/nav-bar.svelte';
</script>

<NavBar />

<main class="web-page">
	<h1>Welcome to Dikson portfolio</h1>
	<p>Dikson Aranda Cabrera</p>
</main>

<style>
	:global(body) {
		padding-inline: var(--th-spacing-large);	
		padding-block: var(--th-spacing-xs);	
	}
	
</style>
