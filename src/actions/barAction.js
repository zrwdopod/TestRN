'use strict';

import * as types from '../constants/barTypes';

export function getToggleAction() {
    return {
        type: types.TOGGLE,
    }
}