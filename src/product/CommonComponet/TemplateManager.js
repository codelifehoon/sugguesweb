import React from 'react';
import MemberLogin from "../member/MemberLogin";
import RegistryPlan from "../content/RegistryPlan";


class TemplateSelector  {

    static getTemplateList = () => {
        let pageList = [
            {componentName : 'main', componentObj: null , componentTitle:'welcome' , key:100},
            {componentName : 'memberLogin', componentObj: <MemberLogin/> , componentTitle:'로그인',key:200},
            {componentName : 'registryPlan', componentObj: <RegistryPlan/> , componentTitle:'등록',key:300},

        ];

        return pageList;
    };


    static getComponent = (componentName) =>{
        return TemplateSelector.getTemplateList().find( (item) => {

            return item.componentName == componentName
        });

    };

    static getComponentName = (componentName) =>{
        return TemplateSelector.getComponent(componentName).componentName;
    };

    static getComponentObj = (componentName) =>{
        return TemplateSelector.getComponent(componentName).componentObj;
    };

    static getComponentTitle = (componentName) =>{
        return TemplateSelector.getComponent(componentName).componentTitle;
    };




}


export  default (TemplateSelector);