<script lang="ts">
	import { Btn, Icon, Tooltip } from 'mytril/components';
</script>

<Tooltip>
	<Btn>
		Hover me !
		{#snippet append()}
			<Icon icon="font:mgc_cursor_3_line" />
		{/snippet}
	</Btn>

	{#snippet tooltip()}
		<img
			src="/images/mytril/angry-spongebob-squarepants-strong.gif"
			alt="angry spongebob squarepants strong"
		/>
	{/snippet}
</Tooltip>
