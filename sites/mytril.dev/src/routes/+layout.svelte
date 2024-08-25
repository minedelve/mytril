<script lang="ts">
	import '$lib/styles/fonts.css';
	import '$lib/styles/code.css';
	import '$lib/styles/doc.css';
	import '../app.css';

	import Tracking from '$lib/analytics/tracking.svelte';
	import Rgpd from '$lib/components/rgpd.svelte';
	import FooterCopyright from '$lib/components/footer-copyright.svelte';
</script>

<Tracking />

<slot />

<FooterCopyright />

<Rgpd />
