<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<div id="tooltip-density">
	<Tooltip label="Small tooltip" density="compact">
		<Btn>Compact</Btn>
	</Tooltip>

	<Tooltip label="Default style">
		<Btn>Default</Btn>
	</Tooltip>

	<Tooltip label="It's large !" density="comfortable">
		<Btn>Comfortable</Btn>
	</Tooltip>
</div>

<style>
	#tooltip-density {
		display: flex;
		gap: 0.5rem;
	}
</style>
