'use strict';

import * as listTypes from '../constants/listTypes';
import roadImageList from '../assets/mock/road-image.json';

let dataList = [];
const imagePath = 'https://bj.bcebos.com/v1/gaopin-preview/';

for (let i = 0, len = roadImageList.length; i < len; i++) {
    dataList.push({key: i + '', text: 'row' + i, image: imagePath + roadImageList[i] + '.jpg'});
}

const initialState = {
    list: dataList,
    listType: listTypes.FLAT_LIST,
};

export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case listTypes.REVERSE:
            let nextList = JSON.parse(JSON.stringify(state.list)).reverse();
            return {
                ...state,
                list: nextList,
            };
            break;
        default:

            return state;
    }
}