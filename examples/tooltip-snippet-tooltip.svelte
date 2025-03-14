<script lang="ts">
	import { Btn, Tooltip } from 'mytril/components';
</script>

<Tooltip>
	<Btn>See my message</Btn>

	{#snippet tooltip()}
		<p>Tooltip custom content</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio, dignissimos
			sapiente error temporibus dolorum ipsam nobis harum nulla facere tempore perferendis ullam ut
			quibusdam quisquam corrupti aut exercitationem quasi!
		</p>
	{/snippet}
</Tooltip>
