import { combineReducers } from 'redux';
import gdrive from './gdrive';
import model from './model';
import get_recc from './get_recc';

export default combineReducers({
    images: gdrive,
    get: model,
    soln: get_recc
})