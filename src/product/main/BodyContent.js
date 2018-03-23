import React from 'react';
import Grid from "material-ui/Grid/Grid";
import withStyles from "material-ui/styles/withStyles";
import PropType from 'prop-types';
import * as dateformat from "dateformat";
import DateClickSelecter from "../CommonComponet/DateClickSelecter";
import ContentReviewCardList from "./ContentReviewCardList";
import 'typeface-roboto';

const styles = theme => ({
    alignCenter : {
        marginTop :'auto',
        marginBottom:'auto'
    },
    nextButton: {
        margin: theme.spacing.unit,
        width  : '80%',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
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

    return (

        <Grid container>
            {/* title row*/}

            <Grid item xs={12} > <DateClickSelecter dateString={this.state.searchDate}/></Grid>

            {/*2 row*/}
            <Grid item xs={12}>
                <ContentReviewCardList></ContentReviewCardList>
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

export default withStyles(styles)(BodyContent);