<script lang="ts">
	import { docs } from '$lib/store/router';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let open: boolean = false;
	let search: string = '';
	let focusedIndex: number = 0;

	let ref: HTMLInputElement;
	$: filteredDataCount = filtered.reduce((sum, section) => sum + section.routes.length, 0);
	$: filteredData = filtered.flatMap((section) => section.routes);
	$: filtered = search
		? $docs
				.map((section) => ({
					...section,
					routes: section.routes.filter((route) =>
						route.name.toLowerCase().includes(search.toLowerCase())
					)
				}))
				.filter((section) => section.routes.length > 0)
		: [];

	function handleKeyDown(event: KeyboardEvent, index?: number) {
		if (event.key === 'Escape') {
			open = false;
		} else if (event.key === 'ArrowDown' && index !== undefined) {
			event.preventDefault();
			if (focusedIndex < filteredData.length - 1) focusedIndex += 1;
			else focusedIndex = 0;
		} else if (event.key === 'ArrowUp' && index !== undefined) {
			event.preventDefault();
			if (focusedIndex === 0) focusedIndex = filteredData.length - 1;
			else focusedIndex -= 1;
		} else if (event.key === 'Enter' && index !== undefined) {
			const selectedRoute = filteredData[focusedIndex];
			if (selectedRoute) {
				open = false;
				window.location.href = selectedRoute.path;
			}
		}
	}

	$: {
		if (open && ref) {
			ref.focus();
		}
	}
</script>

<button
	class="search-btn"
	aria-label="search"
	class:active={open}
	on:click={() => {
		open = true;
	}}
	tabindex="-1"
>
	<Icon icon="mingcute:search-line" />
	<span>Search</span>
</button>

