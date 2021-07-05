import { reducer } from './reducers';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    data: reducer,
});