<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// let { class: className = '' } = $props();

	// let { class }: { class: string | undefined } = $props();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// let { ...others }: any = $props();

	let { class: _class, ...props }: any = $props();
</script>

<!-- let _class: string | false | undefined = undefined;
	export { _class as class }; -->

<!-- <div class:my-spacer={true}   {...props}>spacer</div> -->

<!-- <div class={'my-spacer' + _class} {...props}>spacer</div> -->
<!-- <div class="my-spacer {_class}" {...props}>spacer</div> -->
<div class={className('my-spacer', _class)} {...props}>spacer</div>
