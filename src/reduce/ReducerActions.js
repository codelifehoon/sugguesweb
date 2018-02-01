import React from 'react';
import * as types from './ActionTypes';


// action이 발생할때 action 구분과 action 처리를 위한 부가정보
export const dispatchSearchBarText = (searchText) => {
    return {
        type: types.DO_SEARCH,
        searchText : searchText ,  //검색 진행시 부가정보
    };
}

