<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<div id="tooltip-variant">
	<Tooltip label="Wow it's a default style tootlip">
		<Btn>Default</Btn>
	</Tooltip>

	<Tooltip label="OMG arrow discover !" variant="arrow">
		<Btn>Arrow</Btn>
	</Tooltip>
</div>

<style>
	#tooltip-variant {
		display: flex;
		gap: 0.5rem;
	}
</style>
