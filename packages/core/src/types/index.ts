export interface PresetColors {
	[key: string]: ThemeColors;
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

interface Theme {
	defaultTheme: string;
	colors: Colors;
}

export interface Configuration {
	theme: Theme;
}
