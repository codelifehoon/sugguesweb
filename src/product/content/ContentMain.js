import React from 'react';
import {propTypes,instanceOf} from 'prop-types';
import ContentReviewCard from "../main/ContentReviewCard";
import ContentCommentList from "../main/ContentCommentList";
import {Button, Collapse, Input, Paper, TextField} from "material-ui";
import htmlReactParser from "html-react-parser";
import Cookies from 'universal-cookie';
import axios from "axios/index";
import {getUrlParam, getWebCertInfoCookie} from "../util/CommonUtils";
import * as util from "../util/CommonUtils";
import {withRouter} from "react-router-dom";
// import * as util from "../util/CommonUtils";



class ContentMain extends React.Component {

    state = { expandAddComment : false
                ,addCommentValue : ''
                ,webCertInfo : null
                ,commentList : []
                ,content : null
                ,initContentStatus : false
                };


    // http://localhost:3000/ContentMain?eventContentNo=85
    //http://localhost:3000/RegistryPlan?latLng={%22lat%22:37.502247016086216,%22lng%22:127.02950427514645}

    componentDidMount(){
        const cookies = new Cookies();
        this.setState({webCertInfo : getWebCertInfoCookie()});

        const eventContentNo = getUrlParam(this.props,'eventContentNo');

        this.initContent(eventContentNo);
    }

    initContent = (eventContentNo) =>{

        if (!eventContentNo) return;

        let jsonObj = {};
        http://localhost:8080/Content/V1/findCommentList/91

        axios.get('http://localhost:8080/Content/V1/findContentForContentMain/' + eventContentNo
            ,{withCredentials: true, headers: {'Content-Type': 'application/json'}})
            .then(res =>{
                const d = res.data;
                let contentTemp = Object.assign({},res.data.eventContent,d.user);

                contentTemp.contentThumbupNo   =d.contentThumbUp.contentThumbupNo;
                contentTemp.contentAlarmNo     =d.contentAlarm.contentAlarmNo;
                contentTemp.contentCommentCnt  =d.commentCnt;
                contentTemp.mainImageUrl       ='https://tercertestamentonet.files.wordpress.com/2015/03/audios.jpg';
                contentTemp.mainImageText      = 'bird';

                this.setState({content:contentTemp});
                this.initCommentList(eventContentNo);
                console.log('###################');
                console.log(contentTemp);

            })
            .catch(err => { console.log('>>>> :' + err); });

    }

    initCommentList = (eventContentNo) =>{

            axios.get('http://localhost:8080/Content/V1/findCommentList/'+ eventContentNo)
            .then(res =>{

                const commentListTemp = res.data.map( d=>{
                    return {
                        contentCommentNo : d.contentComment.contentCommentNo,
                        eventContentNo : d.contentComment.eventContentNo,
                        userHash :d.user.userHash,
                        commentDesc : d.contentComment.commentDesc,
                        commentPw :'',
                        avatarUrl : d.user.avatarUrl,
                        userNm :d.user.userNm,
                        createDt: d.contentComment.createDt,
                        updateDt: d.contentComment.updateDt
                    };
                });

                console.log(commentListTemp);
                this.setState({commentList : commentListTemp, initContentStatus: true});


            })
            .catch(err => { console.log('>>>> :' + err); });

    }




