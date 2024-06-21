import type { IDataApi,IGenerals } from '@interface/home.ts';
import fetching from '@/public/data.json';

export const getGeneralsApi = async () => {
	const res = await fetch(import.meta.env.PUBLIC_API_URL);
	if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}
	const {
		data: { Generals },
	} = (await res.json()) as IDataApi;

	return Generals;
};

export const getGenerals = () :IGenerals => {
	const {data: { Generals }} = fetching;

	return Generals;
};

