import chalk from 'chalk';
import { formatTime } from './formater.js';

/**
 * Display a vite message on the console
 * @param {string} msg
 * @returns void
 */
export const msgVite = (msg: string) => {
	const now = new Date();

	console.log(
		chalk.gray(formatTime(now)) +
			chalk.cyan.bold(` [vite] `) +
			chalk.gray.dim.italic(`(mytril)`) +
			` ${chalk.greenBright(msg)}`
	);
};
