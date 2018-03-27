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
import axios from "axios/index";
import SnaShareForKR from "../CommonComponet/SnaShareForKR";



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
    state = {   expandedDesc: false ,
                expandedShare: false ,
                snackbarOpen: false,
                snackbarMessage:'',
                snackbarVertical: 'top',
                snackbarHorizontal: 'center',
                eventContentNo : -1,
                contentThumbupNo :-1,
                contentAlarmNo :-1,
                contentCommentCnt : -1,

    };

    componentDidMount(){

        this.setState( {eventContentNo : this.props.content.eventContentNo,
                            contentThumbupNo :this.props.content.contentThumbupNo,
                            contentAlarmNo :this.props.content.contentAlarmNo,
                            contentCommentCnt : this.props.content.contentCommentCnt,
                            expandedDesc: this.props.expandedDesc,
                            expandedShare : this.props.expandedShare,
                        });
    }

    handleExpandClick = () => {
        this.setState({ expandedDesc: !this.state.expandedDesc });
    };

    getFormatDate = (eventStart,eventEnd) =>{

        let retVal = null;
        if (eventStart && eventEnd){
            retVal =  (
                <div>
                    {dateformat(new Date(eventStart),'mm월 dd일')+' 10:00'} ~ {dateformat(new Date(eventEnd),'mm월 dd일')+' 10:00'}
                </div>);

        }

        return retVal;

    }

    onAlarmAddBtn = () =>{

        // this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onAlarmAddBtn'});

        const  {contentAlarmNo,eventContentNo} = this.state;


        // 등록 된 후에 삭제할때
        if (contentAlarmNo > 0) {

            axios.patch('http://localhost:8080/Content/V1/UpdateContentAlarm/'+  contentAlarmNo +'/N'
                ,{}
                , {withCredentials: true, headers: {'Content-Type': 'application/json'}}
            )
                .then(res => { this.setState({contentAlarmNo : -1});})
                .catch(err => { console.error('>>>> :' + err); });

        }else{

            //신규 알람 등록
            const jsonValue = {
                "eventContentNo": eventContentNo
            };
            axios.post('http://localhost:8080/Content/V1/AddContentAlarm'
                , jsonValue
                , {withCredentials: true, headers: {'Content-Type': 'application/json'}}
                        )
                .then(res => { this.setState({contentAlarmNo : res.data});})
                .catch(err => { console.error('>>>> :' + err); });

        }

    }

    onThumbUpBtn = () =>{

        const  {contentThumbupNo,eventContentNo} = this.state;

        // 등록 된 후에 삭제할때
        if (contentThumbupNo > 0) {

            axios.patch('http://localhost:8080/Content/V1/UpdateContentThumbUp/'+  contentThumbupNo +'/N'
                ,{}
                , {withCredentials: true, headers: {'Content-Type': 'application/json'}}
            )
                .then(res => { this.setState({contentThumbupNo : -1});})
                .catch(err => { console.error('>>>> :' + err); });

        }else{

            //신규 알람 등록
            const jsonValue = {
                "eventContentNo": eventContentNo
            };

            axios.post('http://localhost:8080/Content/V1/AddContentThumbUp'
                , jsonValue
                , {withCredentials: true, headers: {'Content-Type': 'application/json'}}
            )
                .then(res => { this.setState({contentThumbupNo : res.data});})
                .catch(err => { console.error('>>>> :' + err); });
        }

    }
    onCommentListBtn = () =>{
        this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onCommentListBtn'});
    }

    onShareBtnBtn = () =>{
        // this.setState({ snackbarOpen: true, snackbarMessage:'메세지메세지메세지:onShareBtnBtn'});
        this.setState({ expandedShare: !this.state.expandedShare });

    }

    onClickSnackbarClose = () => {
        this.setState({ snackbarOpen: false });
    };

    render() {


        const {snackbarOpen,snackbarVertical,snackbarHorizontal,snackbarMessage,contentThumbupNo,contentAlarmNo,contentCommentCnt} = this.state;
        const { classes ,content ,initContentDescOpen} = this.props;
        const { eventDesc
            ,eventEnd
            ,eventLocations
            ,eventStart
            ,refPath
            ,repeatKind
            ,title
            ,avatarUrl
            ,mainImageUrl
            ,mainImageText
            ,userNm} = this.props.content;
        const avatarText = avatarUrl ? '' : userNm;
        let alarmAddIconColor, thumbUpIconColor;


        if (contentAlarmNo > 0 ) alarmAddIconColor = 'red';
        else alarmAddIconColor = '';

        if (contentThumbupNo > 0 ) thumbUpIconColor = 'red';
        else thumbUpIconColor = '';






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
                            <Avatar aria-label="Recipe" className={classes.avatar} src={avatarUrl}>{avatarText}</Avatar>
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
                        <IconButton  aria-label="Add to Alarm" onClick={this.onAlarmAddBtn}  style={{color: alarmAddIconColor}} >
                            <AlarmAdd />
                        </IconButton>
                        <IconButton  aria-label="Add to ThumbUp" onClick={this.onThumbUpBtn} style={{color: thumbUpIconColor}}>
                            <ThumbUp/>
                        </IconButton>
                        <IconButton aria-label="Add to favorites"  onClick={this.onCommentListBtn}>
                            <Badge  badgeContent={contentCommentCnt} color="secondary">
                                <SpeakerNotes  />
                            </Badge>
                        </IconButton>

                        <IconButton  aria-label="Share" onClick={this.onShareBtnBtn}>
                            <Share/>
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expandedDesc,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expandedDesc}
                            aria-label="Show more"
                        >
                            <ExpandMore/>
                        </IconButton>
                    </CardActions>

                    <Collapse in={this.state.expandedShare} timeout="auto" unmountOnExit>
                        <SnaShareForKR pathname={'https://github.com'}/>
                    </Collapse>


                    <Collapse in={this.state.expandedDesc} timeout="auto" unmountOnExit>
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
