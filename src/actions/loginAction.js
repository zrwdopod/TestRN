'use strict';

import * as types from '../constants/loginTypes';

let user = {
    name: 'Diablo',
    age: 32,
};

function getLoginingAction() {
    return {
        type: types.LOGIN_DOING
    }
}

function getLoginSuccessAction(isSuccess, user) {
    return {
        type: types.LOGIN_DONE,
        user: user,
    }
}

function getLoginErrorAction(isSuccess) {
    return {
        type: types.LOGIN_ERROR,
    }
}

export function login() {
    return dispatch => {
        dispatch(getLoginingAction());

        let result = fetch('https://www.google.com/')
            .then((res) => {
                dispatch(getLoginSuccessAction(true, user));
            }).catch((err) => {
                dispatch(getLoginErrorAction(false));
            })
    }
}
