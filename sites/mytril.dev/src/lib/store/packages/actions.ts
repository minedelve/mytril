import axios from 'axios';
import { versions } from './state';

export async function fetchPackageVersion(packageName: string): Promise<void> {
	try {
		const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
		const latestVersion = response.data['dist-tags'].latest as string;

		versions.update((currentVersions) => {
			const existingPackage = currentVersions.find((pkg) => pkg?.name === packageName);
			if (existingPackage) {
				existingPackage.version = latestVersion;
			} else {
				currentVersions.push({ name: packageName, version: latestVersion });
			}

			return currentVersions;
		});
	} catch (error) {
		console.error(`Error fetching version for ${packageName}:`, error);
	}
}
