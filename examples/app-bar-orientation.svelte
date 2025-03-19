<script lang="ts">
	import { Btn, Icon, AppBar, Spacer } from 'mytril/components';
</script>

<div id="app-bar-orientation">
	<AppBar orientation="vertical" style="height: 200px;">
		<Btn icon variant="text">
			<Icon icon="font:mgc_home_1_line" />
		</Btn>

		<Spacer />

		<Btn icon variant="text">
			<Icon icon="font:mgc_share_2_line" />
		</Btn>

		<Btn icon variant="text" active>
			<Icon icon="font:mgc_bilibili_line" />
		</Btn>
	</AppBar>
</div>

<style>
	#app-bar-orientation {
		display: flex;
	}
</style>
