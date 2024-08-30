import fs from 'node:fs';

const dir = './dist/styles';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

// init
fs.copyFile('./index.css', './dist/styles/index.css', (err) => {
	if (err) throw err;
	console.log('File index.css was copied on dist !');
});

// libs
fs.copyFile('./@colors.css', './dist/styles/@colors.css', (err) => {
	if (err) throw err;
	console.log('File @colors.css was copied on dist !');
});
fs.copyFile('./@themes.css', './dist/styles/@themes.css', (err) => {
	if (err) throw err;
	console.log('File @themes.css was copied on dist !');
});
