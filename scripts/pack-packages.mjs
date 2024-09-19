import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../dist', 'index.style.css');

const fileContent = '/* ready for build your mine */';

fs.writeFileSync(filePath, fileContent, 'utf8', (err) => {
	if (err) {
		console.error('Error for create index.style.css :', err);
	} else {
		console.log('index.style.css has been created :', filePath);
	}
});
