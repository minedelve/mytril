<script lang="ts">
	import { Btn, Divider, Icon, Toolbar } from 'mytril/components';
</script>

<Toolbar variant="outline" style="background-color: var(--color-surface)">
	<Btn icon size="sm" variant="text" active>
		<Icon icon="font:mgc_bold_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_italic_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_strikethrough_fill" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_align_left_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_align_justify_fill" />
	</Btn>
	<Btn icon size="sm" variant="text">
		<Icon icon="font:mgc_align_right_fill" />
	</Btn>

	<Divider vertical style="margin-left: 0.25rem; margin-right: 0.25rem;" />

	<Btn size="md" variant="text">
		{#snippet prepend()}
			<Icon icon="font:mgc_save_2_line" />
		{/snippet}
		Save
	</Btn>
</Toolbar>
