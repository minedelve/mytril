<script lang="ts">
	let _class: string = '';
	export { _class as class };
</script>

<button class={_class} on:click>
	<slot />
</button>

<style lang="postcss">
	button {
		cursor: pointer;
		border: 0;
		display: block;
		font-size: 12px;
		font-weight: 500;
		line-height: 24px;
		color: var(--c-text-soft);
		transition: color 0.5s;
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		height: fit-content;

		padding: 0 24px;
		background-color: transparent;
		background-image: none;

		&:hover {
			color: var(--c-text);
			transition: color 0.25s;
		}
	}
</style>
