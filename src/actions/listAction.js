'use strict';

import * as types from '../constants/listTypes';


export function reverseHandle() {
    return dispatch => {
        dispatch(reverse('xxx'));
    }
}


function reverse(xxx) {
    return {
        type: types.REVERSE,
    }
}