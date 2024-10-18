export const formatPresetColors = (config: {
	[key: string]: { name: string; css: string; light: string; dark: string }[];
}) => {
	const formatDefaultColors: {
		[key: string]: { [key: string]: string; light: string; dark: string };
	} = {};

	for (const section of Object.keys(config) as (keyof {
		[key: string]: { name: string; css: string; light: string; dark: string }[];
	})[]) {
		for (const index in config[section]) {
			formatDefaultColors[config[section][index].name.toLowerCase().replaceAll(' ', '-')] = {
				light: config[section][index].light,
				dark: config[section][index].dark
			};
		}
	}

	return formatDefaultColors;
};

export const formatPresetThresholds = (config: {
	[key: string]: { device: string; description: string; value: string };
}) => {
	const formatDefaultThresholds: { [key: string]: string } = {};

	for (const thresholds of Object.keys(config)) {
		formatDefaultThresholds[thresholds] = config[thresholds]?.value;
	}
	return formatDefaultThresholds;
};
