'use strict';

import { combineReducers } from 'redux';

import loginIn from './loginReducer';
import orderByChange from './barReducer';
import listReverse from './listReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
    orderByChange:orderByChange,
    listReverse:listReverse
});

export default rootReducer;