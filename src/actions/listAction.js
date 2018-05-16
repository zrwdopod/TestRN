'use strict';

import * as types from '../constants/listTypes';

function getReverseAction() {
    return {
        type: types.REVERSE,
    }
}

export function reverse() {
    return dispatch => {
        dispatch(getReverseAction());
    }
}

