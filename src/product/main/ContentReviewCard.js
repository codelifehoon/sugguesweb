import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import {AlarmAdd,Favorite,Share,ExpandMore,MoreVert,Mail,SpeakerNotes,ThumbUp} from 'material-ui-icons';
import {stateFromMarkdown} from 'draft-js-import-markdown';
import {stateToHTML} from 'draft-js-export-html';
import htmlReactParser from 'html-react-parser';


import dateformat from 'dateformat';
import {Badge, Snackbar} from "material-ui";



const styles = theme => ({
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 194,
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },

});

class ContentReviewCard extends React.Component {
    state = {   expanded: false ,
                snackbarOpen: false,
                snackbarMessage:'',
                snackbarVertical: 'top',
                snackbarHorizontal: 'center',
            };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    getFormatDate = (eventStart,eventEnd) =>{

        let retVal = null;
        if (eventStart && eventEnd){
            retVal =  (
                <div>
                    기간: {dateformat(new Date(eventStart),'mm월 dd일')+' 10:00'} ~ {dateformat(new Date(eventEnd),'mm월 dd일')+' 10:00'}
                </div>);

        }

        return retVal;

    }

    onAlarmAddBtn = () =>{
        this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onAlarmAddBtn'});
    }

    onThumbUpBtn = () =>{
        this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onThumbUpBtn'});
    }
    onCommentListBtn = () =>{
        this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onCommentListBtn'});
    }

    onShareBtnBtn = () =>{
        this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onShareBtnBtn'});
    }


    onClickSnackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };


    render() {
        const {snackbarOpen,snackbarVertical,snackbarHorizontal,snackbarMessage} = this.state;
        const { classes ,content } = this.props;
        const { eventDesc
            ,eventEnd
            ,eventLocations
            ,eventStart
            ,refPath
            ,repeatKind
            ,title
            ,avatarUrl
            ,mainImageUrl
            ,mainImageText} = this.props.content;


        const eventPeriod = this.getFormatDate(eventStart,eventEnd);
        const contentState = stateFromMarkdown(eventDesc);
        const eventDescHtml =  stateToHTML(contentState);
        const shortEventDesc=  contentState.getPlainText().substr(0,80);

        let mediaHeight = 0;

        if (mainImageUrl.length > 0) mediaHeight = classes.media.height;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar} src={avatarUrl}/>
                        }
                        // action={
                        //     <IconButton onClick={this.OnClickIconBtn}>
                        //         <MoreVert />
                        //     </IconButton>
                        // }
                        title={title + (repeatKind ? '(' + repeatKind + ')' : '')}
                        subheader={eventPeriod}
                    />
                    <CardMedia
                        className={classes.media} style={{height : mediaHeight}}
                        image={mainImageUrl}
                        title={mainImageText}
                    />
                    <CardContent>
                        <Typography component="p">
                            {shortEventDesc}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton  aria-label="Add to Alarm" onClick={this.onAlarmAddBtn}>
                            <AlarmAdd />
                        </IconButton>
                        <IconButton  aria-label="Add to ThumbUp" onClick={this.onThumbUpBtn}>
                            <ThumbUp/>
                        </IconButton>
                        <IconButton aria-label="Add to favorites"  onClick={this.onCommentListBtn}>
                            <Badge  badgeContent={10} color="secondary">
                                <SpeakerNotes  />
                            </Badge>
                        </IconButton>

                        <IconButton  aria-label="Share" onClick={this.onShareBtnBtn}>
                            <Share/>
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMore/>
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                {htmlReactParser(eventDescHtml)}

                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>



                <Snackbar
                    anchorOrigin={{vertical:snackbarVertical, horizontal:snackbarHorizontal }}
                    open={snackbarOpen}
                    onClose={this.onClickSnackbarClose}
                    SnackbarContentProps={{'aria-describedby': 'message-id',}}
                    message={<span id="message-id">{snackbarMessage}</span>}
                />

            </div>
        );



    }
}

ContentReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentReviewCard);
