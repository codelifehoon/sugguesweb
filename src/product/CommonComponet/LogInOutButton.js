import React from 'react';
import { withStyles } from 'material-ui/styles';
import axios from 'axios';
import {Button, Icon} from "material-ui";
import propTypes from 'prop-types';
import {KeyboardArrowRight} from "material-ui-icons";
import {Link} from "react-router-dom";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class LogInOutButton extends React.Component {

    constructor(props){
        super(props);

        axios.get('http://localhost:3000/sv/Auths/getAuthInfo')
            .then(res =>{
                try{
                    this.setState({webCertInfo : res.data});
                    if (this.state.webCertInfo !== ''){
                        this.setState({loginStr : '로그아웃'});
                    }
                } catch (e){
                    console.log(e);
                }
            }).catch(err => { console.log('>>>> :' + err); });

    }

    state = {
        webCertInfo : '',
        loginStr : '로그인'
    }

    isLogin= () =>{
        if (this.state.webCertInfo !== '') {
            return true;
        }
        else{
            return false;
        }
    }

    loginOutClick = () => {
        // 로그인 여부 확인 api call
         console.log('##loginOutClick');
         const redirUrl = encodeURIComponent('http://localhost:3000');
        console.log(redirUrl);
        if (this.isLogin())
        {
             window.location.href = '/sv/Auths/setLogout/'  + redirUrl;
        }
        else{
             window.location.href = '/memberLogin';
        }

    }


    render() {
        const { classes } = this.props;

        return (<div>
            <Button className={classes.button} variant="raised" onClick={this.loginOutClick}>
                {this.state.loginStr}
            </Button>

        </div>);
    }
}

LogInOutButton.propTypes = {
    classes: propTypes.object.isRequired,

};

export default withStyles(styles)(LogInOutButton);