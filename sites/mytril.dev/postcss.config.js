import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import postcssCustomMedia from 'postcss-custom-media';

// /** @type {import('postcss-preset-env').Config} */
const config = {
	plugins: [
		postcssPresetEnv({
			features: { 'nesting-rules': true }
		}),
		cssnano({
			preset: 'default'
		}),
		postcssCustomMedia()
	]
};

export default config;
