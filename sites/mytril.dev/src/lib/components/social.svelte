<script lang="ts">
	import Icon from '@iconify/svelte';
	import { social } from '$lib/store/router';
</script>

<div>
	{#each $social as social}
		<a href={social.path} target="_blank">
			<Icon icon={social.icon} />
		</a>
	{/each}
</div>

<style lang="postcss">
	div {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	a {
		text-decoration: inherit;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--c-text-soft);
		transition: color 0.5s;
		width: 36px;
		height: 36px;

		& :global(svg) {
			fill: currentColor;
			height: 24px;
			width: 24px;
		}
		&:hover {
			color: var(--c-text);
			transition: color 0.25s;
		}
	}
</style>
