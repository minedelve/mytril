<script lang="ts">
	import '$lib/styles/fonts.css';
	import '$lib/styles/code.css';
	import '$lib/styles/doc.css';
	import '../app.css';

	import FooterCopyright from '$lib/components/footer-copyright.svelte';
</script>

<slot />

<FooterCopyright />