    onNewCommentAdd = () =>{

        const {expandAddComment,addCommentValue,webCertInfo} = this.state;
        const eventContentNo = getUrlParam(this.props,'eventContentNo');

        //회원로그인 안하고 댓글작성 클릭 했을때
        if(!webCertInfo && !addCommentValue)
        {
            alert('로그인 후 댓글 작성 해주세요.');
            return;
        }
        // 댓글등록 상황일때 click 했다면.
        if ( expandAddComment){

            const jsonValue = { commentDesc: addCommentValue,
                                    commentPw: "",
                                    eventContentNo: eventContentNo,
                                    stat: "S2"
                              };

            axios.post('http://localhost:8080/Content/V1/addContentComment'
                , jsonValue
                , {withCredentials: true, headers: {'Content-Type': 'application/json'}}
            )
                .then(res => {
                    console.log(res.data);

                    axios.get('http://localhost:8080/Content/V1/findOneComment/' + res.data
                        ,{withCredentials: true, headers: {'Content-Type': 'application/json'}})
                        .then(res =>{

                            const cc = res.data.contentComment;
                            const user = res.data.user;

                            const comment = {contentCommentNo : cc.contentCommentNo,
                                eventContentNo : cc.eventContentNo,
                                userHash : user.userHash,
                                commentDesc : cc.commentDesc,
                                commentPw :'',
                                avatarUrl : user.avatarUrl,
                                userNm :user.userNm,
                                createDt: new Date(),
                                updateDt:new Date()
                            };

                            let copyList = this.state.commentList;
                            copyList.unshift(comment);

                            this.setState({commentList : copyList});

                        })
                        .catch(err => { console.log('>>>> :' + err); });
                })
                .catch(err => { console.error('>>>> :' + err); });
        }

        this.setState({ expandAddComment : !expandAddComment});
        this.setState({addCommentValue: ''});
    }

    addCommentChange = (e) => {

        this.setState({addCommentValue: e.target.value});

    }

    render() {
        const {content} = this.state;
        const {expandAddComment,addCommentValue,webCertInfo,commentList,initContentStatus} = this.state;

        return (<div>
                <br/><br/>

                {/*ContentReviewCard에 보여줄 정보를 전달 가능할때 화면에 읽어들임*/}

                {   initContentStatus ?
                    <ContentReviewCard content={content} from={'ContentMain'} expandedDesc={true} expandedShare={true}/>
                    : ''}
                <div>

                    <Collapse in={this.state.expandAddComment} timeout="auto" unmountOnExit>
                        <TextField
                            id="addCommentInput"
                            // label="Multiline"
                            multiline
                            rowsMax="5"
                            value={addCommentValue}
                            onChange={this.addCommentChange}
                            // className={classes.textField}
                            margin="normal"
                            style={{width:'100%'}}
                            autoFocus={true}
                        />
                    </Collapse>


                    <Button variant="raised" color="primary" style={{width:'100%'}} onClick={this.onNewCommentAdd}>
                        {  expandAddComment ?  '댓글등록': '댓글작성'}
                    </Button>
                </div>

                <br/>
                <Paper  elevation={1}>
                    { initContentStatus ? <ContentCommentList commentList={commentList}/> : ''}
                </Paper>

            </div>
        );



    }
}



// ContentMain.defaultProps = {
//     content: {
//         eventContentNo :1,
//         eventDesc: "# this **markd**own editer..&nbsp;",
//         eventEnd: "2018-03-22T01:05:53.257Z",
//         eventLocations: [
//             {
//                 address: "Castus bulla hic promissios messor est.",
//                 addressDtls: "",
//                 latitude: 37.497889,
//                 longitude: 127.027616,
//             }
//         ],
//         eventStart: "2018-03-22T01:05:53.257Z",
//         refPath: "",
//         repeatKind: "NONE",
//         tags: "#가나다 #나다라 #마바사",
//         title: "Assimilatios prarere, tanquam albus canis.",
//         avatarUrl : 'https://lh5.googleusercontent.com/-l6AxNJNHOy4/AAAAAAAAAAI/AAAAAAAAIWg/WsSH3Ut8Mgg/photo.jpg?sz=50',
//         mainImageUrl : 'https://tercertestamentonet.files.wordpress.com/2015/03/audios.jpg',
//         mainImageText : 'bird',
//         contentThumbupNo :101,
//         contentAlarmNo :201,
//         contentCommentCnt : 10,
//         userNo:1,
//         userId:'jangjaejoon',
//         userNm:'장재훈',
//     },
//
// };


ContentMain.propTypes = {};

export default withRouter(ContentMain);