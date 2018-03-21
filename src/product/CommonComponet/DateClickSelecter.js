import React from 'react';
import { withStyles } from 'material-ui/styles';
import {KeyboardArrowLeft, KeyboardArrowRight} from 'material-ui-icons';
import {Grid, Typography,Button} from "material-ui";
import propTypes from 'prop-types';
import dateformat from 'dateformat';

const styles = theme => ({
    root : {
        flexGrow:1,


    },
    button: {
        margin: theme.spacing.unit,
    },
    borderCss: {
        border: '1px solid silver',
    },
});

class DateClickSelecter extends React.Component {

    constructor(props) {

        super(props);
        dateformat.i18n = {
            dayNames: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
            ],
            monthNames: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
            ],
            timeNames: [
                'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
            ]
        };

    }


    state = {
        selectedDay : new Date(this.props.selectedDay)
    }

    keyboardArrowLeftClick = (e) =>{

        this.modifyDay(-1);

    }

    keyboardArrowRightClick = (e) =>{

        this.modifyDay(1);
    }

    modifyDay = (day) => {
        let newDate = this.state.selectedDay;
        newDate.setDate(newDate.getDate() + day);
        this.setState({selectedDay: newDate});
    }





    render() {
        const {classes} = this.props;

        return (
            <div>
            <Grid container className={classes.root}>
                <Grid item xs={3} className={classes.borderCss}  >
                        <Button variant='fab' mini color="secondary" aria-label="edit" className={classes.button}>
                            <KeyboardArrowLeft  onClick={this.keyboardArrowLeftClick}/>
                        </Button>
                </Grid>

                <Grid item xs={6} className={classes.borderCss} style={{paddingTop:'15px'}}>
                    <Typography variant={'headline'} className={classes.borderCss} >
                        {dateformat(this.state.selectedDay,'yyyy-mm-dd')}
                    </Typography>
                    <Typography className={classes.borderCss} >
                        {dateformat(this.state.selectedDay,'dddd')}
                    </Typography>
                </Grid>


                <Grid item xs={3} className={classes.borderCss}>
                    <Button variant='fab' mini color="secondary" aria-label="edit" className={classes.button}>
                        <KeyboardArrowRight onClick={this.keyboardArrowRightClick}/>
                    </Button>
                </Grid>
            </Grid>
            </div>
        );

    }
}

DateClickSelecter.propTypes = {
    selectedDay : propTypes.object.isRequired,
    classes : propTypes.object.isRequired
};

DateClickSelecter.defaultProps = {
    selectedDay :  new Date()
};

export default withStyles(styles)(DateClickSelecter );