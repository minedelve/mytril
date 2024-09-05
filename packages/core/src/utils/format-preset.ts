import type { PresetColors, SectionColors } from '$lib/types/index.js';

export const formatPresetConfig = (config: SectionColors) => {
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
