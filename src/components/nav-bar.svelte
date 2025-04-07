<script>
	const links = [
		{
			href: '#',
			label: 'Overview'
		},
		{
			href: '#experience',
			label: 'Experience'
		},
		{
			href: '#projects',
			label: 'Projects'
		},
		{
			href: '#contact',
			label: 'Contact'
		}
	];
</script>

<nav class="nav-bar">
	<ul class="nav-bar__links">
		{#each links as link}
			<li class="nav-bar__link-item">
				<a class="nav-bar__link" href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav-bar {
		width: 100%;
		height: 50px;
		margin: auto;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-bar__links {
		background: transparent;
		backdrop-filter: blur(10px);
		display: flex;
		flex-direction: row;
		border-radius: 100px;
		padding-inline: 1em;
		padding-block: 0.2em;

		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}

	.nav-bar__link {
		padding-block: 0.20rem;
		padding-inline: 0.7em;
		border-radius: 1000px;
		vertical-align: middle;
		font-size: 0.9rem;
	}

	.nav-bar__link:hover {
		background-color: red;
	}

	
</style>
