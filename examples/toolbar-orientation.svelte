<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<div id="toolbar-orientation">
	<Toolbar variant="outline" style="background-color: var(--color-surface)" orientation="vertical">
		<Btn icon size="sm" variant="text" active>
			<Icon icon="font:mgc_bold_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_italic_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_strikethrough_fill" />
		</Btn>

		<Divider style="margin-top: 0.25rem; margin-bottom: 0.25rem;" />

		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_align_left_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_align_justify_fill" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_align_right_fill" />
		</Btn>
	</Toolbar>
</div>

<style>
	#toolbar-orientation {
		display: flex;
		margin: 0.5rem 0;
	}
</style>
