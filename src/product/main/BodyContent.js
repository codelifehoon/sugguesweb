import React from 'react';
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import withStyles from "material-ui/es/styles/withStyles";
import PropType from 'prop-types';


const styles = theme => ({
    alignCenter : {
        marginTop :'auto',
        marginBottom:'auto'
    },
});



class BodyContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        searchValue : '',
    };
    }



    render() {

    const  {classes} = this.props;
    console.log(classes);

    return (

        <Grid container>
            {/* title row*/}

            <Grid item xs={12} type={'title'}>입력어 : {this.props.searchValue}</Grid>

            {/*2 row*/}
            <Grid item xs={12}>
                <Typography type={'caption'} align={'left'} >

                    A boundless form of mind is the awareness.<br/>
                    All wonderful moons absorb each other, only magical seekers have a samadhi.

                </Typography>
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

export default withStyles(styles)(BodyContent );