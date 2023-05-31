import { combineReducers } from 'redux';
import search from './search';
import server from './server';

const rootReducer = combineReducers({ search, server });

export default rootReducer;
