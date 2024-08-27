<script lang="ts">
	import { copyToClipboard } from '$lib/utils';
	export let color: any = [];
	export let format: string = '';
</script>

<div class="card-color">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="color-bg"
		role="button"
		tabindex="0"
		style={`background-color:${color?.hex}`}
		on:click={() => copyToClipboard(color[format === 'variable' ? 'css' : 'hex'])}
	/>
	<div class="color-info">
		<div class="color-name">{color?.name}</div>
		<input
			class="color-hex"
			type="text"
			readonly
			value={color[format === 'variable' ? 'css' : 'hex']}
		/>
	</div>
</div>

<style lang="postcss">
	.card-color {
		display: grid;
		grid-template-columns: 50px 1fr;
		gap: 1rem;
		margin-bottom: 4vw;
		line-height: 1.25;
		overflow: hidden;

		@media (min-width: 544px) {
			grid-template-columns: 1fr;
		}

		& > .color-bg {
			width: 50px;
			height: 50px;
			float: left;
			border-radius: 6px;
			position: relative;
			cursor: pointer;

			@media (min-width: 544px) {
				height: 80px;
				width: 100%;
				border-radius: 2px;

				&:hover {
					transform: scale(0.95);
				}
			}
		}

		& .color-info {
			display: grid;
			gap: 0.5rem;

			@media (min-width: 544px) {
				display: inline;
				float: left;
				overflow: hidden;
			}

			& > .color-name {
				text-transform: uppercase;
				text-align: left;
				font-size: 14px;
				font-weight: 500;

				@media (min-width: 544px) {
					margin-bottom: 0.5rem;
				}
			}

			& > input[type='text'] {
				border: none;
				font-family: 'Roboto Mono', monospace;
				background-color: transparent;
				opacity: 0.6;

				&:focus,
				&:focus-visible {
					outline: none;
				}
			}
		}
	}
</style>
