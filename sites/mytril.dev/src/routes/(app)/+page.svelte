<script lang="ts">
	import Seo from '$lib/components/seo.svelte';
	import Icon from '@iconify/svelte';
</script>

<Seo />

<div class="welcome">
	<div class="container">
		<h1>One <span>component library</span> <br /> for build all</h1>
		<p>
			A powerful, simple and customizable Svelte component library for creating web user interfaces.
		</p>

		<div class="links">
			<a class="get-started" href="/docs/introduction">Get Started <Icon icon="lucide:pickaxe" /></a
			>
		</div>
	</div>
</div>

<style lang="postcss">
	.welcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		min-height: calc(100vh - var(--nav-height));
		align-items: center;
	}

	.welcome .container {
		padding: 56px 12px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.welcome .container h1 {
		font-size: 48px;
		letter-spacing: -0.5px;
		line-height: 1.25;
		font-weight: 900;
		max-width: 960px;
		margin: 0 auto;

		@media (min-width: 794px) {
			font-size: 64px;
			letter-spacing: -0.5px;
		}

		@media (min-width: 960px) {
			font-size: 76px;
			letter-spacing: -1.5px;
		}
	}
	.welcome .container span {
		color: var(--c-primary);
	}

	.welcome .container p {
		font-size: 16px;
		margin: 18px 0 30px;
		max-width: 960px;
		line-height: 1.5;
		color: var(--c-text-soft);
		transition: color 0.5s;

		@media (min-width: 576px) {
			font-size: 18px;
			margin-bottom: 48px;
		}

		@media (min-width: 960px) {
			font-size: 22px;
			margin: 24px auto 40px;
		}
	}

	.links {
		text-align: center;
		display: flex;
		gap: 1rem;
	}

	a {
		align-items: center;
		border-radius: 8px;
		display: flex;
		font-size: 16px;
		font-weight: 600;
		padding: 0.5rem 1em 0.5rem 1rem;
		transition:
			background-color 0.5s,
			color 0.5s;
		background-color: var(--c-bg-soft);
		color: var(--c-text-soft);
		justify-content: center;
		text-decoration: none;

		&:hover {
			background-color: var(--c-bg-mute);
		}

		&.get-started {
			background-color: var(--c-primary);
			color: white;
		}
	}

	a :global(svg) {
		height: 16px;
		width: 16px;
		margin: 0 0.5rem;
	}
</style>
