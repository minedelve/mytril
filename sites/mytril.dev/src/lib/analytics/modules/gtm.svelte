<script lang="ts">
	$: {
		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag('consent', 'default', {
				ad_storage: 'denied',
				analytics_storage: 'denied',
				functionality_storage: 'denied'
			});
		}
	}
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtm.js?id=`}>
	</script>
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		src="https://www.googletagmanager.com/ns.html?id="
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
