'use strict';

import * as types from '../constants/barTypes'; // 导入事件类别,用来做事件类别的判断

const initialState = {
    orderBy: 'desc'
};

export default function orderByChange(state = initialState, action) {
    switch (action.type) {
        case types.DESC:
            return {
                ...state,
                orderBy: 'desc'
            };
            break;
        case types.ASC:
            return {
                ...state,
                orderBy: 'asc'
            };
            break;
        default:

            return state;
    }
}