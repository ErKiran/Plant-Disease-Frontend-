import axios from 'axios';
import { MODEL_URL } from './api';

export const load_model = (img) => async dispatch => {
    try {
        const res = await axios.post(MODEL_URL, img);
        return res;
    } catch (e) {
        throw e
    }
};

