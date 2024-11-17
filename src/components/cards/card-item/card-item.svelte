<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
</script>

<div class={className('myt-card-item', _class)} {...$$restProps}>
	{#if $$slots.prepend}
		<div class="myt-card-item--prepend">
			<!-- slot: prepend -->
			<slot name="prepend" />
			<!-- /slot: prepend -->
		</div>
	{/if}

	<div class="myt-card-item--content">
		<!-- slot: default -->
		<slot />
		<!-- /slot: default -->
	</div>

	{#if $$slots.append}
		<div class="myt-card-item--append">
			<!-- slot: append -->
			<slot name="append" />
			<!-- /slot: append -->
		</div>
	{/if}
</div>
