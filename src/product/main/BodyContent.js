import React from 'react';
import Grid from "material-ui/Grid/Grid";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from 'prop-types';
import * as dateformat from "dateformat";
import ContentReviewCardList from "./ContentReviewCardList";
import ArrowForward from 'material-ui-icons/ArrowForward';
import 'typeface-roboto';
import axios from "axios/index";
import {Button, CircularProgress, Icon, IconButton} from "material-ui";
import {ExpandMore} from "material-ui-icons";
import {doIntergateSearch} from "../util/CommonUtils";
import green from 'material-ui/colors/green';
import classNames from 'classnames';
import NoSearchResultsCard from "./NoSearchResultsCard";

const styles = theme => ({
    alignCenter : {
        marginTop :'auto',
        marginBottom:'auto'
    },
    nextButton: {
        margin: theme.spacing.unit,
        width  : '80%',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    }, button: {
        margin: theme.spacing.unit,
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },

});


class BodyContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchDate : dateformat(new Date(),'yyyy-mm-dd'),
            contentList: null,
            moreLoading : false,
            moreLoadingSuccess: false,
        };
    }

    /*
    componentDidMount(){

        axios.get('http://localhost:8080/Content/V1/findContentList/1/Sat%20Mar%2031%202018%2016%3A57%3A36%20GMT%2B0900%20(KST)/2/3'
            ,{withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(res =>{
                const data = res.data;
                let jsonList = [];


                for (let key in data.content){
                    if(data.content.hasOwnProperty(key)) {

                        let d = data.content[key];
                        let contentTemp = Object.assign({},d.eventContent,d.user);

                        contentTemp.contentThumbupNo   =d.contentThumbUp.contentThumbupNo;
                        contentTemp.contentAlarmNo     =d.contentAlarm.contentAlarmNo;
                        contentTemp.contentCommentCnt  =d.commentCnt;

                        jsonList.push(contentTemp);


                    }
                }

                this.setState({contentList:jsonList});
            })
            .catch(err => { console.log('>>>> :' + err); });

    }
*/

    createContentList= (responseData) => {

        const data = responseData;
        let jsonList = [];


        for (let key in data.content){
            if(data.content.hasOwnProperty(key)) {

                let d = data.content[key];
                let contentTemp = Object.assign({},d.eventContent,d.user);

                contentTemp.contentThumbupNo   =d.contentThumbUp.contentThumbupNo;
                contentTemp.contentAlarmNo     =d.contentAlarm.contentAlarmNo;
                contentTemp.contentCommentCnt  =d.commentCnt;
                jsonList.push(contentTemp);

            }
        }
        return jsonList;
    }

    moreContnetComplite = () => {

    }


    moreContentBtn = () =>{

        const  {notiIntergrateSearch,content} = this.props;

        if (content.responseData)
        {
            this.setState({moreLoading:true,moreLoadingSuccess:false});

            doIntergateSearch(notiIntergrateSearch
                ,content.period
                ,content.searchSentence
                ,content.latitude
                ,content.longitude
                ,content.responseData.number + 1
                ,content.responseData.content
                ,()=>{this.setState({moreLoading:false,moreLoadingSuccess:false});});

        };
    }



    render() {

        const  {classes,content} = this.props;
        const  {moreLoading,moreLoadingSuccess} = this.state;
        let contentList= null;
        let moreBtnFlag = false;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: moreLoadingSuccess,
        });

        if (content.responseData) contentList = this.createContentList(content.responseData);
        if (content.responseData && !content.responseData.last ) moreBtnFlag = true;
        if (contentList && contentList.length == 0 ) contentList = null;

        return (

            <Grid container>
                {/*2 row*/}
                <Grid item xs={12}>
                    {contentList
                        ? <ContentReviewCardList contentList={contentList}/>
                        : <NoSearchResultsCard/>}
                </Grid>

                {
                    moreBtnFlag
                        ?<Grid item xs={12}>
                        <div className={classes.wrapper}>
                            <IconButton
                                variant="raised"
                                color="primary"
                                className={buttonClassname}
                                disabled={moreLoading}
                                onClick={this.moreContentBtn}
                            >
                                more     <ExpandMore />
                            </IconButton>
                            {moreLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </div>
                        </Grid>
                        : ''
                }

            </Grid>



        );

    }
}

BodyContent.propTypes = {
    content: PropTypes.object.isRequired,
};

BodyContent.defaultProps = {
    content: null,
};

export default withStyles(styles)(BodyContent);