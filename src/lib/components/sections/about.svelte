<script lang="ts">
	import { OBSERVED_SELECTOR } from '$lib/pages/principal/section-observer';
	import { for_lang } from '$lib/langs';
	import { getLangContext } from '$lib/pages/principal';

	const t = for_lang(getLangContext());
</script>

<section id="about" class={['section-about', OBSERVED_SELECTOR]} data-location="#about">
	<header class="section-about__header">
		<h2 class="section-about__title app-heading-text-bold">
			👋 {t['about.greeting']} <br />
			<span class="section-about__title-highlight">{t['about.presentation']}</span>
		</h2>
		<p class="section-about__description app-text-regular">
			{t['about.primary_description']}
			<br />
			{t['about.secondary_description']}
		</p>
	</header>
	<img
		class="section-about__avatar"
		src="https://avatars.githubusercontent.com/u/86900322?v=4"
		alt="Dikson profile avatar"
	/>
</section>

<style>
	.section-about {
		width: inherit;
		min-height: calc(100vh - 70px - (var(--th-spacing-xs) * 2));
		gap: 4rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.section-about__header {
		max-width: 35rem;
	}

	.section-about__header .section-about__title {
		font-size: 3rem;
		color: hsla(var(--th-color-title), 1);
	}

	.section-about__header .section-about__title-highlight {
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

	.section-about__header .section-about__description {
		margin-block-start: 2rem;
		font-size: 1.2rem;
		color: hsla(var(--th-color-title), 0.9);
	}

	@media (width <= 40rem) {
		.section-about__header .section-about__title {
			font-size: 2.5rem;
		}

		.section-about__header .section-about__description {
			font-size: 1rem;
		}
	}

	@media (width <= 48rem) {
		.section-about {
			flex-direction: column;
		}

		.section-about__header .section-about__title {
			text-align: center;
		}

		.section-about__avatar {
			width: 90%;
		}
	}
</style>
