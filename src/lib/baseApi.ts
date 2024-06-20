import fetching from '../../public/data.json';


export const baseApi = () : any => {
    const {data} = fetching;
    return data;
};

