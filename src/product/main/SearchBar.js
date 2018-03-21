import React from 'react';
import IconButton from "material-ui/IconButton/IconButton";
import SearchIcon from 'material-ui-icons/Search';
import SearchInputBox from "./SearchInputBox";
import withStyles from "material-ui/styles/withStyles";
import Grid from "material-ui/Grid/Grid";
import Typography from "material-ui/Typography/Typography";
import PropTypes from 'prop-types';
import axios from "axios/index";

const styles = theme =>({
});


class SearchBar extends React.Component{


    state ={
        searchValue : '',
        autoCompliteList :[]
    };

    componentDidMount(){


        let retUrl = 'http://localhost:8080/Content/V1/findAutoCompliteList/type1'

        //GET
        axios.get(retUrl)
            .then(res =>{ this.setState({autoCompliteList : res.data});})
            .catch(err => { console.log('>>>> :' + err); });


    };



    searchTextChange = (  newValue  ) => {
        this.setState({ searchValue : newValue});
        // console.log(newValue);
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
                            <SearchInputBox onChange={this.searchTextChange} autoCompliteList={this.state.autoCompliteList}/>

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