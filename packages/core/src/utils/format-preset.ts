import type {
	PresetColors,
	PresetThresholds,
	SectionColors,
	Thresholds
} from '$lib/types/index.js';

export const formatPresetColors = (config: SectionColors) => {
	const formatDefaultColors: PresetColors = {};

	for (const section of Object.keys(config) as (keyof SectionColors)[]) {
		for (const index in config[section]) {
			formatDefaultColors[config[section][index].name.toLowerCase().replaceAll(' ', '-')] = {
				light: config[section][index].light,
				dark: config[section][index].dark
			};
		}
	}

	return formatDefaultColors;
};

export const formatPresetThresholds = (config: Thresholds) => {
	const formatDefaultThresholds: PresetThresholds = {};

	for (const thresholds of Object.keys(config)) {
		formatDefaultThresholds[thresholds] = config[thresholds]?.value;
	}
	return formatDefaultThresholds;
};
