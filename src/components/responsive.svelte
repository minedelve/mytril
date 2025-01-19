<script lang="ts">
	import type { ResponsiveProps } from '$lib/types/index.js';
	let { children, aspectRatio, inline, ...rest }: ResponsiveProps = $props();

	let paddingBottom = $state(100);

	$effect(() => {
		if (aspectRatio) {
			const [width, height] = aspectRatio.split('/').map(Number);
			paddingBottom.set((height / width) * 100);
		}
	});
</script>

<div {...rest} class={['myt-responsive', inline && 'myt-responsive--inline', rest.class]}>
	<div class="myt-responsive--sizer" style={`padding-bottom: ${paddingBottom}%;`}></div>
	{@render children?.()}
</div>
