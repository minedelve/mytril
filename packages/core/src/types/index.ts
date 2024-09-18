export interface PresetColors {
	[key: string]: ThemeColors;
}

export interface PresetThresholds {
	[key: string]: string;
}

export interface SectionColors {
	palette: ThemeItem[];
	typography: ThemeItem[];
	background: ThemeItem[];
	state: ThemeItem[];
}

interface ThemeColors {
	[key: string]: string;
	light: string;
	dark: string;
}

interface ThemeItem {
	name: string;
	css: string;
	light: string;
	dark: string;
}

export interface ObjectKeyValueString {
	[key: string]: string;
}

interface Colors {
	[key: string]:
		| string
		| {
				[key: string]: string;
		  };
}

interface Threshold {
	[key: string]: string;
}
interface ThresholdsItems {
	device: string;
	description: string;
	value: string;
}

export interface Thresholds {
	[key: string]: ThresholdsItems;
}

interface Theme {
	defaultTheme: string;
	colors: Colors;
}

interface Display {
	thresholds: Threshold;
}

export interface Configuration {
	theme: Theme;
	display: Display;
}
