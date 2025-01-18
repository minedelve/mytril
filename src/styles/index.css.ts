/**
 * An array of resolved paths to various CSS component files.
 * These files are located in the 'node_modules/mytril/dist/styles/utils' directory.
 *
 * The components included are:
 * - spacer.css
 * - grid.css
 * - img.css
 * - responsive.css
 * - card.css
 * - toolbar.css
 * - app-bar.css
 * - icon.css
 * - divider.css
 * - tooltip.css
 * - expansion-panels.css
 * - system-bar.css
 * - list.css
 * - menu.css
 * - dialog.css
 * - btn.css
 * - chip.css
 * - alert.css
 * - bottom-navigation.css
 * - bottom-view.css
 * - switch.css
 */
import path from 'path';
const directory = 'node_modules/mytril/dist/styles/utils';

export const componentsCSS = [
	path.resolve(`${directory}`, 'spacer.css'),
	path.resolve(`${directory}`, 'grid.css'),
	path.resolve(`${directory}`, 'img.css'),
	path.resolve(`${directory}`, 'responsive.css'),
	path.resolve(`${directory}`, 'card.css'),
	path.resolve(`${directory}`, 'toolbar.css'),
	path.resolve(`${directory}`, 'app-bar.css'),
	path.resolve(`${directory}`, 'icon.css'),
	path.resolve(`${directory}`, 'divider.css'),
	path.resolve(`${directory}`, 'tooltip.css'),
	path.resolve(`${directory}`, 'expansion-panels.css'),
	path.resolve(`${directory}`, 'system-bar.css'),
	path.resolve(`${directory}`, 'list.css'),
	path.resolve(`${directory}`, 'menu.css'),
	path.resolve(`${directory}`, 'dialog.css'),
	path.resolve(`${directory}`, 'btn.css'),
	path.resolve(`${directory}`, 'chip.css'),
	path.resolve(`${directory}`, 'alert.css'),
	path.resolve(`${directory}`, 'bottom-navigation.css'),
	path.resolve(`${directory}`, 'bottom-view.css'),
	path.resolve(`${directory}`, 'switch.css')
];
