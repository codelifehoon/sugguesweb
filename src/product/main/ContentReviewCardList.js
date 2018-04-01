import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Paper, Snackbar} from "material-ui";
import ContentReviewCard from "./ContentReviewCard";


const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});


class ContentReviewCardList extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            { this.props.contentList.map( d  => { return (
                <ContentReviewCard key={d.eventContentNo} content={d} ></ContentReviewCard>
            )
            })}

            </div>

        );
    }
}

ContentReviewCardList.propTypes = {
    classes: PropTypes.object.isRequired,
};


ContentReviewCardList.defaultProps = {
    contentList: [{
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
                ]
};

// state = {
//     title:'',
//     eventAddress:'',
//     eventStart:dateformat(new Date(),'yyyy-mm-dd')+'T10:00',
//     eventEnd:dateformat(new Date(),'yyyy-mm-dd')+'T18:00',
//     chipData: [
//         { key: 'Angular'},
//         { key: 'jQuery'},
//     ],
// };



export default withStyles(styles)(ContentReviewCardList);
