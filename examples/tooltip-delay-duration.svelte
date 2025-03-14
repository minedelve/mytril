<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<div class="flex gap-2">
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
