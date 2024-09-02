#!/usr/bin/env node
import fs from 'node:fs';
import { colors } from '../src/api/colors.js';

let cssColors = '';

// Colors
cssColors += ':root {\n';
for (const style in colors) {
	for (const [, values] of Object.entries(colors[style])) {
		cssColors += `${values.css}: ${values.hex};\n`;
	}
}
cssColors += '}\n';

fs.writeFileSync('./@colors.css', `${cssColors}\n`);
