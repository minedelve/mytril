export function className(...args: Array<string | undefined>) {
	return args.filter((cls: string | undefined) => !!cls).join(' ');
}
