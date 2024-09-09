import { describe, it, expect, vi, beforeEach } from 'vitest';
import { loadConfig } from '../load-files.js';
import fsPromises from 'fs/promises';

describe('loadConfig', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('should load and return a valid configuration', async () => {
		const mockFileContent = `
            export default {
                palette: {
                    primary: "#3b8eed",
                    secondary: "#ff3e00"
                }
            };
        `;

		vi.spyOn(fsPromises, 'readFile').mockResolvedValue(mockFileContent);
		const result = await loadConfig();

		expect(result).toEqual({
			palette: {
				primary: '#3b8eed',
				secondary: '#ff3e00'
			}
		});
	});

	it('should return undefined if file does not exist', async () => {
		vi.spyOn(fsPromises, 'readFile').mockRejectedValue(new Error('File not found'));
		const result = await loadConfig();
		expect(result).toBeUndefined();
	});

	it('should return undefined if the file does not contain a valid default export', async () => {
		const mockInvalidFileContent = `
            const someConfig = {};
            export default someConfig;
        `;

		vi.spyOn(fsPromises, 'readFile').mockResolvedValue(mockInvalidFileContent);
		const result = await loadConfig();
		expect(result).toBeUndefined();
	});

	it('should handle errors and return undefined', async () => {
		vi.spyOn(fsPromises, 'readFile').mockRejectedValue(new Error('Unexpected error'));
		const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const result = await loadConfig();
		expect(result).toBeUndefined();
		expect(consoleWarnMock).toHaveBeenCalledWith(new Error('Unexpected error'));
		consoleWarnMock.mockRestore();
	});
});
