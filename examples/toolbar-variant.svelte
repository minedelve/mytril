<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<div id="toolbar-variant">
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

	<Toolbar variant="outline">
		<Btn variant="text">Outline</Btn>
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

	<Toolbar variant="text">
		<Btn variant="text">Text</Btn>
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

	<Toolbar variant="dash">
		<Btn variant="text">dash</Btn>
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
	#toolbar-variant {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 0.5rem 0;
	}
</style>
