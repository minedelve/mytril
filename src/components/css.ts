import path from 'path';

const directory = 'node_modules/mytril/dist';

export const componentsCSS = [
	path.resolve(`${directory}/components/grids/spacer`, 'spacer.css'),
	path.resolve(`${directory}/components/grids/container`, 'container.css'),
	path.resolve(`${directory}/components/grids/col`, 'col.css'),
	path.resolve(`${directory}/components/grids/row`, 'row.css'),
	path.resolve(`${directory}/components/img`, 'img.css'),
	path.resolve(`${directory}/components/responsive`, 'responsive.css')
];
