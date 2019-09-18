import axios from 'axios';

const host = 'http://localhost:4000/api';


export const call = async (method, endpoint, data) => {
    const response = await axios[method](`${host}/${endpoint}`, data);
    return response.data;
}

export default { call };