const config = {
	theme: {
		colors: {
			primary: '#ff5722',
			secondary: '#4caf50'
		}
	},
	plugins: []
};

export function plugin(options = {}) {
	// const defaultOptions = {
	// 	primaryColor: 'red' // Couleur par défaut
	// };

	// const options = { ...defaultOptions, ...opts };

	return {
		postcssPlugin: 'mytrilcss',
		postcss: true,
		// Once(root) {
		// 	Object.entries(config.theme.colors).forEach(([name, value]) => {
		// 		root.append({
		// 			selector: `.text-${name}`,
		// 			nodes: [{ prop: 'color', value }]
		// 		});
		// 	});
		// }
		prepare(result) {
			let prefixes = loadPrefixes({
				env: options.env,
				from: result.opts.from
			});

			return {
				OnceExit(root) {
					timeCapsule(result, prefixes);
					if (options.remove !== false) {
						prefixes.processor.remove(root, result);
					}
					if (options.add !== false) {
						prefixes.processor.add(root, result);
					}
				}
			};
		}
	};
}

// Once(root, { result }) {
// 	// Charger la configuration utilisateur
// 	const config = {
// 		primary: '#3498db',
// 		secondary: '#2ecc71',
// 		danger: '#e74c3c'
// 	};

// 	// Exemple : Ajouter des styles à partir de la configuration
// 	const themeVariables = Object.entries(config || {}).map(
// 		([key, value]) => `--color-${key}: ${value};`
// 	);

// 	// Ajouter les variables CSS au début du fichier
// 	root.prepend({
// 		type: 'rule',
// 		selector: ':root',
// 		nodes: themeVariables.map((variable) => ({
// 			type: 'decl',
// 			prop: variable.split(': ')[0],
// 			value: variable.split(': ')[1]
// 		}))
// 	});

// 	result.messages.push({
// 		type: 'dependency',
// 		plugin: 'mytrilcss',
// 		message: 'Theme variables injected'
// 	});
// }
// Once(root) {
// 	// Ajouter une règle :root avec des variables CSS
// 	const rootRule = root.first || root.append({ selector: ':root' });
// 	if (rootRule.selector === ':root') {
// 		rootRule.append({
// 			prop: '--primary-test',
// 			value: options.primaryColor
// 		});
// 	}
// }
// prepare() {
// 	return {
// 		OnceExit(css, { result }) {
// 			// Ajoutez ici votre logique de transformation CSS
// 			// css.walkDecls((decl) => {
// 			// 	if (decl.value.includes('red')) {
// 			// 		decl.value = decl.value.replace(/red/g, 'blue');
// 			// 	}
// 			// });
// 			console.log('css', css, result);
// 		}
// 	};
// }
