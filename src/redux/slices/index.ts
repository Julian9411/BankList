import {combineReducers} from 'redux';
import bankList from './bankListSlice';

const rootReducer = combineReducers({bankList});

export default rootReducer;
