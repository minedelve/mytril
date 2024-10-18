import path from 'path';

const nodePath = 'node_modules/mytril/dist';

export function loadCssFiles() {
	return {
		_default: [
			path.resolve(`${nodePath}/assets/css`, 'normalize.css'),
			path.resolve(`${nodePath}/assets/css`, 'components.css'),
			path.resolve(`${nodePath}/assets/css`, 'markdown.css'),
			path.resolve(`${nodePath}/assets/css`, 'code.css')
		]
	};
}
