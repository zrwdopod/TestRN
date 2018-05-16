'use strict';

import * as types from '../constants/listTypes';
import roadImageList from '../assets/mock/road-image.json';

let dataList = [];
let imagePath = 'https://bj.bcebos.com/v1/gaopin-preview/';
let imageList = roadImageList;

for (let i = 0, len = imageList.length; i < len; i++) {
    dataList.push({key: i + '', text: 'row' + i, image: imagePath + imageList[i] + '.jpg'});
}

const initialState = {
    list: dataList,
    listType: 'flat',
};



export default function reverse(state = initialState, action) {
    switch (action.type) {
        case types.REVERSE:
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