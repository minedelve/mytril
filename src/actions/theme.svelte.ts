export function themeMytril() {
	let colorScheme = $state('-');

	$effect(() => {
		console.log('themeMytril colorScheme', colorScheme);
	});

	return {
		get values() {
			return {
				colorScheme: colorScheme,
				variant: 'default'
			};
		},
		set(scheme: string) {
			colorScheme = scheme;
		}
	};
}
