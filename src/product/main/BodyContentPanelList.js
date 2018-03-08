import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Paper} from "material-ui";


const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});


class BodyContentPanelList extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
            { this.props.planList.map( d  => { return (
                <Paper className={classes.root} elevation={4} key={d.planId}>
                <Typography type="headline" component="h4">
                    {d.planStartDt}~{d.planEndDt} {d.planTitle}
                </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>)
            })}
            </div>

        );
    }
}



BodyContentPanelList.propTypes = {
    classes: PropTypes.object.isRequired,
    planList: PropTypes.array.isRequired,
};


BodyContentPanelList.defaultProps = {
    planList: [{  planId : 'p1',
                    planStartTime : '08:01',
                    planEndTime : '18:01',
                    planTitle : 'Stellas congregabo in vasa!',
                    planDesc:'A falsis, resistentia ferox saga.',
                },
                {  planId : 'p2',
                    planStartTime : '08:02',
                    planEndTime : '18:02',
                    planTitle : 'Ubi est superbus repressor!',
                    planDesc:'Velox humani generiss ducunt ad bromium.',
                },
                {  planId : 'p3',
                    planStartTime : '08:03',
                    planEndTime : '18:03',
                    planTitle : 'Ubi est albus fortis!',
                    planDesc:'Superbus mortem absolute resuscitabos tabes est.',
                },
                ]
};

// state = {
//     planName:'',
//     planLocation:'',
//     planStartDt:dateformat(new Date(),'yyyy-mm-dd')+'T10:00',
//     planEndDt:dateformat(new Date(),'yyyy-mm-dd')+'T18:00',
//     chipData: [
//         { key: 'Angular'},
//         { key: 'jQuery'},
//     ],
// };



export default withStyles(styles)(BodyContentPanelList);