{#if open}
	<button class="search" on:click|self={() => (open = false)} on:keydown={handleKeyDown}>
		<div>
			<header>
				<form>
					<Icon icon="mingcute:search-line" />
					<input
						id="search"
						on:keydown={(e) => handleKeyDown(e, focusedIndex)}
						type="search"
						placeholder="Search docs"
						maxlength="64"
						tabindex="0"
						bind:value={search}
						bind:this={ref}
					/>
				</form>
			</header>
			<div class="content">
				{#if search === ''}
					<div class="start-screen">
						<p>No recent searches</p>
					</div>
				{:else if filteredDataCount === 0}
					<div class="start-screen">
						<p>No results</p>
					</div>
				{:else}
					<ul role="listbox">
						{#each filteredData as section}
							<!-- <!-- {#each section.routes as route} -->
							<li>
								<a
									href={section.path}
									on:click={() => (open = false)}
									class:focused={focusedIndex === filteredData.indexOf(section)}
								>
									<div>
										<Icon icon="mdi:file-outline" />
										<div class="result-content">{section.name}</div>
										<div class="result-action">
											<Icon icon="tdesign:enter" />
										</div>
									</div>
								</a>
							</li>
							<!-- {/each} -->
						{/each}
					</ul>
				{/if}
			</div>
			<footer>
				<div>
					<Icon icon="tdesign:enter" />
					<span>to select</span>
					<Icon icon="tabler:arrow-up" />
					<Icon icon="tabler:arrow-down" />
					<span>to navigate</span>
					<Icon icon="mdi:keyboard-esc" />
					<span>to close</span>
				</div>
				{filteredDataCount} results
			</footer>
		</div>
	</button>
{/if}

<style lang="postcss">
	.search-btn {
		align-items: center;
		background-color: transparent;
		border: 0;
		color: var(--c-text-2);
		display: flex;
		height: 36px;
		justify-content: center;
		text-decoration: inherit;
		transition: color 0.5s;
		width: 36px;
		cursor: pointer;
		white-space: nowrap;
		max-width: fit-content;
		margin-left: auto;

		& :global(svg) {
			fill: currentColor;
			height: 24px;
			width: 24px;
		}

		&:hover,
		&.active {
			color: var(--c-brand);
		}

		@media (min-width: 768px) {
			font-size: 13px;
			font-weight: 500;
			line-height: calc(var(--nav-height) - 1px);
			padding: 0 12px;
			text-decoration: inherit;
			transition: color 0.25s;
			white-space: nowrap;
			max-width: fit-content;
			margin-right: auto;
			margin-left: initial;

			& :global(svg) {
				fill: currentColor;
				height: 18px;
				width: 18px;
			}

			& span {
				display: flex !important;
			}
		}

		align-items: center;
		display: flex;
		flex-grow: 1;
		justify-content: flex-end;

		& span {
			display: none;
		}
	}
	.search {
		background: #0009;
		transition: opacity 1s;
		height: 100vh;
		left: 0;
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 200;
		display: grid;
		border: 0;

		& > div {
			background: var(--c-bg);
			border-radius: 6px;
			flex-direction: column;
			margin: 60px auto auto;
			max-width: var(--search-modal-width);
			width: 100%;
			position: relative;

			& header {
				display: flex;
				padding: 12px 12px 0;

				& form {
					background-color: var(--c-bg-mute);
					border: 1px solid var(--c-brand);
					align-items: center;
					background: transparent;
					border-radius: 4px;
					display: flex;
					height: 56px;
					margin: 0;
					padding: 0 12px;
					position: relative;
					width: 100%;
					gap: 0.5rem;

					& :global(svg) {
						align-items: center;
						color: var(--c-brand);
						display: flex;
						justify-content: center;
						height: 24px;
						width: 24px;
					}

					& input {
						appearance: none;
						background: transparent;
						border: 0;
						color: var(--c-text-1);
						flex: 1;
						font: inherit;
						font-size: 1.2em;
						height: 100%;
						outline: none;
						padding: 0 0 0 8px;
						width: 80%;
						outline-offset: -2px;
						border: 0;
						padding: 0;
						line-height: inherit;
						color: inherit;
					}
				}
			}

			& .content {
				max-height: calc(var(--search-modal-height) - 56px - 12px - 44px);
				min-height: 12px;
				overflow-y: auto;
				overflow-y: overlay;
				padding: 0 12px;
				scrollbar-width: thin;

				& .start-screen {
					font-size: 0.9em;
					margin: 0 auto;
					padding: 36px 0;
					text-align: center;
					width: 80%;

					& p {
						font-size: 0.9em;
						margin: 0;
						user-select: none;
					}
				}

				& ul {
					list-style: none;
					margin: 0;
					padding: 0;
					margin-top: 12px;
					margin-bottom: 12px;

					& li {
						border-radius: 4px;
						display: flex;
						padding-bottom: 4px;
						position: relative;

						& a {
							text-decoration: none;
							background: var(--c-bg-mute);
							border-radius: 4px;
							display: block;
							padding-left: 12px;
							width: 100%;

							&:hover,
							&.focused {
								background: var(--c-brand);
								color: var(--c-text-1);
							}

							& > div {
								align-items: center;
								/* color: var(--docsearch-hit-color); */
								display: flex;
								flex-direction: row;
								height: 56px;
								padding: 0 12px 0 0;

								& :global(svg) {
									height: 20px;
									width: 20px;
								}

								& .result-content {
									display: flex;
									flex: 1 1 auto;
									font-weight: 500;
									line-height: 1.2em;
									margin: 0 8px;
									overflow-x: hidden;
									position: relative;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 80%;
								}

								& .result-action {
									align-items: center;
									display: flex;
									height: 22px;
									width: 22px;
								}
							}
						}
					}
				}
			}

			& footer {
				background: var(--c-bg-mute);
				border-top: var(--border);
				align-items: center;
				font-size: 0.8rem;
				border-radius: 0 0 8px 8px;
				display: flex;
				flex-shrink: 0;
				height: 44px;
				justify-content: space-between;
				padding: 0 12px;

				& > div {
					font-size: 0.8rem;
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
			}
		}
	}
</style>
