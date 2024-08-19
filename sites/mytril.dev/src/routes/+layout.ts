import { fetchPackageVersion } from '$lib/store/packages';

export const load = async () => {
	const packages = ['mytril', 'create-mytril'];
	await Promise.all(packages.map(fetchPackageVersion));

	return {};
};
