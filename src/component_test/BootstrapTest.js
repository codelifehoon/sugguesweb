import React from 'react';
import PropTypes from 'prop-types';
import { withStyles , MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import  Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    root: {
        backgroundColor: 'red',
    },
};



function BootstrapTest(props) {
    const { classes } = props;
    console.log('===============');

    return (<div >


        <div class="container">
            <Typography>
            Who can synthesise the dogma and attitude
            of an aspect if he has the
            spiritual acceptance of the wind?
            </Typography>
        </div>


        <div class="container">
            <div class="row">
                <div class="col-sm" className={classes.root}>
                    <Button  color="primary">세 칼럼 중 하나</Button>

                </div>
                <div class="col-sm">
                    <h6 olor="primary">세 칼럼 중 하나  dsdsds</h6>
                </div>
                <div class="col-sm">
                    세 칼럼 중 하나
                </div>
            </div>
        </div>


    </div>);

}


export  default withStyles(styles) (BootstrapTest);