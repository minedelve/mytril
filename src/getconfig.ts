// src/lib/utils/getConfig.ts
export async function getConfig() {
	const config = await import('/mytril.config.js');
	console.log('config', config);
	return config.default;
}
