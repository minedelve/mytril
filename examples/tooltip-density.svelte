<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<div class="flex gap-2">
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
