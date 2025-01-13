<script lang="ts">
	import { getPositions } from './menu.svelte.js';

	let { activator, location } = $props();

	let ref: HTMLElement | null = $state(null);
	let refActivator: HTMLElement | PointerEvent | null = $state(null);
	let open = $state(false);
	let axis = $state({ x: 0, y: 0 });

	let model = {
		get open() {
			return open;
		},
		close: () => (open = false),
		toggle: (element: HTMLElement | PointerEvent) => testToggle(element)
	};

	const testToggle = (element: HTMLElement | PointerEvent) => {
		// const target = event.target as HTMLElement;
		console.log('testToggle', element, ref);
		refActivator = element;
		open = !open;
	};

	let value = 'demo';

	// $effect(() => {
	// 	console.log('open', open, ref);
	// 	if (open && refActivator && ref) {
	// 		const newPosition = getPositions(refActivator, ref);
	// 		if (newPosition?.values) axis = newPosition?.values;
	// 	}
	// });

	const position = getPositions();

	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let scrollX = $state(0);
	let scrollY = $state(0);

	// $effect(() => {
	// 	console.log('UPDATEDDDD');

	// 	if (open && ref && refActivator) position.update(refActivator, ref);
	// });

	$effect(() => {
		if (open && ref && refActivator) {
			if (scrollX || scrollY || innerHeight || innerWidth) {
				position.update(refActivator, ref, location);
			}
		}
		console.log('scrollY', scrollY);
	});

	axis = position?.values;
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollX bind:scrollY />

{@render activator?.(value, model)}

<!-- style={`transform: translate(${axis.x}px, ${axis.y}px);opacity: 0.5; background: orange; padding: 10px; position: absolute;`} -->
<!-- style={`left:${axis.x}px; top:${axis.y}px; opacity: 0.5; background: orange; padding: 10px; position: absolute;`} -->
{#if open}
	<div
		bind:this={ref}
		role="menu"
		class="myt-menu-content"
		style={`transform: translate(${axis.x}px, ${axis.y}px);`}
	>
		<div>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 4</div>
			<div>Icon - Acces to params - Icon - Effect</div>
		</div>
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
