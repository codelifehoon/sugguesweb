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

    oAuthOnClick = (authType) => {

        let oAuthUrl = '';
        if (authType === 'google'){
            oAuthUrl = 'http://localhost:7070/sv/oAuth/google'
        }else if (authType === 'facebook'){
            oAuthUrl = 'http://localhost:7070/sv/oAuth/facebook'
        }
        else {
            oAuthUrl = 'http://localhost:7070/sv/oAuth/naver'
        }


        console.log(oAuthUrl);
        window.location.href = oAuthUrl;

    }

    render() {
    const  {classes} = this.props;

        return (
            <div>

                <Grid container>
                    {/* title row*/}
                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Typography type={'display1'} color={'primary'} align={'left'}>Welcome!</Typography>
                        <Typography gutterBottom align={'left'}>
                            {`
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    `}
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Button  raised className={classes.button} onClick={() => {this.oAuthOnClick('google')}}>
                            google
                        </Button>
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Button  raised className={classes.button} onClick={() => {this.oAuthOnClick('facebook')}}>
                            facebook
                        </Button>
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <Button  raised className={classes.button} onClick={() => {this.oAuthOnClick('naver')}}>
                            naver
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                    <Typography gutterBottom align={'center'} color={'secondary'} >
                        로그인 정보는 1년동안 유지 됩니다.
                    </Typography>

                    </Grid>

                </Grid>

            </div>
        );

    console.log(classes);

}
}

MemberLogin.propTypes = {};

export default withStyles(styles)(MemberLogin);