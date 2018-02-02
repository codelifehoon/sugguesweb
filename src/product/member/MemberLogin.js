import React from 'react';
import Grid from "material-ui/Grid/Grid";
import Typography from "material-ui/Typography/Typography";
import withStyles from "material-ui/styles/withStyles";
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import {FileUpload,AccountCircle,ChevronRight} from "material-ui-icons";




const styles = theme => ({
    button: {
            width:'200px',

    },

    leftIcon: {

    },
    rightIcon: {

    },

});


class MemberLogin extends React.Component {

    render() {

    const  {classes} = this.props;
        return (
            <div>

                <Grid container>
                    {/* title row*/}
                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Typography type={'display1'} color={'error'} align={'left'}>Welcome!</Typography>
                        <Typography gutterBottom align={'left'}>
                            {`
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    `}
                        </Typography>
                    </Grid>


                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Button  raised className={classes.button}>
                            Google
                        </Button>
                    </Grid>


                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Button  raised className={classes.button}>
                            Facebook
                        </Button>
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Button  raised className={classes.button}>
                            Naver
                        </Button>
                    </Grid>
                </Grid>

            </div>
        );

    console.log(classes);

}
}

MemberLogin.propTypes = {};
export default withStyles(styles)(MemberLogin );