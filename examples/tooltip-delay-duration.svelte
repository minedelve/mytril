<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<div id="tooltip-delay-duration">
	<Tooltip label="Hey !" delayDuration="0">
		<Btn>0 ms</Btn>
	</Tooltip>

	<Tooltip label="Hey !">
		<Btn>Default 850ms</Btn>
	</Tooltip>

	<Tooltip label="Hey !" delayDuration="2000">
		<Btn>2s</Btn>
	</Tooltip>
</div>

<style>
	#tooltip-delay-duration {
		display: flex;
		gap: 0.5rem;
	}
</style>
