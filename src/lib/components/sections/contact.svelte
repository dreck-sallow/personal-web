<section id="contact" class="contact-section">
	<div class="contact-section__wrapper flex-col">
		<h3 class="contact-section__title app-heading-text-bold">
			Have a question, a project in mind, or just want to say hi?
		</h3>
		<a
			class="contact-section__send app-text-regular"
			href="mailto:arandadikson@gmail.com"
			aria-label="Open mail for send a message"
		>
			Open mail
		</a>
		<span class="contact-section__copy">
			Or copy <span> arandadikson@gmail.com </span>
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
		background: linear-gradient(hsla(var(--th-color-text), 0.90), hsla(var(--th-color-text), 1));
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
		max-width: 100%;
		text-align: center;
	}

	.contact-section__send {
		border-radius: 1000px;

		padding-inline: 1.4rem;
		padding-block: 0.5rem;

		margin-inline: auto;

		color: hsla(var(--th-color-text), 1);
		background-color: hsla(var(--th-color-bg), 1);

		font-size: 1.2rem;
		font-weight: 600;

		margin-bottom: 1rem;
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
