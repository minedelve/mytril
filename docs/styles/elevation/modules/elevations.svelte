<script lang="ts">
	export let datas;

	console.log('datas', datas);
</script>

<div class="usage-preview">
	{#each Object.entries(datas) as [key, value]}
		<div class={`block-card elevation-${key}`}>{key}</div>
	{/each}
</div>

<style>
	.block-card {
		width: 100px;
		height: 100px;
		background-color: var(--sky-3);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.usage-preview {
		display: grid;
		grid-template-rows: 1fr;
		gap: 1.5rem;
		grid-template-columns: repeat(2, calc(100% / 2 - 1rem));

		@media (min-width: 420px) {
			grid-template-columns: repeat(3, calc(100% / 3 - 1rem));
		}

		@media (min-width: 748px) {
			grid-template-columns: repeat(5, calc((100% / 5 - 1rem)));
		}
	}
</style>
