<!-- <script lang="ts">
	import { onMount } from 'svelte';

	let headings: any[] = [];

	onMount(() => {
		const pageElement = document.getElementById('page');
		if (pageElement) {
			headings = Array.from(pageElement.querySelectorAll('h2, h3')).map((heading) => ({
				id: heading.id,
				text: heading.textContent,
				level: heading.tagName.toLowerCase()
			}));
		}
	});
</script> -->

<!-- <script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	interface Heading {
		id: string;
		text: string;
		level: string;
	}

	let headings: Heading[] = [];
	let activeId = writable<string | null>(null);

	onMount(() => {
		const pageElement = document.getElementById('page');
		if (pageElement) {
			headings = Array.from(pageElement.querySelectorAll<HTMLHeadingElement>('h2, h3')).map(
				(heading) => ({
					id: heading.id,
					text: heading.textContent || '',
					level: heading.tagName.toLowerCase()
				})
			);

			window.addEventListener('scroll', onScroll);
			onScroll();
		}

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	function onScroll() {
		const scrollPosition = window.scrollY + window.innerHeight / 2;

		let currentId: string | null = null;
		for (const heading of headings) {
			const element = document.getElementById(heading.id);
			if (element && element.offsetTop <= scrollPosition) {
				currentId = heading.id;
			}
		}
		activeId.set(currentId);
	}
</script> -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	interface Heading {
		id: string;
		text: string;
		level: string;
	}

	let headings: Heading[] = [];
	let activeId = writable<string | null>(null);
	const offset = 86; // Hauteur de la barre de navigation

	$: {
		if (browser && $page.url.pathname) {
			const pageElement = document.getElementById('page');

			if (pageElement) {
				headings = Array.from(pageElement.querySelectorAll<HTMLHeadingElement>('h2, h3')).map(
					(heading) => ({
						id: heading.id,
						text: heading.textContent || '',
						level: heading.tagName.toLowerCase()
					})
				);

				window.addEventListener('scroll', onScroll);
				onScroll();
			}
		}
	}

	onMount(() => {
		const pageElement = document.getElementById('page');

		if (pageElement) {
			headings = Array.from(pageElement.querySelectorAll<HTMLHeadingElement>('h2, h3')).map(
				(heading) => ({
					id: heading.id,
					text: heading.textContent || '',
					level: heading.tagName.toLowerCase()
				})
			);

			window.addEventListener('scroll', onScroll);
			onScroll();
		}
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	function onScroll() {
		const scrollPosition = window.scrollY + offset;

		let currentId: string | null = null;
		for (const heading of headings) {
			const element = document.getElementById(heading.id);
			if (element) {
				const rect = element.getBoundingClientRect();
				if (rect.top <= offset * 2) {
					currentId = heading.id;
				}
			}
		}
		activeId.set(currentId);
	}

	function handleLinkClick(event: MouseEvent, id: string) {
		event.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top: elementPosition, behavior: 'smooth' });
		}
	}
</script>

<aside>
	<div class="summary">
		<p>On this page</p>
		<nav>
			<ul>
				{#each headings as { id, text, level }}
					<li class={level}>
						<a
							href={`#${id}`}
							class={$activeId === id ? 'active' : ''}
							on:click={(event) => handleLinkClick(event, id)}>{text}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</aside>

<style lang="postcss">
	aside {
		display: none;

		& .summary {
			position: fixed;
			padding-top: 48px;

			& p {
				font-weight: 700;
				margin-bottom: 4px;
				text-transform: uppercase;
				font-size: 11px;
				letter-spacing: 0.4px;
			}

			& nav {
				& ul {
					list-style: none;
					margin: 0;
					padding: 0;
					font-size: 13px;
					font-weight: 500;

					& .h3 {
						margin-left: 0.75rem;
					}

					& a {
						text-decoration: inherit;
						color: var(--c-text-soft);
						transition: color 0.5s;
						line-height: 28px;
						display: block;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;

						&:hover {
							color: var(--c-text);
							transition: color 0.25s;
						}

						&.active {
							color: var(--c-primary);
							transition: color 0.25s;
						}
					}
				}
			}
		}

		@media (min-width: 1320px) {
			display: block;
		}
	}
</style>
