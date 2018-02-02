import React from 'react';
import {connect} from 'react-redux';
import * as actions from './ReducerActions';
import  SearchBar from '../product/main/SearchBar';
import  BodyContent from '../product/main/BodyContent'

let mapStatusToSearchBarProps = (state) =>{
    return {
                searchValue : state.searchBoxChange.searchValue,
            };
    };

let mapDispatchToSearchBarProps = (dispatch) =>{
    return {
        notiSearchTextChange : (searchText) => dispatch(actions.dispatchSearchBarText(searchText)),
    };
};


let mapStatusToMainBodyContentProps = (state) =>{
    return {
        searchValue : state.searchBoxChange.searchValue,
    };
};


export  const SearchBarContainer = connect(mapStatusToSearchBarProps,mapDispatchToSearchBarProps)(SearchBar);
export  const BodyContentContainer = connect(mapStatusToMainBodyContentProps)(BodyContent);


