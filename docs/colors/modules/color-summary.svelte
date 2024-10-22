<script lang="ts">
	export let name: string = '';
	export let color: any = [];
</script>

<a href={`#${name}`} style={`--v-hover: ${color.hex}`}>
	<span style={`background-color: ${color.hex}`} />
	{name}
</a>

<style lang="postcss">
	a {
		display: block;
		padding: 6px 0;
		width: 100%;
		font-size: 12px;
		color: var(--c-text-2);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.2s ease-out;
		text-decoration: none;

		&:hover {
			color: var(--v-hover);
		}

		& span {
			display: inline-block;
			margin-top: -2px;
			margin-right: 10px;
			width: 12px;
			height: 12px;
			border-radius: 3px;
			vertical-align: middle;
		}
	}
</style>
