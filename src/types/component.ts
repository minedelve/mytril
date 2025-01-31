import type { Snippet } from 'svelte';

type IdElementType = string | undefined;
type ClassNameType = string | string[] | undefined;
type StylePropertiesType = string | undefined;

export interface ComponentBase {
	id?: IdElementType;
	class?: ClassNameType;
	style?: StylePropertiesType;
	children?: Snippet;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

export interface AppProps extends ComponentBase {
	breakpoints?: { mobile: number | string; tablet: number | string; laptop: number | string };
}

export interface TooltipProps extends ComponentBase {
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	label?: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	color?: string;
	background?: string;
	tooltip?: Snippet;
}

export interface ToolbarProps extends ComponentBase {
	is?: 'div' | 'header' | 'nav';
	classContent?: string;
	floating?: boolean;
	variant?: 'outlined' | 'text';
	absolute?: boolean;
	rounded?: string;
	height?: string;
	dense?: boolean;
	dark?: boolean;
	light?: boolean;
	color?: string;
	background?: string;
}

export interface ToolbarItemsProps extends ComponentBase {
	is?: 'nav' | 'div';
}

export interface ToolbarTitleProps extends ComponentBase {
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

export interface SystemBarProps extends ComponentBase {
	is?: 'div';
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	window?: boolean;
	absolute?: boolean;
	fixed?: boolean;
	color?: string;
	background?: string;
}

type ComponentSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface SwitchProps extends ComponentBase {
	before?: Snippet;
	after?: Snippet;
	dark?: boolean;
	light?: boolean;
	color?: string;
	background?: string;
	value?: boolean;
	right?: boolean;
	disabled?: boolean;
	size?: ComponentSizeType;
	sizeXs?: ComponentSizeType;
	sizeSm?: ComponentSizeType;
	sizeMd?: ComponentSizeType;
	sizeLg?: ComponentSizeType;
	sizeXl?: ComponentSizeType;
	sizeXxl?: ComponentSizeType;
}

export interface ResponsiveProps extends ComponentBase {
	aspectRatio?: string;
	inline?: boolean;
}

export interface MenuProps extends ComponentBase {
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	openOnHover?: boolean;
	closeOnClick?: boolean;
	color?: string;
	background?: string;
	activator?: Snippet<[object, (state: string) => void]>;
}

export interface ListProps extends ComponentBase {
	is?: 'div';
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	towline?: boolean;
	threeline?: boolean;
	dense?: boolean;
	disabled?: boolean;
	nav?: boolean;
	color?: string;
	background?: string;
}

export interface ListItemProps extends ComponentBase {
	is?: 'a' | 'button' | 'div';
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	prepend?: Snippet;
	append?: Snippet;
	href?: string;
	active?: boolean;
	link?: boolean;
	activator?: Snippet;
	color?: string;
	background?: string;
}

export interface ListGroupProps extends ComponentBase {
	is?: 'div';
	dark?: boolean;
	light?: boolean;
	activator?: Snippet;
	color?: string;
}

export interface ListSubTitleProps extends ComponentBase {
	is?: 'div';
}

export interface ListTitleProps extends ComponentBase {
	is?: 'div';
}

export interface ListSubHeaderProps extends ComponentBase {
	is?: 'div';
	light?: boolean;
	dark?: boolean;
	color?: string;
	inset?: boolean;
	sticky?: boolean;
}

export interface ImgProps {
	id?: IdElementType;
	class?: ClassNameType;
	style?: StylePropertiesType;
	placeholder?: Snippet;
	classContent?: string;
	src?: string;
	srcset?: string;
	lazySrc?: string;
	alt?: string;
	options: { root?: Element | Document | null; rootMargin?: string; threshold?: number | number[] };
	cover?: boolean;
	contain?: boolean;
	absolute?: boolean;
	aspectRatio?: string;
	inline?: boolean;
	crossorigin?: 'anonymous' | 'use-credentials' | '';
	draggable?: boolean;
}

type sizeIconString = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface IconProps {
	is?: 'i' | 'span';
	dark?: boolean;
	light?: boolean;
	disabled?: boolean;
	start?: boolean;
	end?: boolean;
	size?: sizeIconString;
	icon?: string;
	color?: sizeIconString;
	sizeXs?: sizeIconString;
	sizeSm?: sizeIconString;
	sizeMd?: sizeIconString;
	sizeLg?: sizeIconString;
	sizeXl?: sizeIconString;
	sizeXxl?: sizeIconString;
}

export interface GridProps extends ComponentBase {
	is?: 'div' | 'section' | 'header';
	fluid?: boolean;
	fillHeight?: boolean;
}

type sizeColString =
	| 'auto'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12';
type sizeColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridColProps extends ComponentBase {
	is?: 'div';
	cols?: sizeColString | sizeColNumber;
	xs?: sizeColString | sizeColNumber;
	sm?: sizeColString | sizeColNumber;
	md?: sizeColString | sizeColNumber;
	lg?: sizeColString | sizeColNumber;
	xl?: sizeColString | sizeColNumber;
	xxl?: sizeColString | sizeColNumber;
	offset?: sizeColString | sizeColNumber;
	offestXs?: sizeColString | sizeColNumber;
	offsetSm?: sizeColString | sizeColNumber;
	offsetMd?: sizeColString | sizeColNumber;
	offsetLg?: sizeColString | sizeColNumber;
	offsetXl?: sizeColString | sizeColNumber;
	offsetXxl?: sizeColString | sizeColNumber;
	order?: sizeColString | sizeColNumber;
	orderXs?: sizeColString | sizeColNumber;
	orderSm?: sizeColString | sizeColNumber;
	orderMd?: sizeColString | sizeColNumber;
	orderLg?: sizeColString | sizeColNumber;
	orderXl?: sizeColString | sizeColNumber;
	orderXxl?: sizeColString | sizeColNumber;
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
}

export interface GridRowProps extends ComponentBase {
	is?: 'div';
	noGutters?: boolean;
	dense?: boolean;
	align?: string;
	alignXs?: string;
	alignSm?: string;
	alignMd?: string;
	alignLg?: string;
	alignXl?: string;
	alignXxl?: string;
	alignContent?: string;
	alignContentXs?: string;
	alignContentSm?: string;
	alignContentMd?: string;
	alignContentLg?: string;
	alignContentXl?: string;
	alignContentXxl?: string;
	justify?: string;
	justifyXs?: string;
	justifySm?: string;
	justifyMd?: string;
	justifyLg?: string;
	justifyXl?: string;
	justifyXxl?: string;
}

export interface SpacerProps {
	id?: IdElementType;
	class?: ClassNameType;
	style?: StylePropertiesType;
	is?: 'div';
}

export interface ExpansionPanelProps extends ComponentBase {
	is?: 'div';
	activator?: Snippet;
	text?: string;
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	color?: string;
	background?: string;
	index?: number | string;
	open?: boolean;
	toggle?: (index: number | string) => void;
	disabled?: boolean;
}

export interface ExpansionPanelsProps extends ComponentBase {
	is?: 'div';
	text?: string;
	dark?: boolean;
	light?: boolean;
	rounded?: string;
	color?: string;
	background?: string;
	multiple?: boolean;
	expansion?: boolean;
	spacer?: boolean;
	readonly?: boolean;
	hideIcon?: boolean;
}

export interface DividerProps extends ComponentBase {
	is?: 'div' | 'hr';
	light?: boolean;
	dark?: boolean;
	inset?: boolean;
	thickness?: string;
	vertical?: boolean;
	opacity?: string | number;
	color?: string;
}

export interface ChipProps extends ComponentBase {
	append?: Snippet;
	prepend?: Snippet;
	close?: Snippet;
	href?: string;
	is?: 'a' | 'button' | 'span' | 'div';
	dark?: boolean;
	light?: boolean;
	variant?: 'outlined' | 'label';
	active?: boolean;
	density?: 'compact' | 'comfortable' | 'default';
	disabled?: boolean;
	rounded?: string;
	closable?: boolean;
	link?: boolean;
	color?: string;
	background?: string;
	value?: string | number;
	size?: ComponentSizeType;
	sizeXs?: ComponentSizeType;
	sizeSm?: ComponentSizeType;
	sizeMd?: ComponentSizeType;
	sizeLg?: ComponentSizeType;
	sizeXl?: ComponentSizeType;
	sizeXxl?: ComponentSizeType;
	ariaLabel?: string;
}

export interface CardProps extends ComponentBase {
	is?: 'a' | 'button' | 'div';
	dark?: boolean;
	light?: boolean;
	variant?: 'outlined' | 'text';
	active?: boolean;
	disabled?: boolean;
	rounded?: string;
	closable?: boolean;
	color?: string;
	background?: string;
}

export interface CardActionsProps extends ComponentBase {
	is?: 'div';
}

export interface CardItemProps extends ComponentBase {
	is?: 'div';
	prepend?: Snippet;
	append?: Snippet;
}

export interface CardSubtitleProps extends ComponentBase {
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
	opacity?: string | number;
}

export interface CardTextProps extends ComponentBase {
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
	opacity?: string | number;
}

export interface CardTitleProps extends ComponentBase {
	is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

export interface BtnProps extends ComponentBase {
	append?: Snippet;
	prepend?: Snippet;
	href?: string;
	is?: 'a' | 'button' | 'input';
	dark?: boolean;
	light?: boolean;
	variant?: 'outlined' | 'text';
	active?: boolean;
	density?: 'compact' | 'comfortable' | 'default';
	block?: boolean;
	square?: boolean;
	circle?: boolean;
	error?: boolean;
	info?: boolean;
	warning?: boolean;
	success?: boolean;
	icon?: boolean;
	wide?: boolean;
	disabled?: boolean;
	rounded?: string;
	link?: boolean;
	color?: string;
	background?: string;
	size?: ComponentSizeType;
	sizeXs?: ComponentSizeType;
	sizeSm?: ComponentSizeType;
	sizeMd?: ComponentSizeType;
	sizeLg?: ComponentSizeType;
	sizeXl?: ComponentSizeType;
	sizeXxl?: ComponentSizeType;
	ariaLabel?: string;
}

type DialogSize = 'xs' | 'sm' | 'md' | 'default' | 'lg' | 'xl';
export interface DialogProps extends ComponentBase {
	open?: boolean;
	classContent?: string;
	size?: DialogSize;
	persistent?: boolean;
	fullscreen?: boolean;
	closeWithEsc?: boolean;
	position?: 'bottom' | 'center' | 'top';
	dark?: boolean;
	light?: boolean;
	color?: string;
	background?: string;
}

export interface BottomViewProps extends ComponentBase {
	open?: boolean;
	classContent?: string;
	persistent?: boolean;
	closeWithEsc?: boolean;
	dark?: boolean;
	light?: boolean;
	color?: string;
	background?: string;
}

export interface BottomNavigationProps extends ComponentBase {
	is?: 'div' | 'header' | 'nav';
	dark?: boolean;
	light?: boolean;
	grow?: boolean;
	shift?: boolean;
	absolute?: boolean;
	rounded?: string;
	active?: number;
	height?: string;
	color?: string;
	background?: string;
}

export interface AppBarProps extends ToolbarProps {
	location?: 'top' | 'bottom';
}

export interface AlertProps extends ComponentBase {
	append?: Snippet;
	prepend?: Snippet;
	close?: Snippet;
	href?: string;
	is?: 'div';
	dark?: boolean;
	light?: boolean;
	variant?: 'outlined' | 'tonal';
	density?: 'compact' | 'comfortable' | 'default';
	rounded?: string;
	closable?: boolean;
	color?: string;
	background?: string;
	warning?: boolean;
	info?: boolean;
	success?: boolean;
	error?: boolean;
}

export interface AlertTitleProps extends ComponentBase {
	is?: 'p' | 'div';
}
