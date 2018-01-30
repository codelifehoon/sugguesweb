import React from 'react';
import IconButton from "material-ui/es/IconButton/IconButton";
import SearchIcon from 'material-ui-icons/Search';
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import withStyles from "material-ui/es/styles/withStyles";


const styles = theme => ({
    alignCenter : {
        marginTop :'auto',
        marginBottom:'auto'
    },
});



class BodyContent extends React.Component {


    render() {

    const  {classes} = this.props;
    console.log(classes);

    return (

        <Grid container>
            {/* title row*/}

            <Grid item xs={12} type={'title'}>검색 결과 x 건</Grid>

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

BodyContent.propTypes = {};

export default withStyles(styles)(BodyContent );