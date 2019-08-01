import axios from 'axios';
import { MODEL_URL } from './api';
import {LOAD_MODEL} from './types'

export const load_model = (img) => async dispatch => {
    try {
        const headers = {
            'content-type': 'multipart/form-data'
        }
        const res = await axios.post(MODEL_URL, img, {
            headers: headers
        });
        dispatch({
            type: LOAD_MODEL,
            payload: res.data
        })
    } catch (e) {
        throw e
    }
};

