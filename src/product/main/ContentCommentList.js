import React from 'react';
import ContentComment from "./ContentComment";


class ContentCommentList extends React.Component {

    render() {
        return (<div>
            { this.props.commentList.map( d  => { return (
                <ContentComment comment={d} ></ContentComment>
            )
            })}
        </div>);
    }
}

ContentCommentList.propTypes = {};


ContentCommentList.defaultProps = {
    commentList : [
        {contentCommentNo : 1,
            eventContentNo : 1,
            userHash :'culina ',
            commentDesc : 'The enlightened emptiness of manifestation is to experience with history. ',
            commentPw :'',
            avatarUrl : 'https://lh5.googleusercontent.com/-l6AxNJNHOy4/AAAAAAAAAAI/AAAAAAAAIWg/WsSH3Ut8Mgg/photo.jpg?sz=50',
            userNm :'JJH1',
            createDt: new Date(),
            updateDt:new Date()
        },
        {contentCommentNo : 2,
            eventContentNo : 2,
            userHash :'heuretes ',
            commentDesc : 'The core of your milks will disturb cosmically when you hear that purpose is the yogi.',
            commentPw :'',
            avatarUrl : '',
            userNm :'JJH2',
            createDt: new Date(),
            updateDt:new Date()
        },
        {contentCommentNo : 3,
            eventContentNo : 3,
            userHash :'',
            commentDesc : 'When the moon of suffering grasps the fears of the cow, the attraction will know doer.',
            commentPw :'1234',
            avatarUrl : '',
            userNm :'JJH3',
            createDt: new Date(),
            updateDt:new Date()},
        {contentCommentNo : 4,
            eventContentNo : 4,
            userHash :'Ignigena peregrinationes, tanquam fortis guttus.',
            commentDesc : 'One unconditional peace i give you: reject each other.',
            commentPw :'',
            avatarUrl : '',
            userNm :'JJH4',
            createDt: new Date(),
            updateDt:new Date()},


        ]
}



export default (ContentCommentList);


