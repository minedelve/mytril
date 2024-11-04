<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
</script>

<div class={className('my-spacer', _class)} {...$$restProps}></div>
