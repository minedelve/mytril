<script lang="ts">
	export let datas;
	export let property;

	console.log('datas', datas);
</script>

<div class="usage-preview">
	{#each Object.entries(datas) as [key, value]}
		<div class="wrapper-card">
			<div
				class={`block-card ${key === 'default' ? `.rounded${property ? '-' + property : ''}` : `.rounded${property ? '-' + property : ''}-` + key}`}
			/>
			<p>
				{key === 'default'
					? `.rounded${property ? '-' + property : ''}`
					: `.rounded${property ? '-' + property : ''}-${key}`}
			</p>
		</div>
	{/each}
</div>

<style>
	.wrapper-card {
		display: grid;
		justify-content: center;
		align-items: center;
	}
	.wrapper-card p {
		font-size: 0.65rem;
		margin-top: 0.5rem;
	}
	.block-card {
		width: 50px;
		height: 50px;
		background-color: var(--c-sky-3);
		margin: 0 auto;
	}

	.usage-preview {
		display: grid;
		grid-template-rows: 1fr;
		gap: 0.5rem;
		grid-template-columns: repeat(3, calc(100% / 3 - 0.5rem));

		@media (min-width: 420px) {
			grid-template-columns: repeat(5, calc(100% / 5 - 0.5rem));
		}

		@media (min-width: 748px) {
			grid-template-columns: repeat(7, calc((100% / 7 - 0.5rem)));
		}
	}
</style>
