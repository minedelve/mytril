import fs from 'node:fs';
import { colors } from '../src/api/colors.js';

let css = '';

// Colors
css += ':root {\n';
for (const style in colors) {
	for (const [, values] of Object.entries(colors[style])) {
		css += `${values.css}: ${values.hex};\n`;
	}
}
css += '}\n';

fs.writeFileSync('./@colors.css', `${css}\n`);
