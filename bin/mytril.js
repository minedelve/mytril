#!/usr/bin/env node
import chalk from 'chalk';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// ulitity functions
import { envTypescript, linkToPrompt, spacerConsole } from './utils.js';
import { initMytril } from './cli/config.js';
import { adapterViteConfig } from './cli/vite.js';
import { modifyCssFile } from './cli/css.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = path.resolve(__dirname, '../../../package.json');

const [, , command] = process.argv;
const { name } = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const typescriptEnabled = envTypescript();

if (process.argv.includes('--help') || process.argv.includes('-h')) {
	console.log('Usage: npx mytril init [customCssPath]');
	console.log('Default path: src/app.css');
	process.exit(0);
} else if (command === 'init') {
	console.log(' __  __       _        _ _ ');
	console.log('|  \\/  |     | |      (_) |');
	console.log('| \\  / |_   _| |_ _ __ _| |');
	console.log("| |\\/| | | | | __| '__| | |");
	console.log('| |  | | |_| | |_| |  | | |');
	console.log('|_|  |_|\\__, |\\__|_|  |_|_|');
	console.log('         __/ |             ');
	console.log('        |___/              ');

	spacerConsole(1);
	console.log(chalk.blue.bold(`${name} - Component Framework for Svelte`));
	spacerConsole(1);
	await initMytril();
	await adapterViteConfig(typescriptEnabled);
	await modifyCssFile();
	spacerConsole(1);
	linkToPrompt();
} else {
	console.error("Command not recognized. Try 'npx mytril init'");
}
