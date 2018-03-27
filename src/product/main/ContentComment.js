import React from 'react';
import {Avatar, Grid, IconButton, Typography, withStyles} from "material-ui";
import PropTypes from 'prop-types';
import dateformat from 'dateformat';
import classNames from 'classnames';
import {MoreVert} from "material-ui-icons";

const styles = theme => ({
    avatar: {
        backgroundColor: 'red[500]',
    },
    smallAvatar: {
        width: 20,
        height: 20,
    },

});


class ContentComment extends React.Component {

    render() {

        const { contentCommentNo,
                eventContentNo,
                userHash,
                commentDesc,
                commentPw,
                avatarUrl,
                userNm,
                createDt,
                updateDt

            } = this.props.comment;
        const { classes } = this.props;

        const subComment = false;

        const avatarText = avatarUrl ? '' : userNm;


        return (<div>
            <Grid container>
                <Grid item xs={1} align={'left'}>
                    <Avatar aria-label="Recipe" className={classNames(classes.avatar, classes.smallAvatar)} src={avatarUrl} >{avatarText}</Avatar>
                </Grid>
                <Grid item xs={9} align={'left'}>
                    {dateformat(createDt,'yyyy-mm-dd')}
                </Grid>

                <Grid item xs={2} align={'right'}>
                    <IconButton onClick={this.OnClickIconBtn}>
                        <MoreVert />
                    </IconButton>
                </Grid>

                    { !subComment ?
                        (<div><Grid item xs={12}>
                            <Typography gutterBottom align={'left'}>
                                본문시작sadjsjajdksajdks 본문종료본문시작sadjsjajd
                            </Typography>
                        </Grid></div>)
                        :

                        (
                        <Grid container>

                            <Grid item xs={1}>*</Grid>
                            <Grid item xs={11}>
                            <Typography gutterBottom align={'left'}>
                                대댓글본문시작sadjsjajdksajdks 본문종료본문시작sadjs
                            </Typography></Grid>
                        </Grid>)
                    }

                </Grid>


        </div>);
    }
}


ContentComment.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ContentComment);