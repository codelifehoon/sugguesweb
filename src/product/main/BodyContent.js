import React from 'react';
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import withStyles from "material-ui/es/styles/withStyles";
import PropType from 'prop-types';
import  BodyContentPanelList from './BodyContentPanelList';
import * as dateformat from "dateformat";
import DateClickSelecter from "../CommonComponet/DateClickSelecter";


const styles = theme => ({
    alignCenter : {
        marginTop :'auto',
        marginBottom:'auto'
    },
});



class BodyContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        searchDate : dateformat(new Date(),'yyyy-mm-dd'),
    };
    }



    render() {

    const  {classes} = this.props;
    console.log(classes);

    return (

        <Grid container>
            {/* title row*/}

            <Grid item xs={12} > <DateClickSelecter dateString={this.state.searchDate}/></Grid>

            {/*2 row*/}
            <Grid item xs={12}>
                <BodyContentPanelList></BodyContentPanelList>
            </Grid>

        </Grid>



            );

}
}

BodyContent.propTypes = {
    searchValue: PropType.string.isRequired
};

BodyContent.defaultProps = {
    searchValue: '',
};

export default withStyles(styles)(BodyContent );