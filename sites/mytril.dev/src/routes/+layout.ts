import { fetchPackageVersion } from '$lib/store/packages';

export const load = async () => {
	const packages = ['mytril', 'mytril-tools'];
	await Promise.all(packages.map(fetchPackageVersion));

	return {};
};
