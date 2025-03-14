<script lang="ts">
	import { Btn, Icon, Tooltip } from 'mytril/components';
</script>

<div class="grid grid-cols-[1fr_1fr] gap-2">
	<Tooltip label="Tooltip top" location="top">
		<Btn>
			Top
			{#snippet append()}
				<Icon icon="font:mgc_arrow_up_fill" />
			{/snippet}
		</Btn>
	</Tooltip>

	<Tooltip label="Tooltip bottom" location="bottom">
		<Btn>
			Bottom
			{#snippet append()}
				<Icon icon="font:mgc_arrow_down_fill" />
			{/snippet}
		</Btn>
	</Tooltip>

	<Tooltip label="Tooltip left" location="left">
		<Btn>
			Left
			{#snippet append()}
				<Icon icon="font:mgc_arrow_left_fill" />
			{/snippet}
		</Btn>
	</Tooltip>

	<Tooltip label="Tooltip right" location="right">
		<Btn>
			Right
			{#snippet append()}
				<Icon icon="font:mgc_arrow_right_fill" />
			{/snippet}
		</Btn>
	</Tooltip>
</div>
