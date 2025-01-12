import {
	innerWidth,
	innerHeight,
	outerHeight,
	outerWidth,
	scrollX,
	scrollY
} from 'svelte/reactivity/window';

export function getPositions() {
	const axis: { x: number; y: number } = $state({ x: 0, y: 0 });
	// const element = $state(activator);

	// if (!activator) return;

	// const rect = activator.getBoundingClientRect();
	// const childRect = child.getBoundingClientRect();

	// const position = {
	// 	width: rect.width,
	// 	height: rect.height,
	// 	x: rect.left,
	// 	y: rect.top
	// };

	// const positionChild = {
	// 	width: childRect.width,
	// 	height: childRect.height,
	// 	x: childRect.left,
	// 	y: childRect.top
	// };

	// const axes: { x: number; y: number } = $state({ x: 0, y: 0 });
	// // bottom left
	// axes.x = position.x + (scrollX.current ? scrollX.current : 0);
	// axes.y = position.y + position.height + (scrollY.current ? scrollY.current : 0);

	// console.log(
	// 	'element',
	// 	element,
	// 	axes,
	// 	position,
	// 	positionChild,
	// 	{
	// 		innerWidth: innerWidth.current,
	// 		innerHeight: innerHeight.current,
	// 		outerHeight: outerHeight.current,
	// 		outerWidth: outerWidth.current,
	// 		scrollX: scrollX.current,
	// 		scrollY: scrollY.current
	// 	},
	// 	{
	// 		screenX: 0,
	// 		screenY: 0
	// 	}
	// );

	console.log('screen', {
		innerWidth: innerWidth.current,
		innerHeight: innerHeight.current,
		outerHeight: outerHeight.current,
		outerWidth: outerWidth.current,
		scrollX: scrollX.current,
		scrollY: scrollY.current
	});

	const update = (activator: HTMLElement, element: HTMLElement) => {
		if (!activator || !element) return;

		const activatorRect = activator.getBoundingClientRect();
		const elementRect = element.getBoundingClientRect();
		console.log('activator', activator.classList, activator.style, activatorRect);
		console.log('element', elementRect);

		axis.x = activatorRect.left;
		axis.y = activatorRect.bottom;
	};

	return {
		get values() {
			return axis;
		},
		update
	};
}
