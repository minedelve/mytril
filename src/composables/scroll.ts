import { BROWSER } from 'esm-env';

export function disabledScroll(state: boolean) {
	if (BROWSER) {
		if (state) document.body.classList.add('no-scroll');
		if (!state) document.body.classList.remove('no-scroll');
	}
}
