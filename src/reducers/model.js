import { LOAD_MODEL } from '../actions/types';

const initialState = {
    model: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_MODEL:
            return {
                ...state,
                model: action.payload
            };
        default:
            return state;
    }
}
