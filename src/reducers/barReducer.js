'use strict';

import * as types from '../constants/barTypes';

const initialState = {
    orderBy: 'asc'
};

export default function orderByChange(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE:
            let nextOrderBy = '';
            state.orderBy == 'desc' ? nextOrderBy = 'asc' : nextOrderBy = 'desc';
            console.log('orderByChange', nextOrderBy);
            return {
                ...state,
                orderBy: nextOrderBy
            };
            break;
        default:

            return state;
    }
}