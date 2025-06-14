<script>
	import { INTERNAL_LINKS } from '$lib';
	import { MailIcon, SocialIcon } from './icons';
</script>

<footer class="footer flex-col">
	<section class="footer__summary flex-row">
		<div class="footer__summary-header">
			<h2 class="footer__title app-heading-text-bold">Dreck Sallow</h2>
			<p class="footer__description app-text-regular">
				Full-stack developer passionate about clean code and meaningful products.
			</p>
		</div>

		<div class="footer__social footer__section">
			<h4 class="footer__section-title app-heading-text-bold">Navigation</h4>

			<ul class="footer__links">
				{#each INTERNAL_LINKS as link}
					<li>
						<a href={link.href} class="footer__link app-text-regular">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="footer__navigation footer__section">
			<h4 class="footer__section-title app-heading-text-bold">Connect</h4>

			<ul class="footer__social">
				<li>
					<SocialIcon name="github" />
					<a
						target="_blank"
						href="https://github.com/DreckSallow"
						class="footer__social-link app-text-regular"
					>
						Gtihub
					</a>
				</li>

				<li>
					<SocialIcon name="linkedin" />
					<a
						target="_blank"
						href="https://www.linkedin.com/in/dikson-aranda/"
						class="footer__social-link app-text-regular"
					>
						Linkedin
					</a>
				</li>

				<li>
					<MailIcon />
					<a href="mailto:arandadikson@gmail.com" class="footer__social-link app-text-regular">
						Email
					</a>
				</li>
			</ul>
		</div>
	</section>

	<div class="footer__extras flex-center">
		<span class="footer__copyright app-text-regular">
			&copy; {new Date().getFullYear()} Dikson Aranda. All rights reserved.
		</span>
	</div>
</footer>

<style>
	.footer {
		--text-color: hsla(var(--th-color-text), 1);

		gap: 1rem;
		margin-top: 4rem;
	}

	.footer__summary {
		--border-color: hsla(var(--th-color-text), 0.3);
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		padding-block: 2rem;

		justify-content: space-around;
	}

	.footer__summary-header .footer__title {
		font-size: 1.75rem;
		color: var(--text-color);
	}

	.footer__summary-header .footer__description {
		color: var(--text-color);
		font-size: 1rem;

		max-width: 25rem;
		margin-top: 0.5rem;
	}

	.footer__section {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer__section .footer__section-title {
		font-size: 1.1rem;
		color: hsla(var(--th-color-heading-text), 0.8);
	}

	.footer__links {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;

		flex-wrap: wrap;
	}

	.footer__links .footer__link {
		color: var(--text-color);
	}

	.footer__social li {
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.footer__extras {
		margin-top: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.footer__copyright {
		color: var(--text-color);
	}
</style>
