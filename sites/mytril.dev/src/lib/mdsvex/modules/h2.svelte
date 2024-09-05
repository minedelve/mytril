<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let id: string | undefined = undefined;

	let href = id && `#${id}`;
	onMount(function createSapperCompatiblePermalink() {
		if (id == null) {
			return;
		}

		href = window.location.origin + window.location.pathname + href;
	});
</script>

<h2 {id}>
	{#if id != undefined}
		<slot />
		<a {href}><Icon icon="ph:link-bold" /></a>
	{:else}
		<slot />
	{/if}
</h2>

<style lang="postcss">
	h2 {
		display: flex;

		a {
			align-items: center;
			color: transparent;
			float: left;
			margin-left: 0.5em;
			transition: color 0.25s;
			vertical-align: middle;
			display: flex;
		}

		&:hover {
			a {
				color: var(--c-primary);
			}
		}
	}
</style>
