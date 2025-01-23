export type Themes = Array<string>;
export type typographyFamily = { [key: string]: string };
export type TypographySize = { [key: string]: string | { [variant: string]: string } };
export type CornerSize = { [key: string]: string };
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
	shape?: CornerSize;
	typography?: {
		fontFamily?: typographyFamily;
		fontSize?: TypographySize;
		fontWeight?: { [key: string]: number };
		fontAlign?: Array<string>;
		fontTransform?: Array<string>;
	};
	assets?: {
		display?: Array<string>;
		elevation?: { [key: string]: Array<string> };
		flex?: Array<string>;
		flexDirection?: Array<string>;
		justify?: Array<string>;
		align?: Array<string>;
		alignSelf?: Array<string>;
		alignContent?: Array<string>;
		wrap?: Array<string>;
		order?: Array<number>;
		offset?: Array<number>;
		shrink?: Array<number>;
		grow?: Array<number>;
		float?: Array<string>;
		overflow?: Array<string>;
		position?: Array<string>;
		height?: Array<string>;
		width?: Array<string>;
		spacing?: { [key: string]: string };
	};
}
