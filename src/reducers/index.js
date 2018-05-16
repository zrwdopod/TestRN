'use strict';
import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import barReducer from './barReducer';
import listReducer from './listReducer';
import mainPageReducer from './mainPageReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    bar: barReducer,
    list: listReducer,
    mainPage:mainPageReducer
});

export default rootReducer;