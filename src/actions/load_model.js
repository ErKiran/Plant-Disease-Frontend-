import axios from 'axios';
import { BASE_URL } from './api';

export const load_model = (img) => async dispatch => {
    try {
        const res = await axios.post(`${BASE_URL}/api/model`, img);
        return res;
    } catch (e) {
        throw e
    }
};

