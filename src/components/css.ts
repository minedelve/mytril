import path from 'path';

const directory = 'node_modules/mytril/dist';

export const componentsCSS = [
	path.resolve(`${directory}/components/grids/spacer`, 'spacer.css'),
	path.resolve(`${directory}/components/grids/container`, 'container.css'),
	path.resolve(`${directory}/components/grids/col`, 'col.css'),
	path.resolve(`${directory}/components/grids/row`, 'row.css'),
	path.resolve(`${directory}/components/img`, 'img.css'),
	path.resolve(`${directory}/components/responsive`, 'responsive.css'),
	path.resolve(`${directory}/components/cards/card`, 'card.css'),
	path.resolve(`${directory}/components/cards/card-item`, 'card-item.css'),
	path.resolve(`${directory}/components/cards/card-title`, 'card-title.css'),
	path.resolve(`${directory}/components/cards/card-subtitle`, 'card-subtitle.css'),
	path.resolve(`${directory}/components/cards/card-text`, 'card-text.css'),
	path.resolve(`${directory}/components/cards/card-actions`, 'card-actions.css'),
	path.resolve(`${directory}/components/toolbar/toolbar`, 'toolbar.css'),
	path.resolve(`${directory}/components/toolbar/toolbar-title`, 'toolbar-title.css'),
	path.resolve(`${directory}/components/toolbar/toolbar-items`, 'toolbar-items.css'),
	path.resolve(`${directory}/components/app-bar/app-bar`, 'app-bar.css'),
	path.resolve(`${directory}/components/app-bar/app-bar-title`, 'app-bar-title.css'),
	path.resolve(`${directory}/components/icon`, 'icon.css')
];
