import React from 'react';
import {FacebookButton, FacebookCount ,KaKaoTalkButton ,TwitterButton } from "react-social";
import {Button, IconButton} from "material-ui";
import withStyles from "material-ui/styles/withStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,

    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,

    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
} from 'react-share';

import './css/SnsShareForKR.css';

const styles = theme => ({
});



class SnaShareForKR extends React.Component {
    render() {
        
        const shareUrl = this.props.pathname;
        const title = '공유하기';

        return (
            <div className="Demo__container">
                <div className="SnsStyle">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="SnsStyle_button">
                        <FacebookIcon
                            size={32}
                            round />
                    </FacebookShareButton>

                    <FacebookShareCount
                        url={shareUrl}
                        className="SnsStyle_count">
                        {count => count}
                    </FacebookShareCount>
                </div>

                <div className="SnsStyle">
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="SnsStyle_button">
                        <TwitterIcon
                            size={32}
                            round />
                    </TwitterShareButton>

                    <div className="SnsStyle_count">
                        &nbsp;
                    </div>
                </div>

                <div className="SnsStyle">
                    <GooglePlusShareButton
                        url={shareUrl}
                        className="SnsStyle_button">
                        <GooglePlusIcon
                            size={32}
                            round />
                    </GooglePlusShareButton>

                    <GooglePlusShareCount
                        url={shareUrl}
                        className="SnsStyle_count">
                        {count => count}
                    </GooglePlusShareCount>
                </div>

                <div className="SnsStyle">
                    <TumblrShareButton
                        url={shareUrl}
                        title={title}
                        windowWidth={660}
                        windowHeight={460}
                        className="SnsStyle_button">
                        <TumblrIcon
                            size={32}
                            round />
                    </TumblrShareButton>

                    <TumblrShareCount url={shareUrl}
                                      className="SnsStyle_count" />
                </div>

            </div>
        );
    }
}

export  default withStyles(styles)(SnaShareForKR);
