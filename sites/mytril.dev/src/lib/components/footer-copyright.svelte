<script lang="ts">
	import { onMount } from 'svelte';

	$: year = 2024; // start project

	onMount(() => {
		const date = new Date();
		year = date.getFullYear();
	});
</script>

<footer>
	<p class="license">
		Released under the
		<a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
			MIT License
		</a>
	</p>
	<p class="copyright">
		Copyright ©{year}
		<a href="https://minedelve.com" target="_blank" rel="noopener noreferrer"> Minedelve </a>
	</p>
</footer>

<style lang="postcss">
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		align-items: center;
		margin-bottom: 1rem;
	}

	p {
		margin: 0;
		text-align: center;
		line-height: 20px;
		font-size: 12px;
		font-weight: 500;
		color: var(--c-text-2);
		transition: color 0.25s;
	}

	a {
		text-decoration: none;
		color: var(--c-text-3);
		opacity: 0.6;

		&:hover {
			opacity: 1;
			color: var(--c-brand);
		}
	}
</style>
