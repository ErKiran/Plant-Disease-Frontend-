import { LOAD_MODEL } from '../actions/types';

const initialState = {
    disease: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_MODEL:
            return {
                ...state,
                disease: action.payload
            };
        default:
            return state;
    }
}
