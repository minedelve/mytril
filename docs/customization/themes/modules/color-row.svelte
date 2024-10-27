<script lang="ts">
	export let color: any = {};
	export let theme: string = 'light';

	let colorLight: string = '';
	let colorDark: string = '';
	$: {
		if (color) {
			colorLight = color?.light.includes('#') ? color?.light : `${color?.light}`;
			colorDark = color?.dark.includes('#') ? color?.dark : `${color?.dark}`;
		}
	}
</script>

<div class="row">
	<div class="color" style={`background-color:${theme === 'light' ? colorLight : colorDark}`} />
	<div class="content">
		<p class="name">{color.css}</p>
		<p class="variable">{theme === 'light' ? color?.light : color?.dark}</p>
	</div>
</div>

<style lang="postcss">
	.row {
		display: grid;
		grid-template-columns: 50px 1fr;
		grid-gap: 10px;
		margin: 0.5rem 0;
		align-items: center;

		& .color {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;
			float: left;
			border-radius: 6px;
			position: relative;
		}

		& .content {
			& p {
				margin: 0;
			}

			& .name {
				text-transform: uppercase;
				font-size: 0.8rem;
				font-weight: 500;
			}

			& .variable {
				opacity: 0.6;
				font-size: 0.75rem;
				font-family: 'Roboto Mono', monospace;
			}
		}
	}
	/* .row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		margin: 1rem 0;
		border-bottom: 1px solid var(--c-divider);

		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			&:first-child {
				justify-content: start;
				flex-direction: row;
				text-transform: uppercase;
				text-align: left;
				font-size: 0.6rem;
				font-weight: 500;

				@media (min-width: 544px) {
					font-size: 13px;
				}
			}
		}

		& .color {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;
			float: left;
			border-radius: 6px;
			position: relative;

			@media (min-width: 544px) {
				width: 70px;
				height: 70px;
			}
		}

		& .css {
			opacity: 0.6;
			font-size: 0.75rem;
			border: none;
			font-family: 'Roboto Mono', monospace;
		}
	} */
</style>
