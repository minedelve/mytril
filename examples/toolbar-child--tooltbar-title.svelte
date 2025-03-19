<script lang="ts">
	import { Toolbar, ToolbarTitle } from 'mytril/components';
</script>

<div id="toolbar-child--tooltbar-title">
	<Toolbar variant="outline" style="background-color: var(--color-surface); width: 100%;">
		<ToolbarTitle>Title</ToolbarTitle>
	</Toolbar>
</div>

<style>
	#toolbar-child--tooltbar-title {
		display: flex;
		margin: 0.5rem 0;
		width: 80%;
	}
</style>
