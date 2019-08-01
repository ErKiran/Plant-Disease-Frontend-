import axios from 'axios';
import { BASE_URL } from './api';
import { GET_RECC } from './types';

export const get_recc = (dis) => async dispatch => {
    try {
        const res = await axios.get(`${BASE_URL}/api/desc`,{ params:{
            dis
        }
        });
        dispatch({
            type: GET_RECC,
            payload: res.data
        })
    } catch (e) {
        throw e
    }
};

