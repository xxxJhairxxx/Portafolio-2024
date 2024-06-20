import { type IDataApi } from '@interface/home.ts';

export const BaseApi = async (api: string) => {
	const res = await fetch(api);
	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}
	const { data } = (await res.json()) as IDataApi;
	return data;
};
