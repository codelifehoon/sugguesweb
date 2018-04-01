import React from 'react';
import {FacebookButton, FacebookCount ,KaKaoTalkButton ,TwitterButton } from "react-social";
import {Button} from "material-ui";
import withStyles from "material-ui/styles/withStyles";



const styles = theme => ({


});



class SnaShareForKR extends React.Component {

    facebookCount = (e) =>{

        console.log('###facebookCount');
        console.log(e);
    }
    render() {
    const url = this.props.pathname;
    const faceBookAppId = '1747638782217034';
    const kakaoJsKey = '';


    return (


        <div>

            <FacebookButton url={url} appId={faceBookAppId}>
                FB
            </FacebookButton>

            <TwitterButton url={url}>
                TW
            </TwitterButton>



        </div>
);
}
}

export  default withStyles(styles)(SnaShareForKR);
