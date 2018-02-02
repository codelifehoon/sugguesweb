import React from 'react';
import IconButton from "material-ui/es/IconButton/IconButton";
import SearchIcon from 'material-ui-icons/Search';
import SearchInputBox from "./SearchInputBox";
import withStyles from "material-ui/es/styles/withStyles";
import Grid from "material-ui/es/Grid/Grid";
import Typography from "material-ui/es/Typography/Typography";
import PropTypes from 'prop-types';

const styles = theme =>({
/*

    root : {
            flexGrow:1,


    },
    row : {
            height:40,
            whiteSpace:'noWrap',
            padding:'0px',
            border: '1px solid silver',

    },
    col : {
        whiteSpace:'noWrap',
        padding:'0px',
        border: '1px solid silver',

    }
*/

});


class SearchBar extends React.Component{


    state ={
        searchValue : '',
    };


    searchTextChange = (  newValue  ) => {
        this.setState({ searchValue : newValue});
        console.log(newValue);
        this.props.notiSearchTextChange(newValue);
    };


    doSearchButton = () =>
    {
        this.props.notiSearchTextChange(this.state.searchValue);
        console.log('###doSearch###');
    }

    render(){

        const {classes} = this.props;

        return (
            <div>
                <Grid classes={classes.root}>
                    <Grid container classes={classes.row}>
                        <Grid item xs={1} classes={classes.col}></Grid>
                        <Grid item xs={9} classes={classes.col}  >
                            <SearchInputBox onChange={this.searchTextChange} />

                            </Grid>
                        <Grid item xs={2}  classes={classes.col}>
                            <Typography noWrap align={'left'}>
                                <IconButton onClick={this.doSearchButton}><SearchIcon/></IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


SearchBar.propTypes = {
    notiSearchTextChange : PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
    notiSearchTextChange : ()=> {},
}



export  default withStyles(styles)(SearchBar);