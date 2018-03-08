
import {connect} from 'react-redux';
import * as actions from './ReducerActions';
import  SearchBar from '../product/main/SearchBar';
import  BodyContent from '../product/main/BodyContent'

let mapStatusSearchBar = (state) =>{
    return {
                searchValue : state.searchBoxChange.searchValue,
            };
    };

let mapDispatchSearchBar = (dispatch) =>{
    return {
        notiSearchTextChange : (searchText) => dispatch(actions.dispatchSearchBarText(searchText)),
    };
};


let mapStatusToMainBodyContentProps = (state) =>{
    return {
        searchValue : state.searchBoxChange.searchValue,
    };
};


export  const SearchBarContainer = connect(mapStatusSearchBar,mapDispatchSearchBar)(SearchBar);
export  const BodyContentContainer = connect(mapStatusToMainBodyContentProps)(BodyContent);


