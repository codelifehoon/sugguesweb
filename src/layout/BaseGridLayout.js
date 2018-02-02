import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    rows : {
        height : 200,
    }

});

class BaseGridLayout extends React.Component {
    state = {
        direction: 'row',
        justify: 'flex-end',
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid   classes={classes.root}>
                <Grid  container  classes={classes.rows}>
                    <Grid item xs={1}  style={{ padding: '0px' }}>Important densities gains most afterlifes.</Grid>
                    <Grid item xs={9}>Important densities gains most afterlifes.</Grid>
                    <Grid item xs={1}>Important densities gains most afterlifes.</Grid>
                </Grid>
            </Grid>
        );
    }
}

BaseGridLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseGridLayout);
