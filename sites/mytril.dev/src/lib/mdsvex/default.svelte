<script lang="ts">
	import { onMount } from 'svelte';

	export let form;
	export let data;
	onMount(() => {
		console.log('form', form, 'data', data);
	});
</script>

<slot />
