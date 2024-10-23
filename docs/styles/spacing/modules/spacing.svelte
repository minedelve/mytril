<script lang="ts">
	export let datas;

	const properties = ['a', 't', 'b', 'l', 'r', 'x', 'y'];

	let stylePadding = 'a';
	let sizingPadding = '0';
	let styleMargin = 'a';
	let sizingMargin = '0';
</script>

<select bind:value={stylePadding}>
	{#each properties as property}
		<option value={property}>
			{property}
		</option>
	{/each}
</select>

<select bind:value={sizingPadding}>
	{#each Object.entries(datas) as [key, value]}
		<option value={key}>
			{key}
		</option>
	{/each}
</select>

<select bind:value={styleMargin}>
	{#each properties as property}
		<option value={property}>
			{property}
		</option>
	{/each}
</select>

<select bind:value={sizingMargin}>
	<option value={'auto'}> auto </option>
	{#each Object.entries(datas) as [key, value]}
		<option value={key}>
			{key}
		</option>
	{/each}
	{#each Object.entries(datas) as [key, value]}
		{#if key !== '0'}
			<option value={`n${key}`}>
				n{key}
			</option>
		{/if}
	{/each}
</select>

<div class="wrapper">
	<div class="element">
		<div class={`margin-spacing m${styleMargin}-${sizingMargin}`}>
			<div class={`padding-spacing m${stylePadding}-${sizingPadding}`}>
				<div class="spacing-element">
					Use the controls above to try out the different spacing helpers.
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	.element {
		flex: 0 0 100%;
		max-width: 100%;
		width: 100%;
		background-color: var(--purple-2);
	}

	.margin-spacing {
		display: block;
	}

	.padding-spacing {
		display: block;
		background-color: var(--lime-2);
	}

	.spacing-element {
		display: block;
		background-color: var(--c-bg);
	}
</style>
