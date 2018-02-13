import React from 'react';
import SearchBar from './main/SearchBar';
import {SearchBarContainer,BodyContentContainer} from '../reduce/ContainerMain';
import PropTypes from 'prop-types';
import MemberLogin from "./member/MemberLogin";
import RegistryPlan from "./content/RegistryPlan";


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
      else if (templateSelectorKey === 'registryPlan') return (<RegistryPlan/>);


      else return '';


    }
}



TemplateSelector.propTypes = {
    templateSelecterKey: PropTypes.string.isRequired,
};

TemplateSelector.defaultProps = {
    templateSelecterKey: 'main',
};
export default (TemplateSelector);