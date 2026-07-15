import fetching from '../data/site-data.json';


export const baseApi = () : any => {
    const {data} = fetching;
    return data;
};
