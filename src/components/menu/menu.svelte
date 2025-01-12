<script lang="ts">
	import { getPositions } from './menu.svelte.js';

	let { activator } = $props();

	// let refElement: HTMLElement | null = $state(null);
	let open = $state(false);
	let axis = $state({ x: 0, y: 0 });

	let model = {
		get open() {
			return open;
		},
		close: () => (open = false),
		toggle: (element: HTMLElement) => testToggle(element)
	};

	const testToggle = (element: HTMLElement) => {
		// const target = event.target as HTMLElement;
		console.log('testToggle', element);
		const newPosition = getPositions(element);

		if (newPosition?.values) axis = newPosition?.values;
		open = !open;
	};

	let value = 'demo';

	$effect(() => {
		console.log('open', open);
	});
</script>

{@render activator?.(value, model)}

{#if open}
	<div
		class="element bloc position"
		style={`transform: translate(${axis.x}px, ${axis.y}px);opacity: 0.5; background: orange; padding: 10px; position: fixed;`}
	>
		menu position test
	</div>
{/if}

<!-- {#if open}
	<div>
		{@render children?.()}
	</div>
{/if} -->

<!-- <Menu name="obiwan">
			{#snippet activator(value: any, model: any)}
				<button bind:this={refElement} onclick={() => model.toggle(refElement)}>
					button {model.open}

					<div>
						Event Click {model.open}
					</div>
				</button>
			{/snippet}
		</Menu> -->
