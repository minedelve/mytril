export const formatRootVar = (key: string) => {
	return `--${key.replaceAll(' ', '-')}`;
};

export const formatClassName = (key: string) => {
	return key.replaceAll('.', '\\.').replaceAll('%', '');
};

export const formatBreakpoint = (breakpoint: string) => {
	return breakpoint !== 'default' && breakpoint !== 'max-default' ? `.${breakpoint}\\:` : `.`;
};
