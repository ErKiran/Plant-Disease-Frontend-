import axios from 'axios';
import { BASE_URL } from './api';
import { SYNC_GDRIVE } from './types';

export const syncGdrive = () => async dispatch => {
    try {
        const res = await axios.get(`${BASE_URL}/api/latest/img`);
        dispatch({
            type: SYNC_GDRIVE,
            payload: res.data
        })
    } catch (e) {
        throw e
    }
};

