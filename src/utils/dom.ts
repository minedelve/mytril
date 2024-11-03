export function className(...args: Array<string | undefined>) {
	console.log('args', args);
	return args.filter((cls: string | undefined) => !!cls).join(' ');
}
