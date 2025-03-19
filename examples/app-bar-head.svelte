<script lang="ts">
	import { Btn, Divider, Icon, AppBar, AppBarTitle, Spacer } from 'mytril/components';
</script>

<div id="app-bar-head">
	<AppBar>
		<AppBarTitle>App Title</AppBarTitle>
		<Spacer />

		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_home_1_line" />
		</Btn>
		<Btn icon size="sm" variant="text">
			<Icon icon="font:mgc_share_2_line" />
		</Btn>

		<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

		<Btn size="md" variant="text">
			{#snippet prepend()}
				<Icon icon="font:mgc_bilibili_line" />
			{/snippet}
			Docs
		</Btn>
	</AppBar>
</div>

<style>
	#app-bar-head {
		display: flex;
		width: 80%;
	}
</style>
