'use strict';

const initialState = {
    name: 'main page'
};

export default function mainPageReducer(state = initialState, action) {
    switch (action.type) {
        case 'todo':
            break;
        default:

            return state;
    }
}