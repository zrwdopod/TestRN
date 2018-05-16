'use strict';

import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import barReducer from './barReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    barReducer:barReducer,
    listReducer:listReducer
});

export default rootReducer;