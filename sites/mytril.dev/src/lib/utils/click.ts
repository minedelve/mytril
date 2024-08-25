/* eslint-disable @typescript-eslint/no-explicit-any */
export function clickOutside(element: HTMLDivElement, callbackFunction: { (): boolean; (): void }) {
	function onClick(event: { target: any }) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}

	document.body.addEventListener('click', onClick);

	return {
		update(newCallbackFunction: any) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
}
