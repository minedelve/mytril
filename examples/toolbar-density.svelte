<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<div id="toolbar-density">
	<Toolbar density="compact">
		<Btn variant="text">Compact</Btn>
		<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
		<Btn icon size="sm" variant="text" active>
			<Icon icon="font:mgc_large_arrow_down_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_left_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_right_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_up_fill" />
		</Btn>
	</Toolbar>

	<Toolbar>
		<Btn variant="text">Default</Btn>
		<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
		<Btn icon size="sm" variant="text" active>
			<Icon icon="font:mgc_large_arrow_down_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_left_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_right_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_up_fill" />
		</Btn>
	</Toolbar>

	<Toolbar density="comfortable">
		<Btn variant="text">Comfortable</Btn>
		<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />
		<Btn icon size="sm" variant="text" active>
			<Icon icon="font:mgc_large_arrow_down_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_left_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_right_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_large_arrow_up_fill" />
		</Btn>
	</Toolbar>
</div>

<style>
	#toolbar-density {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		margin: 0.5rem 0;
	}
</style>
