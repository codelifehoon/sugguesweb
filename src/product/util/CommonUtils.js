import React from 'react';
import queryString from "query-string";
import axios from "axios/index";
import * as Codes from './Codes'
import Cookies from 'universal-cookie';
import {withRouter} from "react-router-dom";


// Router 통해서 보여지는 page는  param을 읽기위해서 component export에 withRouter 추가 되어여합니다.
export const getUrlParam = (props,value) =>{

    if (typeof( props.location) !== 'undefined'
        &&  queryString.parse( props.location.search))  {

        let retValue =  queryString.parse(props.location.search)[value];
        if (typeof(retValue)  !== 'undefined' ) return retValue;
    }

    return '';
};


export const getWebCertInfoCookie = () =>{

    const cookies = new Cookies();
    return JSON.parse(cookies.get('webCertInfo').replace('j:',''));


};





