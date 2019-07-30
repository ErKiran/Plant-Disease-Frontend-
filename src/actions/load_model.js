import axios from 'axios';
import { BASE_URL } from './api';
import { LOAD_MODEL } from './types';

export const load_model = () => async dispatch => {
    try {
        const res = await axios.get(`${BASE_URL}/api/model`);
        dispatch({
            type: LOAD_MODEL,
            payload: res.data
        })
    } catch (e) {
        throw e
    }
};

