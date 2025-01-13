import { innerWidth, innerHeight } from 'svelte/reactivity/window';

type Location = 'top' | 'bottom' | 'left' | 'right';

export function getPositions() {
	// state
	const axis: { x: number; y: number } = $state({ x: 0, y: 0 });

	return {
		get values() {
			return axis;
		},
		update(activator: HTMLElement | PointerEvent, element: HTMLElement, location?: Location) {
			if (!activator || !element) return;

			const elementRect = element.getBoundingClientRect();

			if (!(activator instanceof HTMLElement)) {
				if (activator.clientX + elementRect.width > innerWidth.current!) {
					axis.x = activator.clientX - elementRect.width;
				} else {
					axis.x = activator.clientX;
				}

				if (activator.clientY + elementRect.height > innerHeight.current!) {
					axis.y = activator.clientY - elementRect.height;
				} else {
					axis.y = activator.clientY;
				}
			} else if (activator instanceof HTMLElement) {
				const activatorRect = activator.getBoundingClientRect();

				if (location === 'top' || location === 'bottom') {
					if (location === 'top') {
						axis.y = activatorRect.top - elementRect.height;
					} else {
						axis.y = activatorRect.bottom;
					}

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
					if (activatorRect.left + elementRect.width > innerWidth.current!) {
						axis.x = activatorRect.left - (elementRect.width - activatorRect.width);
					} else {
						axis.x = activatorRect.left;
					}

					if (activatorRect.bottom + elementRect.height > innerHeight.current!) {
						axis.y = activatorRect.top - elementRect.height;
					} else {
						axis.y = activatorRect.bottom;
					}
				}
			}
		}
	};
}
