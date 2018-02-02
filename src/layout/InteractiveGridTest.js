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
    demo: {
        height: 200,
        border: '1px solid silver',
    },

    paper: {
        border: '1px solid silver',
        padding: theme.spacing.unit * 2,
        height: '100%',
        paddingTop: (0 + 1) * 10,
        paddingBottom: (0 + 1) * 10,

    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class InteractiveGrid extends React.Component {
    state = {
        direction: 'row',
        justify: 'flex-end',

    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { alignItems, direction, justify } = this.state;
        return (
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={classes.demo}
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >

                        <Grid key={0} item >
                            <Paper className={classes.paper} >
                                1
                            </Paper>
                        </Grid>

                        <Grid key={1} item >
                            <Paper className={classes.paper} >
                                2
                            </Paper>
                        </Grid>

                        <Grid key={2} item >
                            <Paper
                                className={classes.paper}
                                style={{ paddingTop: 0, paddingBottom: 0}}

                            >
                                3
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

InteractiveGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);
