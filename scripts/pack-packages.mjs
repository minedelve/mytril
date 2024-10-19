import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../dist', 'index.style.css');

const fileContent = '/* ready for build your mine */';

fs.writeFileSync(filePath, fileContent, 'utf8', (err) => {
	if (err) {
		console.error('Error for create index.style.css :', err);
	} else {
		console.log('index.style.css has been created :', filePath);
	}
});
