import { innerWidth, innerHeight } from 'svelte/reactivity/window';

export function getPositions(ref: HTMLElement) {
	const element = $state(ref);

	if (!ref) return;

	const rect = ref.getBoundingClientRect();

	const position = {
		width: rect.width,
		height: rect.height,
		x: rect.left + window.scrollX,
		y: rect.top + window.scrollY
	};

	const elementArea = {
		topLeft: 0,
		topRight: position.width,
		bottomLeft: position.height,
		bottomRight: position.width * position.height
	};

	const axes: { x: number; y: number } = $state({ x: 0, y: 0 });
	// bottom left
	axes.x = position.x;
	axes.y = position.y;

	console.log(
		'element',
		element,
		axes,
		position,
		innerWidth.current,
		innerHeight.current,
		elementArea
	);
	return {
		get values() {
			return axes;
		}
	};
}
