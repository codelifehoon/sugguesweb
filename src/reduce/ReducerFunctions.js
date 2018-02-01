import React from 'react';
import {combineReducers} from 'redux';
import * as types from './ActionTypes';


const searchInitialState = {
    searchValue :'',
    pos : 'none'
};


// action 발생시 처리 logic 및 action 부가정보를 받아서 state 값을 변경하든. 뭔가를 하는 module
export  const  searchBoxChange = (state=searchInitialState , action) => {

    switch (action.type){
        case types.DO_SEARCH :
            return Object.assign({},state,{searchValue:action.searchText});
        default:
            return Object.assign({},state,{searchValue:'none', pos :''});
    }
}

const reducerFunctions = combineReducers({
    searchBoxChange
});

export default reducerFunctions;
