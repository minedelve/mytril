import { displayOnLaptop, displayOnMobile, displayOnTablet } from '$lib/stores/screen.js';
import { innerWidth } from 'svelte/reactivity/window';

export function hasDisplayScreen() {
	// state
	let width: number = $state(0);

	$effect(() => {
		width = innerWidth.current!;
	});

	function convertToPixels(size: string | number): number {
		if (typeof size === 'number') {
			return size;
		}

		const match = size.match(/^(\d+(?:\.\d+)?)(px|rem|em|pt)$/);
		if (!match) {
			throw new Error(`Value not supported : ${size}`);
		}

		const value = parseFloat(match[1]);
		const unit = match[2];
		let pixels: number;
		switch (unit) {
			case 'px':
				pixels = value;
				break;
			case 'rem':
				pixels = value * 16; // 1rem = 16px default
				break;
			case 'em':
				pixels = value * 16; // 1em = 16px default
				break;
			case 'pt':
				pixels = value * 1.333; // 1pt = 1.333px
				break;
			default:
				throw new Error(`has not support : ${unit}`);
		}
		return pixels;
	}

	return {
		display({ mobile, tablet, laptop }: { [key: string]: number | string }) {
			displayOnMobile.set(width < convertToPixels(mobile));
			displayOnTablet.set(width > convertToPixels(mobile) && width < convertToPixels(tablet));
			displayOnLaptop.set(width > convertToPixels(laptop));
		}
	};
}
