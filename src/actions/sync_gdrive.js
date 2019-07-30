import axios from 'axios';
import { BASE_URL } from './api';

export const syncGdrive = () => async dispatch => {
    try {
        const res = await axios.get(`${BASE_URL}/api/latest/img`);
        console.log(res)
        return res
    } catch (e) {
        throw e
    }
};

