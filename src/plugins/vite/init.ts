import path from 'path';
import fsPromises from 'fs/promises';

export async function mytrilInit(typescript: boolean) {
	const directory = process.cwd();
	const pluginsPath = path.resolve(`${directory}/src/plugins`);
	const filePath = path.resolve(pluginsPath, `mytril.${typescript ? 'ts' : 'js'}`);

	try {
		await fsPromises.access(pluginsPath);
	} catch {
		await fsPromises.mkdir(pluginsPath, { recursive: true });
	}

	try {
		await fsPromises.readFile(filePath, 'utf-8');
	} catch {
		let text = ``;

		text += `/**\n`;
		text += ` * plugins/mytril.ts\n`;
		text += ` * \n`;
		text += ` * Framework documentation: https://minedelve.com/mytril/docs\n`;
		text += `*/\n`;
		text += `\n`;
		// styles
		text += `// Styles\n`;
		text += `import 'mytril/styles';\n`;
		text += `\n`;
		// composables
		text += `// Composables\n`;
		text += `import { createMytril } from 'mytril';\n`;
		text += `\n`;
		text += `// https://minedelve.com/mytril/docs/customization/themes\n`;
		text += `export default createMytril({\n`;
		text += `    theme: {\n`;
		text += `        defaultTheme: 'light',\n`;
		text += `        palette: 'material',\n`;
		text += `        colors:  {}\n`;
		text += `    }\n`;
		text += `});\n`;

		await fsPromises.writeFile(filePath, text);
	}
}
