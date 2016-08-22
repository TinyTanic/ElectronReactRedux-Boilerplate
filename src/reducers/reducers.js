import * as SimpleActions from '../actions/SimpleActions'

import {
   simpleReducer
} from './SimpleReducers'

import {
   combineReducers
} from 'redux'

export const reducers = combineReducers({
   simple: simpleReducer
});
