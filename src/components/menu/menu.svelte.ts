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

	const update = (activator: HTMLElement, element: HTMLElement, location?: string) => {
		if (!activator || !element) return;

		const activatorRect = activator.getBoundingClientRect();
		const elementRect = element.getBoundingClientRect();
		console.log('activator', activatorRect);
		console.log('element', elementRect);

		// console.log(
		// 	'outside sreen right',
		// 	activatorRect.left + elementRect.width > innerWidth.current!
		// 		? activatorRect.left - (elementRect.width - activatorRect.width)
		// 		: false
		// );

		// console.log(
		// 	'outside sreen left',
		// 	activatorRect.left - elementRect.width < 0
		// 		? activatorRect.left + (elementRect.width + activatorRect.width)
		// 		: false
		// );

		console.log(
			'outside sreen bottom',
			activatorRect.bottom - elementRect.height > outerHeight.current!
				? activatorRect.top + (elementRect.width + activatorRect.width)
				: false
		);

		if (location === 'top' || location === 'bottom') {
			if (location === 'top') axis.y = activatorRect.top - elementRect.height;
			if (location === 'bottom') axis.y = activatorRect.bottom;

			if (activatorRect.left + elementRect.width > innerWidth.current!) {
				axis.x = activatorRect.left - (elementRect.width - activatorRect.width);
			} else {
				axis.x = activatorRect.left;
			}
		} else if (location === 'left' || location === 'right') {
			if (location === 'left' && !(activatorRect.left - elementRect.width < 0)) {
				axis.x = activatorRect.left - elementRect.width;
			} else {
				axis.x = activatorRect.left + activatorRect.width;
			}

			if (activatorRect.y + elementRect.height > innerHeight.current!) {
				axis.y = activatorRect.y - elementRect.height + activatorRect.height;
			} else {
				axis.y = activatorRect.y;
			}
		} else {
			axis.y = activatorRect.bottom;
			if (activatorRect.left + elementRect.width > innerWidth.current!) {
				axis.x = activatorRect.left - (elementRect.width - activatorRect.width);
			} else {
				axis.x = activatorRect.left;
			}
		}
	};

	return {
		get values() {
			return axis;
		},
		update
	};
}
