import React from 'react';
import SearchBar from './main/SearchBar';
import {SearchBarContainer,BodyContentContainer} from '../reduce/Containers';
import PropTypes from 'prop-types';
import MemberLogin from "./member/MemberLogin";
import RegistryLifePlan from "./content/RegistryLifePlan";


class TemplateSelector extends React.Component {


    render() {

      const {templateSelectorKey} = this.props;
      console.log(templateSelectorKey);
      if (templateSelectorKey === 'main')

        return (
            <div>
                <SearchBarContainer />
                <BodyContentContainer/>
            </div>
        );
      else if (templateSelectorKey === 'memberLogin') return (<MemberLogin/>);
      else if (templateSelectorKey === 'registryLifePlan') return (<RegistryLifePlan/>);


      else return '';


    }
}



TemplateSelector.propTypes = {
    templateSelecterKey: PropTypes.string.isRequired,
};

export default (TemplateSelector);