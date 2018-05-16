'use strict';

import * as types from '../constants/barTypes';

const initialState = {
    orderBy: 'asc'
};

export default function barReducer(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE:
            let nextOrderBy = '';
            state.orderBy == 'desc' ? nextOrderBy = 'asc' : nextOrderBy = 'desc';
            return {
                ...state,
                orderBy: nextOrderBy
            };
            break;
        default:

            return state;
    }
}