<script lang="ts">
	import { versions } from '$lib/store/packages';

	let version: string | undefined = '0.0.0';

	$: {
		version = $versions.find((pkg) => pkg.name === 'mytril')?.version;
	}
</script>

<p>v{version}</p>

<style lang="postcss">
	p {
		font-size: 12px;
		padding: 3px 5px;
		background: var(--c-bg-mute);
		border-radius: 7px;
		margin-left: 14px;

		@media (min-width: 768px) {
			display: none;
		}
	}
</style>
