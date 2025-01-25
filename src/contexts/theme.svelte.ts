export const createTheme = () => {
	let current = $state('light');

	const update = (theme: string) => {
		current = theme;
		localStorage.setItem('@mytril:theme', theme);
	};

	const init = () => {
		const theme = localStorage.getItem('@mytril:theme');

		if (theme === 'system') {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
				current = 'dark';
			else current = 'light';
		} else if (theme) {
			current = theme;
		}
	};

	return {
		update,
		init,
		get current() {
			return current;
		}
	};
};
