type Theme = 'light' | 'dark';

interface StateColor {
	main: string;
	container: string;
	onMain: string;
	onContainer: string;
}

function adjustBrightness(color: string, percent: number): string {
	const num = parseInt(color.replace('#', ''), 16);
	const r = Math.min(255, Math.max(0, (num >> 16) + 255 * percent));
	const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + 255 * percent));
	const b = Math.min(255, Math.max(0, (num & 0x0000ff) + 255 * percent));
	return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export function generateStateColors(theme: Theme): Record<string, StateColor> {
	const baseColors = {
		warning: '#FFC107',
		success: '#4CAF50',
		info: '#2196F3',
		error: '#F44336'
	};

	const isDark = theme === 'dark';

	const result: Record<string, StateColor> = {};

	for (const [state, baseColor] of Object.entries(baseColors)) {
		result[state] = {
			main: isDark ? adjustBrightness(baseColor, 0.2) : baseColor,
			container: isDark ? adjustBrightness(baseColor, -0.3) : adjustBrightness(baseColor, 0.7),
			onMain: isDark ? '#FFFFFF' : '#000000',
			onContainer: isDark ? adjustBrightness(baseColor, 0.7) : adjustBrightness(baseColor, -0.5)
		};
	}

	return result;
}
