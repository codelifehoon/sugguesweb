import React from 'react';
import PropTypes from 'prop-types';
import ContentReviewCard from "../main/ContentReviewCard";
import ContentCommentList from "../main/ContentCommentList";





class ContentMain extends React.Component {


    render() {
        const {content} = this.props;

        return (<div>
                    <br/><br/>
                    <ContentReviewCard content={content} from={'ContentMain'} expandedDesc={true} expandedShare={true}></ContentReviewCard>
                    <ContentCommentList/>

                </div>
        );
    }
}

ContentMain.defaultProps = {
    content: {
        eventContentNo :1,
        eventDesc: "# this **markd**own editer..&nbsp;",
        eventEnd: "2018-03-22T01:05:53.257Z",
        eventLocations: [
            {
                address: "Castus bulla hic promissios messor est.",
                addressDtls: "",
                latitude: 37.497889,
                longitude: 127.027616,
            }
        ],
        eventStart: "2018-03-22T01:05:53.257Z",
        refPath: "",
        repeatKind: "NONE",
        tags: "#가나다 #나다라 #마바사",
        title: "Assimilatios prarere, tanquam albus canis.",
        avatarUrl : 'https://lh5.googleusercontent.com/-l6AxNJNHOy4/AAAAAAAAAAI/AAAAAAAAIWg/WsSH3Ut8Mgg/photo.jpg?sz=50',
        mainImageUrl : 'https://tercertestamentonet.files.wordpress.com/2015/03/audios.jpg',
        mainImageText : 'bird',
        contentThumbupNo :101,
        contentAlarmNo :201,
        contentCommentCnt : 10,
        userNo:1,
        userId:'jangjaejoon',
        userNm:'장재훈',
    },

};


export default (ContentMain);