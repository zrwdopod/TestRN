'use strict';

import { combineReducers } from 'redux';

import loginIn from './loginReducer';
import orderByChange from './barReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
    orderByChange:orderByChange,
});

export default rootReducer;