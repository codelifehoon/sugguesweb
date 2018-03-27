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
                <ContentReviewCard content={d} ></ContentReviewCard>
            )
            })}

            </div>

        );
    }
}



ContentReviewCardList.propTypes = {
    classes: PropTypes.object.isRequired,
    planList: PropTypes.array.isRequired,
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
                {   eventContentNo :2,
                    eventDesc: "Pickles can be marinateed with diced celery, also try mash uping the soup with iced tea.",
                    eventEnd: "2018-03-22T01:05:53.257Z",
                    eventLocations: [
                        {
                            address: "Tus de rusticus habena, gratia domina.",
                            addressDtls: "",
                            latitude: 37.497889,
                            longitude: 127.027616,
                        }
                    ],
                    eventStart: "2018-03-22T01:05:53.257Z",
                    refPath: "",
                    repeatKind: "W1",
                    tags: "#가나다 #나다라 #마바사",
                    title: "Aususs ire, tanquam gratis heuretes.",
                    avatarUrl : '',
                    mainImageUrl : '',
                    mainImageText : '',
                    contentThumbupNo :102,
                    contentAlarmNo :202,
                    contentCommentCnt : 5,
                    userNo:2,
                    userId:'jangjaejoon2',
                    userNm:'장재훈2',
                },
                {
                    eventContentNo :3,
                    eventDesc: "Truffels can be jumbled with aromatic lentils, also try garnishing the pilaf with lemon juice.",
                    eventEnd: "2018-03-22T01:05:53.257Z",
                    eventLocations: [
                        {
                            address: "Messis mechanice ducunt ad neuter fluctui.",
                            addressDtls: "",
                            latitude: 37.497889,
                            longitude: 127.027616,
                        }
                    ],
                    eventStart: "2018-03-22T01:05:53.257Z",
                    refPath: "",
                    repeatKind: "M1",
                    tags: "#가나다 #나다라 #마바사",
                    title: "Cedriums manducare, tanquam primus zelus.",
                    avatarUrl : '',
                    mainImageUrl : '',
                    mainImageText : '',
                    contentThumbupNo :103,
                    contentAlarmNo :203,
                    contentCommentCnt : 0,
                    userNo:3,
                    userId:'jangjaejoon3',
                    userNm:'장재훈3',
                },
                {
                    eventContentNo :4,
                    eventDesc: "Rice can be seasoned with tender ramen, also try rubbing the fritters with hollandaise sauce.",
                    eventEnd: "2018-03-22T01:05:53.257Z",
                    eventLocations: [
                        {
                            address: "Sunt magisteres desiderium raptus, rusticus hydraes.",
                            addressDtls: "",
                            latitude: 37.497889,
                            longitude: 127.027616,
                        }
                    ],
                    eventStart: "2018-03-22T01:05:53.257Z",
                    refPath: "",
                    repeatKind: "Y1",
                    tags: "#가나다 #나다라 #마바사",
                    title: "Inner joys knows most definitions.",
                    avatarUrl : '',
                    mainImageUrl : '',
                    mainImageText : '',
                    contentThumbupNo :104,
                    contentAlarmNo :204,
                    contentCommentCnt : 10,
                    userNo:4,
                    userId:'jangjaejoon4',
                    userNm:'장재훈4aaaaaaaaaaaaa',
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
