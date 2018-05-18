'use strict';

import * as loginTypes from '../constants/loginTypes';

let user = {
    name: 'Diablo',
    age: 32,
};

export function load() {
    return {
        types: [loginTypes.LOGIN_DOING, loginTypes.LOGIN_DONE, loginTypes.LOGIN_ERROR],
        promise: () => fetch('https://www.baidu.com/')
    }
}

export function getLoginingAction() {
    return {
        type: loginTypes.LOGIN_DOING
    }
}

export function getLoginSuccessAction() {
    return {
        type: loginTypes.LOGIN_DONE,
        user:user
    }
}

export function getLoginErrorAction() {
    return {
        type: loginTypes.LOGIN_ERROR,
    }
}

// const xxx = postTitle => (dispatch, getState) => {
//     dispatch(getLoginingAction());
//     return fetch(`http://www.baidu.com`)
//         .then(response => response.json())
//         .then(json => dispatch(getLoginSuccessAction(postTitle, json)));
// }
//
// export xxx;
