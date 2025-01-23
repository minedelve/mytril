export type Themes = Array<string>;
export type Colors = {
	[key: string]: {
		[key: string]: string | { [key: string]: string | { [key: string]: string } };
	};
};

export interface MytrilDefaultConfig {
	themes: Themes;
	colorScheme: 'system' | 'dark' | 'light';
	defaultTheme: string;
	colors: Colors;
	display: {
		mobileBreakpoint: string;
		thresholds: { [key: string]: number };
	};
}

export interface MytrilConfig {
	themes?: Themes;
	colorScheme?: 'system' | 'dark' | 'light';
	defaultTheme?: string;
	colors?: Colors;
	display?: {
		mobileBreakpoint?: string;
		thresholds?: { [key: string]: number };
	};
}
