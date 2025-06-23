<script>
	import { INTERNAL_LINKS } from '$lib';
	import { SocialIcon } from './icons';
</script>

<footer class="hero-footer flex-row">
	<div class="hero-footer__left flex-row">
		<div class="hero-footer__brand">
			<h2 class="hero-footer__title app-heading-text-bold">Dreck Sallow</h2>
			<p class="hero-footer__summary">
				Full-stack developer passionate about clean code and meaningful products.
			</p>
		</div>

		<div class="hero-footer__text">
			<ul class="hero-footer__links flex-row">
				{#each INTERNAL_LINKS as link}
					<li>
						<a href={link.href} class="hero-footer__link app-text-regular">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<span class="hero-footer__copy">
				&copy; {new Date().getFullYear()} Dikson Aranda. All right reserved.
			</span>
		</div>
	</div>

	<div class="hero-footer__right flex-col">
		<ul class="hero-footer__socials flex-row">
			<li>
				<a
					target="_blank"
					href="https://github.com/DreckSallow"
					class="hero-footer_social-link app-text-regular"
				>
					<SocialIcon name="github" />
				</a>
			</li>

			<li>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/dikson-aranda/"
					class="hero-footer_social-link app-text-regular"
				>
					<SocialIcon name="linkedin" />
				</a>
			</li>
		</ul>

		<span class="hero-footer__mail">Mail: arandadikson@gmail.com </span>
		<span class="hero-footer__copy">
			&copy; {new Date().getFullYear()} Dikson Aranda. All right reserved.
		</span>
	</div>
</footer>

<style>
	.hero-footer {
		border-top: 1px solid hsla(var(--th-color-text), 0.4);
		justify-content: space-between;
		padding-inline: 2rem;
		padding-block: 4rem;
		gap: 1rem;
	}

	.hero-footer__left {
		gap: 1rem;
		align-items: center;
	}

	.hero-footer__brand {
		border-right: 1px solid hsla(var(--th-color-text), 0.5);
	}

	.hero-footer__text {
		padding-left: 0.75rem;
	}

	.hero-footer__brand .hero-footer__title {
		color: hsla(var(--th-color-text), 0.8);
		font-size: 1.5rem;
	}

	.hero-footer__brand .hero-footer__summary {
		font-size: 0.75rem;
		color: hsla(var(--th-color-text), 0.75);
		max-width: 20rem;
		margin-top: 0.25rem;
	}

	.hero-footer__links {
		gap: 1.25rem;
		text-transform: uppercase;
	}

	.hero-footer__links .hero-footer__link {
		font-size: 0.85rem;
		color: hsla(var(--th-color-text), 0.75);
		font-weight: 600;
	}

	.hero-footer__copy {
		color: hsla(var(--th-color-text), 0.75);
		display: block;
		margin-top: 0.25rem;
		font-size: 0.85rem;
	}

	/*  RIGHT SIDE  */
	.hero-footer__right {
		gap: 0.5rem;
	}

	.hero-footer__right .hero-footer__socials {
		gap: 1rem;
	}

	.hero-footer__right .hero-footer__mail {
		color: hsla(var(--th-color-text), 0.75);
		font-size: 0.85rem;
	}

	.hero-footer_social-link :global(.icon) {
		--icon-size: 1.5rem;
		color: hsla(var(--th-color-text), 0.75);
	}

	@media (width <= 48rem) {
		.hero-footer {
			flex-direction: column;
			gap: 2rem;
		}

		.hero-footer__left {
			flex-direction: column;
			gap: 2rem;
			align-items: start;
		}

		.hero-footer__left .hero-footer__brand {
			border: 0;
		}

		.hero-footer__left .hero-footer__text {
			padding-left: 0;
		}

		.hero-footer__left .hero-footer__copy {
			display: none;
		}

		.hero-footer__right .hero-footer__copy {
			display: block;
			margin-top: 2rem;
		}
	}

	@media (width > 48rem) {
		.hero-footer {
			justify-content: space-between;
			padding-inline: 8rem;
			padding-block: 6rem;
		}

		.hero-footer__left .hero-footer__copy {
			display: block;
		}

		.hero-footer__right .hero-footer__copy {
			display: none;
		}
	}
</style>
