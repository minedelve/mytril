<script lang="ts">
	import { className } from '$lib/utils/dom.js';

	// props
	let _class: string | undefined = undefined;
	export { _class as class };
	export let aspectRatio: string | undefined = undefined;
	export let inline: boolean = false;

	// state
	$: paddingBottom = 100;

	$: {
		if (aspectRatio) {
			const [width, height] = aspectRatio.split('/').map(Number);
			paddingBottom = (height / width) * 100;
		}
	}
</script>

<div
	class={className('myt-responsive', _class)}
	class:myt-responsive--inline={inline}
	{...$$restProps}
>
	<div class="myt-responsive--sizer" style={`padding-bottom: ${paddingBottom}%;`}></div>
	<slot />
</div>
