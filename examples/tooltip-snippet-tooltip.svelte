<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip>
	<Btn>See my message</Btn>

	{#snippet tooltip()}
		<div style="max-width: 200px;">
			<p>Tooltip custom content</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio, dignissimos
				sapiente error temporibus dolorum ipsam nobis harum nulla facere tempore perferendis ullam
				ut quibusdam quisquam corrupti aut exercitationem quasi!
			</p>
		</div>
	{/snippet}
</Tooltip>
