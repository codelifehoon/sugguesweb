import React from 'react';
import {geolocated} from 'react-geolocated';
import MapWithASearchBox from "./MapWithASearchBox";
import {CircularProgress, Grid} from "material-ui";

class GoogleMap extends React.Component {render() {
    return !this.props.isGeolocationAvailable
        ? <MapWithASearchBox/>
        : !this.props.isGeolocationEnabled
            ? <MapWithASearchBox/>
            : this.props.coords
                ? <MapWithASearchBox lat={this.props.coords.latitude}  lng={this.props.coords.longitude}/>
                :   <Grid container alignItems='center' style={{height:'300px'}}>
                    <Grid item xs={12} >
                        <CircularProgress   size={100} />
                    </Grid>
                </Grid>
}}

GoogleMap.propTypes = {};

export default geolocated({
    positionOptions: { enableHighAccuracy: false,},
    userDecisionTimeout: 2000,
}) (GoogleMap);