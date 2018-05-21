import React from 'react';
import { withStyles } from 'material-ui/styles';
import axios from 'axios';
import {Button, Icon} from "material-ui";
import propTypes from 'prop-types';
import {KeyboardArrowRight} from "material-ui-icons";
import {Link, withRouter} from "react-router-dom";
import {getWebCertInfoCookie} from "../util/CommonUtils";


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

      /*
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
*/


    }

    componentDidMount(){

        if (getWebCertInfoCookie() !== ''){
            this.setState({loginStr : '로그아웃',webCertInfo : getWebCertInfoCookie()});
        }
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


            let locaiton = 'http://localhost:3000' + this.props.location.pathname;
            if (this.props.location.search) locaiton += this.props.location.search;


            window.location.href = '/memberLogin?cb='+ encodeURIComponent(locaiton);
        }

    }

    render() {
        const { classes } = this.props;

        return (<div>

            <Button variant="flat" color="inherit" aria-label="edit" className={classes.button}   onClick={this.loginOutClick} >
                {this.state.loginStr}
            </Button>


        </div>);
    }
}


LogInOutButton.propTypes = {
    classes: propTypes.object.isRequired,

};

export default withStyles(styles)(withRouter(LogInOutButton));