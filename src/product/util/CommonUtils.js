import React from 'react';
import queryString from "query-string";
import axios from "axios/index";
import * as Codes from './Codes'



export const getUrlParam = (props,value) =>{

    if (typeof( props.location) !== 'undefined'
        &&  queryString.parse( props.location.search))  {

        let retValue =  queryString.parse(props.location.search)[value];
        if (typeof(retValue)  !== 'undefined' ) return retValue;
    }

    return '';
};
 




