'use strict';

import * as types from '../constants/barTypes';

function getToggleAction() {
    return {
        type: types.TOGGLE,
    }
}

export function orderByToggle() {
    return dispatch => {
        dispatch(getToggleAction());
    }
}