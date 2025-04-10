<script>
	import Button from '../button.svelte';
	import Text from '../text.svelte';
	import { GithubIcon, LinkedinIcon } from '../icons';
</script>

<section id="hero" class="home-page__section hero-section">
	<div class="hero-section__text-content">
		<span class="hero-section__over-title"> 👋 Hey there, </span>
		<h1 class="hero-section__title text-inter-800">I'm Dikson Aranda</h1>
		<Text type="text-sm" className="hero-section__description">
			Welcome to my personal website. I'm Dikson Aranda (Dreck Sallow), a passionate web developer
			with 2 year of work experience creating software to gring a better experience for the users.
			Currently focused in Rust programming language and learning sometimes Haskell :)
		</Text>

		<div class="hero-section__info">
			<div class="hero-section__actions">
				<Button type="link" href="https://github.com/DreckSallow" size="md">
					<GithubIcon />
					<Text type="text-sm">Github</Text>
				</Button>

				<Button type="link" href="https://www.linkedin.com/in/dikson-aranda/" size="md">
					<LinkedinIcon />
					<Text type="text-sm">Linkedin</Text>
				</Button>
			</div>
		</div>
	</div>
	<img
		class="hero-section__image"
		src="https://avatars.githubusercontent.com/u/86900322?v=4"
		alt="Dreck user"
	/>
</section>

<style>
	.hero-section {
		--text-size: 500px;
		--image-size: 300px;
		height: 100vh;
		padding-top: 50px;
		display: grid;
		grid-template-columns: var(--text-size) var(--image-size);
		column-gap: 1rem;
		align-content: center;
		align-items: center;
		justify-content: center;
	}

	.hero-section__over-title {
		font-family: "Inter", sans-serif;
		display: block;
		margin-bottom: 4px;
	}

	.hero-section__title {
		font-size: 3rem;
		line-height: 3.25rem;
		margin-bottom: 0.75rem;
	}

	:global(.hero-section__description) {
		max-width: 450px;
	}

	.hero-section__image {
		border-radius: 30px;
	}

	.hero-section__info {
		margin-top: 1.5rem;
	}

	.hero-section__actions {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}
</style>
