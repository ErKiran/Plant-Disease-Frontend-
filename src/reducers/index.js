import { combineReducers } from 'redux';
import gdrive from './gdrive';
import model from './model';

export default combineReducers({
    images: gdrive,
    get: model
})