'use strict';

import * as types from '../constants/loginTypes';

let user = {
    name: 'Diablo',
    age: 32,
};

export function getLoginingAction() {
    return {
        type: types.LOGIN_DOING
    }
}

export function getLoginSuccessAction() {
    return {
        type: types.LOGIN_DONE,
        user:user
    }
}

export function getLoginErrorAction() {
    return {
        type: types.LOGIN_ERROR,
    }
}
