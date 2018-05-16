'use strict';

import * as types from '../constants/barTypes';


export function orderByToggle(curOrderBy) {
    return dispatch => {
        dispatch(toggle('xxx'));
    }
}


function toggle(xxx) {
    return {
        type: types.TOGGLE,
    }
}