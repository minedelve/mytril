<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { eventNoScroll, getCookie, setCookie } from '$lib/utils';

	let dialog: { showModal: () => void; close: () => void };
	$: open = false;

	onMount(() => {
		const cookie = getCookie('consent');
		if (!cookie) {
			open = true;
		} else {
			// @ts-ignore
			if (typeof gtag !== 'undefined') {
				// @ts-ignore
				gtag('consent', 'update', {
					ad_storage: cookie === 'accept' ? 'granted' : 'denied',
					analytics_storage: cookie === 'accept' ? 'granted' : 'denied',
					functionality_storage: cookie === 'accept' ? 'granted' : 'denied'
				});
			}
		}
	});

	function handleSetConsentMode(state: string) {
		setCookie('consent', state);
		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag('consent', 'update', {
				ad_storage: state === 'accept' ? 'granted' : 'denied',
				analytics_storage: state === 'accept' ? 'granted' : 'denied',
				functionality_storage: state === 'accept' ? 'granted' : 'denied'
			});
		}

		open = false;
	}

	$: {
		if (dialog && open) dialog.showModal();
		if (dialog && !open) dialog.close();
		eventNoScroll(open ? 'active' : 'disable');
	}
</script>

<dialog bind:this={dialog}>
	<!-- surcharge-dialog autofocus-action-element -->
	<button type="button" class="close-dialog">close</button>
	<div class="dialog-container">
		<div class="card">
			<div>
				<p><strong>Mytril respects your privacy</strong></p>
				<button on:click={() => handleSetConsentMode('refuse')}>Decline all</button>
			</div>
			<p>
				Mytril and our partners use cookies or similar technologies to enable us to improve the
				site, your experience and to ensure the proper functioning of the site, to collect
				statistics in order to optimize the services offered, and to adapt Mytril's content.
			</p>
			<div>
				<button class="accept" on:click={() => handleSetConsentMode('accept')}
					>Accept all <Icon icon="ic:round-keyboard-arrow-right" /></button
				>
			</div>
		</div>
	</div>
</dialog>

<style lang="postcss">
	dialog {
		--backdrop: #0a0a0a;
		border: 0;
		padding: 0;
		margin: auto;
		width: 100%;
		max-width: none;
		background-color: transparent;
		color: inherit;
	}

	dialog::backdrop {
		background-color: color-mix(in oklab, var(--backdrop) 30%, transparent);
		animation: fade 0.2s ease-out;
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	dialog[open] {
		pointer-events: auto;
		visibility: visible;
		opacity: 1;
	}

	dialog .dialog-container {
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
		transition-duration: 0.2s;
	}

	dialog .card {
		max-width: 500px;
		max-height: calc(100% - 3rem);
		margin: 0 auto;

		background-color: var(--c-bg-soft);
		color: var(--c-text);
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 2rem;
		text-align: start;
	}

	dialog .dialog-container > * {
		max-height: calc(100% - 3rem);
		margin: 0 auto;
	}

	dialog .close-dialog {
		opacity: 0;
		position: fixed;
		top: 0;
		z-index: -1;
	}

	.dialog-container > div {
		padding: 1.5rem;

		& > div {
			display: flex;
			align-items: center;
			min-height: 4rem;
			width: 100%;

			& p {
				font-size: 1.25rem;
			}

			& button {
				margin-left: auto;
				height: 2rem;
				min-height: 2rem;
				padding-left: 0.75rem;
				padding-right: 0.75rem;
				font-size: 0.875rem;
				user-select: none;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				flex-shrink: 0;
				cursor: pointer;
				display: inline-flex;
				line-height: 1em;
				gap: 0.5rem;
				font-weight: 600;
				text-align: center;
				border-radius: 0.25rem;
				border: 0;
				background-color: var(--c-bg-soft);
				color: var(--c-text);

				&:hover {
					background-color: var(--c-bg-mute);
				}

				&.accept {
					height: 3rem;
					min-height: 3rem;
					padding-left: 1rem;
					padding-right: 1rem;
					font-size: 1.15rem;
					border-radius: 9999px;
					background-color: var(--c-text);
					color: var(--c-bg);
				}
			}
		}
	}

	/* @keyframes */
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
