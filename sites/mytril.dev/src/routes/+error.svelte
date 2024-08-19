<script>
	import { page } from '$app/stores';
	import AppBar from '$lib/components/app-bar.svelte';
	import Seo from '$lib/components/seo.svelte';

	// we don't want to use <svelte:window bind:online> here, because we only care about the online
	// state when the page first loads
	let online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>


<Seo title={String($page.status)} />

<AppBar app />

<section>
	{#if online}
		<h1>O.o This page have problem!</h1>

		{#if $page && $page.error?.message}
			<p class="error">{$page.status}: {$page.error.message}</p>
		{/if}

		<p>Please try reloading the page.</p>

		<p>
			If the error persists, please drop by Discord chatroom
			and let us know, or raise an issue on
			<a href="https://github.com/minedelve/mytril" target="_blank">GitHub</a>. Thanks!
		</p>
	{:else}
		<h1>It looks like you're offline</h1>

		<p>Reload the page once you've found the internet.</p>
	{/if}
</section>

<style>
	section {
		margin-top: var(--nav-bar-height);
		min-height: calc(100vh - (var(--nav-bar-height) * 3));
		text-align: center;
	}




	p {
		margin: 1em auto;
	}

	.error {
		background-color: rgb(218, 16, 36);
		color: white;
		padding: 12px 16px;
		border-radius: 2px;
	}
</style>