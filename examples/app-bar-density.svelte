<script lang="ts">
	import { Btn, Divider, Icon, AppBar, AppBarTitle, Spacer } from 'mytril/components';
</script>

<div id="app-bar-density">
	<AppBar density="compact">
		<AppBarTitle>Compact</AppBarTitle>
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

	<AppBar>
		<AppBarTitle>Default</AppBarTitle>
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

	<AppBar desnity="comfortable">
		<AppBarTitle>Comfortable</AppBarTitle>
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
	#app-bar-density {
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
		margin: 0.5rem 0;
		width: 80%;
	}
</style>
