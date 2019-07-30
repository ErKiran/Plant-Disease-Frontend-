import { SYNC_GDRIVE } from '../actions/types';

const initialState = {
    photos: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SYNC_GDRIVE:
            console.log(action)
            return {
                ...state,
                photos: action.payload
            };
        default:
            return state;
    }
}
