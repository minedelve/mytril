<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip>
	<Btn>See my message</Btn>

	{#snippet tooltip()}
		<div style="max-width: 200px;">
			<p>Tooltip Custom Content</p>
			<p>
				It's magic, it's just a well-placed Mytril snippet! By the gods, if it doesn't work, I swear
				on my keyboard I'll switch to agriculture! Again!
			</p>
		</div>
	{/snippet}
</Tooltip>
