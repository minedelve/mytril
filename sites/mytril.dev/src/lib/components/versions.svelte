<script lang="ts">
	import { versions } from '$lib/store/packages';
	import { packageLink } from '$lib/store/router';
	import { capitalizeFirstLetter, clickOutside } from '$lib/utils';
	import Icon from '@iconify/svelte';

	let version: string | undefined = '0.0.0';
	let list: any[] = [];
	let nbLinks: number = 0;
	let open: boolean = false;

	$: {
		version = $versions.find((pkg) => pkg.name === 'mytril')?.version;
		list = $versions.filter((pkg) => pkg.name !== 'mytril');
		nbLinks = $packageLink.length;
	}
</script>

<div
	class="dropdown"
	role="list"
	use:clickOutside={() => nbLinks > 0 && (open = false)}
	on:mouseenter={() => nbLinks > 0 && (open = true)}
	on:mouseleave={() => nbLinks > 0 && (open = false)}
>
	<button
		class={`${open ? 'is-active' : ''}`}
		on:click={() => nbLinks > 0 && (open = open ? false : true)}
	>
		v{version}
	</button>

	<div role="list" class={`dropdown-content ${open ? 'show' : ''}`}>
		{#if nbLinks > 0}
			{#each $packageLink as { path, name }}
				<a href={path} target="_blank" on:click={() => (open = false)}>
					{capitalizeFirstLetter(name)}
					<Icon icon="mdi:external-link" />
				</a>
			{/each}
		{/if}

		<div class="divider" />
		{#each list as { name }}
			<a
				href={`https://www.npmjs.com/package/${name}`}
				class="other-package"
				target="_blank"
				on:click={() => (open = false)}
			>
				{capitalizeFirstLetter(name)}
				<Icon icon="mdi:external-link" />
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	button {
		padding: 0 12px;
		font-size: 13px;
		font-weight: 500;
		color: var(--c-text-1);
		transition: color 0.25s;
		white-space: nowrap;
		cursor: pointer;
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;

		&::before {
			margin-right: 0.5rem;
		}

		&::after {
			margin-left: 0.5rem;
		}

		&::before,
		&::after {
			width: 1px;
			height: 24px;
			background-color: var(--c-divider);
			content: '';
		}

		&:hover,
		&:focus,
		&.is-active {
			color: var(--c-text-2);
		}

		:global(svg) {
			font-size: 1.25rem;
		}
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--c-bg);
		border-radius: 0.5rem;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		padding: 0.5rem;
		transition:
			opacity 0.25s,
			visibility 0.25s,
			transform 0.25s;

		&.show {
			display: grid;
			visibility: visible;
			transform: translateY(0);
			gap: 0.25rem;
			right: 0px;
		}

		.divider {
			width: 100%;
			border-bottom: 1px solid lightgray;
		}
	}

	.other-package {
		display: block;
		border-radius: 8px;
		padding: 2px 12px;
		font-size: 11px;
		font-weight: 500;
		color: var(--c-text-3);
		white-space: nowrap;
		text-decoration: none;
		display: grid;
		align-items: center;
		justify-content: left;
		grid-template-columns: 1fr auto;
		transition:
			background-color 0.25s,
			color 0.25s;

		&:hover {
			color: var(--c-brand);
			background-color: var(--c-bg-soft);
		}

		:global(svg) {
			margin-left: 1rem;
		}
	}
	a {
		display: block;
		border-radius: 6px;
		padding: 4px 12px;
		font-size: 13px;
		font-weight: 500;
		color: var(--c-text-1);
		white-space: nowrap;
		text-decoration: none;
		display: grid;
		align-items: center;
		justify-content: left;
		grid-template-columns: 1fr auto;
		transition:
			background-color 0.25s,
			color 0.25s;

		&:hover {
			color: var(--c-brand);
			background-color: var(--c-bg-soft);
		}

		:global(svg) {
			margin-left: 1rem;
		}
	}
</style>
