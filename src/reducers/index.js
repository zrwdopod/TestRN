'use strict';
import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import barReducer from './barReducer';
import listReducer from './listReducer';
import mainPageReducer from './mainPageReducer'
import navReducer from './navReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    bar: barReducer,
    list: listReducer,
    mainPage: mainPageReducer,
    nav:navReducer
});

export default rootReducer;