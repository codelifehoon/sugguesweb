import React from 'react';
import Grid from "material-ui/Grid/Grid";
import withStyles from "material-ui/styles/withStyles";
import PropType from 'prop-types';
import * as dateformat from "dateformat";
import DateClickSelecter from "../CommonComponet/DateClickSelecter";
import ContentReviewCardList from "./ContentReviewCardList";
import 'typeface-roboto';
import axios from "axios/index";

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
    },
});


class BodyContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchDate : dateformat(new Date(),'yyyy-mm-dd'),
            contentList: null
    };
    }

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
                        contentTemp.mainImageUrl       ='https://tercertestamentonet.files.wordpress.com/2015/03/audios.jpg';
                        contentTemp.mainImageText      = 'bird';
                        jsonList.push(contentTemp);


                    }
                }

                this.setState({contentList:jsonList});
            })
            .catch(err => { console.log('>>>> :' + err); });

    }


    render() {

        const  {classes} = this.props;
        const  {contentList} = this.state;

    return (

        <Grid container>
            {/* title row*/}

            <Grid item xs={12} > <DateClickSelecter dateString={this.state.searchDate}/></Grid>

            {/*2 row*/}
            <Grid item xs={12}>
                {contentList ? <ContentReviewCardList contentList={contentList}></ContentReviewCardList> : ''}
            </Grid>
        </Grid>



            );

}
}

BodyContent.propTypes = {
    searchValue: PropType.string.isRequired
};

BodyContent.defaultProps = {
    searchValue: '',
};

export default withStyles(styles)(BodyContent);