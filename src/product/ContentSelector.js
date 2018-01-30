import React from 'react';
import SearchBar from './main/SearchBar';
import Typography from 'material-ui/Typography';
import BodyContent from "./main/BodyContent";
import PropTypes from 'prop-types';


class ContentSelector extends React.Component {


    render() {

      const contentSelecterKey = this.props.contentSelecterKey;



      if (contentSelecterKey === 'main')
        return (
            <div>
                <SearchBar/>
                <BodyContent/>
            </div>
        );
      else return ('');


    }
}



ContentSelector.propTypes = {
    contentSelecterKey: PropTypes.string,
};

export default (ContentSelector);