import {$host} from './index'

export const fetchDatas = async (page, limit = 4) =>{

    const {data} = await $host.get('api/data', {params: {
        limit,page
        }});
    return data
};
