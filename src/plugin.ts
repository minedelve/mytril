// import * as fs from 'fs';
// import * as path from 'path';
// import * as postcss from 'postcss';
// import * as postcssJs from 'postcss-js';
// import { fileURLToPath } from 'url';

// const plugin = () => {
// // 	// Chemin vers le fichier CSS
// // 	// const stylesPath = path.resolve(__dirname, './styles.css');
// // 	const currentFile = import.meta.url;
// // 	const filePath = fileURLToPath(currentFile);
// // 	const stylesPath = path.resolve(path.dirname(filePath), './styles.css');

// // 	console.log('mytril', stylesPath);
// // 	try {
// // 		// Charger et ajouter les styles CSS
// // 		const componentsCSS = fs.readFileSync(stylesPath, 'utf8');

// // 		const parsed = postcss.parse(componentsCSS);
// // 		const jsStyles = postcssJs.objectify(parsed);
// // 		console.log(jsStyles);

// // 		return ({ addComponents }) => {
// // 			addComponents(jsStyles);
// // 		};
// // 	} catch (err) {
// // 		console.error(`Erreur lors du chargement des composants : ${err.message}`);
// // 		return () => {};
// // 	}
// // };

// // export default plugin;

// // import plugin from 'tailwindcss/plugin';
// // import fs from 'fs';
// // import path from 'path';
// // import postcss from 'postcss';
// // import postcssJs from 'postcss-js';
// // import { PluginAPI } from 'tailwindcss/types/config';

// interface ComponentStyles {
// 	[selector: string]: Record<string, string | number>;
// }

// interface ExtractedComponents {
// 	[selector: string]: Record<string, string | number>;
// }

// module.exports = plugin(
// 	function ({ addComponents }) {
// 		// Chemin vers le fichier CSS
// 		// const stylesPath = path.resolve(__dirname, './styles.css');
// 		const currentFile = import.meta.url;
// 		const filePath = fileURLToPath(currentFile);
// 		const stylesPath = path.resolve(path.dirname(filePath), './styles.css');

// 		try {
// 			// Charger et ajouter les styles CSS
// 			const componentsCSS = fs.readFileSync(stylesPath, 'utf8');

// 			const parsed = postcss.parse(componentsCSS);
// 			const jsStyles = postcssJs.objectify(parsed) as ComponentStyles;

// 			// Transformation de l'objet jsStyles en tableau de composants:
// 			const components: ExtractedComponents[] = Object.entries(jsStyles).map(
// 				([selector, styles]) => ({
// 					[selector]: styles
// 				})
// 			);

// 			console.log('Components to add:', components); // Ajout du log
// 			addComponents(components);
// 		} catch (err: any) {
// 			console.error(`Erreur lors du chargement des composants : ${err.message}`);
// 		}
// 	}
// }
// );
