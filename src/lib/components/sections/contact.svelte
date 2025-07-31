<script lang="ts">
	import { for_lang } from '$lib/langs';
	import { getLangContext } from '$lib/pages/principal';

	const lang = getLangContext();
	const t = for_lang(lang);
</script>

<section id="contact" class="contact-section">
	<div class="contact-section__wrapper flex-col" data-aos="zoom-in-up" data-aos-once="true">
		<h3 class="contact-section__title app-heading-text-bold">
			{t['contact.title']}
		</h3>
		<a
			class="contact-section__send app-text-regular"
			href="mailto:arandadikson@gmail.com"
			aria-label="Open mail for send a message"
		>
			{t['contact.cta']}
		</a>
		<span class="contact-section__copy">
			{t['contact.for_copy_email']} <span> arandadikson@gmail.com </span>
		</span>
	</div>
</section>

<style>
	.contact-section {
		margin-block: 1rem;
		padding-inline: 1.5rem;
		padding-block: 2.1rem;
	}

	.contact-section__wrapper {
		background: linear-gradient(
			hsla(var(--theme-color-on-bg), 0.9),
			hsla(var(--theme-color-on-bg-soft), 1)
		);
		color: white;

		padding-inline: 2rem;
		padding-block: 2.1rem;

		margin: auto;
		border-radius: 2rem;
		align-items: center;
		width: 100%;
	}

	.contact-section__title {
		font-size: 1.75rem;
		margin-bottom: 2rem;
		max-width: 800px;
		text-align: center;
		color: hsl(var(--theme-color-surface));
	}

	.contact-section__send {
		border-radius: 1000px;

		padding-inline: 1.4rem;
		padding-block: 0.5rem;

		margin-inline: auto;

		color: hsla(var(--theme-color-on-surface), 1);
		background-color: hsla(var(--theme-color-surface), 1);

		font-size: 1.2rem;
		font-weight: 600;

		margin-bottom: 1rem;
	}

	.contact-section__copy {
		color: hsl(var(--theme-color-surface));
	}

	.contact-section__copy > span {
		text-decoration: underline;
	}

	@media (width > 48rem) {
		.contact-section {
			margin-block: 3rem;
			margin-inline: auto;
			max-width: max-content;
		}

		.contact-section__wrapper {
			padding-inline: 4rem;
			padding-block: 3rem;
		}

		.contact-section__title {
			font-size: 2.5rem;
		}
	}
</style>
