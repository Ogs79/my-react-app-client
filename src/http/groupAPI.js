import { $authHost, $host } from './index';
import { jwtDecode } from 'jwt-decode';

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type);
    return data;
};

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data;
};

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand);
    return data;
};

export const fetchBrands = async ( ) => {
    const { data } = await $host.get('api/brand', )
    return data;
};

export const createGroup = async (group) => {
    const { data } = await $authHost.post('api/group', group);
    return data;
};

export const fetchGroups = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get('api/group', {params: {
        typeId, brandId, page, limit
    }});
    return data;
}

export const fetchOneGroup = async (id) => {
    const { data } = await $host.get('api/group/' + id);
    return data;
}



