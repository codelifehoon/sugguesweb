import React from 'react';
import {FacebookButton, FacebookCount ,KaKaoTalkButton ,TwitterButton } from "react-social";
import {Button} from "material-ui";



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
                <Button>FB</Button>
            </FacebookButton>

            <TwitterButton url={url}>
                <Button>TW</Button>
            </TwitterButton>



        </div>
);
}
}

export  default (SnaShareForKR);
