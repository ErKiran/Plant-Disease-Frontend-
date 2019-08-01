import { GET_RECC } from '../actions/types';

const initialState = {
    solution: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RECC:
            return {
                ...state,
                solution: action.payload
            };
        default:
            return state;
    }
}
