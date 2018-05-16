'use strict';

import * as loginTypes from '../constants/loginTypes';

const initialState = {
    status: 'click to login',
    isSuccess: false,
    user: null,
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case loginTypes.LOGIN_DOING:
            return {
                ...state,
                status: 'loading',
                isSuccess: false,
                user: null,
            };
            break;
        case loginTypes.LOGIN_DONE:
            return {
                ...state,
                status: 'login success',
                isSuccess: true,
                user: action.user,
            };
            break;
        case loginTypes.LOGIN_ERROR:
            return {
                ...state,
                status: 'login error',
                isSuccess: true,
                user: null,
            };
            break;
        default:

            return state;
    }

}