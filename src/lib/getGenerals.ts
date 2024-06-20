import { type IDataApi } from '@interface/home.ts';

export const getGenerals = async () => {
	const res = await fetch(import.meta.env.PUBLIC_API_URL);
	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}
	const {
		data: { Generals },
	} = (await res.json()) as IDataApi;

    return Generals
};
