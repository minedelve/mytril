<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<div class="flex gap-2">
	<Tooltip label="Wow it's a default style tootlip">
		<Btn>Default</Btn>
	</Tooltip>

	<Tooltip label="OMG arrow discover !" variant="arrow">
		<Btn>Arrow</Btn>
	</Tooltip>
</div>
