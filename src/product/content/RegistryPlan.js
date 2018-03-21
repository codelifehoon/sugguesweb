import React from 'react';
import Grid from "material-ui/Grid/Grid";
import withStyles from "material-ui/styles/withStyles";
import {Button, Chip, Radio, TextField, Typography} from "material-ui";
import dateformat from 'dateformat';
import {withRouter} from "react-router-dom";
import * as util  from '../util/CommonUtils';
import * as GoogleAPI  from '../util/GoogleAPI';
import {EditForMarkdown} from "../CommonComponet/EditForMarkdown";

import {EditorState} from "draft-js";
import axios from "axios/index";
import * as Codes from "../util/Codes";




const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    textStartEndTimeField: {
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});


class RegistryPlan extends React.Component {

    state = {
        planName:'',
        planLocation:'',
        planLatLng:'',
        planStartDt:dateformat(new Date(),'yyyy-mm-dd')+'T10:00',
        planEndDt:dateformat(new Date(),'yyyy-mm-dd')+'T18:00',
        contentRaw :null,
        repeatKind : 'NONE',
        searchTagValue : '',
        chipData: [],
        storageFlag:false,
        submitFlah:false,
    };

    componentDidMount(){

        const cachedHits = sessionStorage.getItem('registryPlan');
        if (cachedHits) {
            this.setState(JSON.parse(cachedHits));
            // session Storage 갱신flag변경
        }
        this.setState({storageFlag:true,submitFlah:false});


        this.initFormattedAddress();

    }

    initFormattedAddress = () =>{

        const latLng = util.getUrlParam(this.props,'latLng');
        if (latLng !== '') {

            this.setState({planLatLng : latLng });

            GoogleAPI.getFormattedAddressFromLocation(latLng)
                .then(formattedAddress => {
                    let a = formattedAddress;
                    this.setState({planLocation:formattedAddress});
                })
                .catch(e => {});
        }
    }


    handleDefaultChange  = (event) =>{


        if (event.target.id === 'planName'){
            this.setState({planName: event.target.value});
        } else if (event.target.id === 'planLocation'){
            this.setState({planLocation: event.target.value});
        }
        else if (event.target.id === 'datetimeLocalS'){
            this.setState({planStartDt: event.target.value});
        }
        else if (event.target.id === 'datetimeLocalE'){
            this.setState({planEndDt: event.target.value});
        }

    };


// 암묵적 function 이어서 life 현 this을 scop으로 자동 적용 된듯
// 명시적으로 funciton 생성하면 bind 해야 할것 같은데.
    handleDelete = data => () => {
        if (data.label === 'React') {
            alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
            return;
        }

        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({ chipData });
    };

    searchTagKeyDown = (event) => {
        console.debug(event.key);
        if(event.key === ' '){
            let tagValue = event.target.value;
            let chipData = this.state.chipData;
            let  arrayLength = chipData.length;
            let addChipData = new Object();

            if (chipData.find((e) => { if (e['key'] === tagValue) return true;})) {
                event.target.value ='';
                return;
            }

            addChipData['key'] = tagValue;

            chipData.splice(arrayLength,0,addChipData);

            this.setState({searchTagValue : ''});
            this.setState({chipData});
        }
    };
    searchTagChange = (event) =>{
        this.setState({searchTagValue : event.target.value});
    };

    handleSubmit = (event) => {


        if (event.target.id === 'formSubmitBtn')
        {
        }

        event.preventDefault();
    };

    onLinkClick = () => {

        sessionStorage.setItem('registryPlan', JSON.stringify(this.state));
        this.props.history.push('/Map');

    };

    onRepeatKindClick = (e) => {
        this.setState({repeatKind : e.target.value});
    };

    onEditorStateChange = (contentRaw) =>{

        this.setState({contentRaw:contentRaw});
    };

    onSubmitClick = () =>
    {
        if (this.state.submitFlah) { alert('등록중입니다.'); return;}



/*
        planName:'',
            planLocation:'',
        planLatLng:'',
        planStartDt:dateformat(new Date(),'yyyy-mm-dd')+'T10:00',
        planEndDt:dateformat(new Date(),'yyyy-mm-dd')+'T18:00',
        contentRaw :null,
        repeatKind : '',
        chipData: [],
        storageFlag:false,
        submitFlah:false,
        */
        const  jsonValue = {
            eventDesc: this.state.contentRaw,
            eventEnd: new Date(this.state.planEndDt),
            eventLocations: [
                {
                    address: this.state.planLocation,
                    addressDtls: '',
                    latitude: this.state.planLatLng.lat,
                    longitude: this.state.planLatLng.lng,
                    useYn: 'Y',
                }
            ],
            eventStart: new Date(this.state.planStartDt),
            refPath: '',
            repeatKind: this.state.repeatKind,
            stat: 'S2',
            tags: this.state.searchTagValue,
            title: this.state.planName
        };



        axios.post('http://localhost:8080/Content/V1/AddContent'
                    ,jsonValue
                    ,{withCredentials: true, headers: {'Content-Type': 'application/json'}}
            )
            .then(res =>{
                console.error('>>> :');
                this.setState({submitFlah : false});

            }).catch(err => { console.error('>>>> :' + err);  this.setState({submitFlah : false});});


    }
    render() {


    const  {classes} = this.props;
    const  {storageFlag} = this.state;

        return (
            <div>


                <Grid container>
                    <Grid item xs={12}/><Grid item xs={12}/><Grid item xs={12}/><Grid item xs={12}/>
                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="planName"
                            label="(필수)입력 해주세요."
                            className={classes.textField}
                            helperText="입력 "
                            margin="normal"
                            value={this.state.planName}
                            onChange={this.handleDefaultChange}
                        />
                    </Grid>


                    <Grid item xs={1}/>
                    <Grid item xs={8}>
                        <TextField
                            id="planLocation"
                            label="위치를 선택 또는 입력 해주세요."
                            className={classes.textField}
                            helperText=""
                            margin="normal"
                            value={this.state.planLocation}
                            onChange={this.handleDefaultChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                            <Typography variant="button" gutterBottom onClick={this.onLinkClick}>
                                지도선택
                            </Typography>
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="datetimeLocalS"
                            label="시작"
                            type="datetime-local"
                            defaultValue={this.state.planStartDt}
                            value={this.state.planStartDt}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleDefaultChange}
                        />
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="datetimeLocalE"
                            label="끝"
                            type="datetime-local"
                            defaultValue={this.state.planEndDt}
                            value={this.state.planEndDt}
                            className={classes.textField}
                            InputLabelProps={{shrink: true,}}
                            onChange={this.handleDefaultChange}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <Typography  variant="body1" gutterBottom>
                        없음:<Radio
                            checked={this.state.repeatKind === 'NONE'}
                            onChange={this.onRepeatKindClick}
                            value='NONE'
                            name="radio-button-NONE"
                            label="Male"

                        />

                        매일:<Radio
                                checked={this.state.repeatKind === 'W1'}
                                onChange={this.onRepeatKindClick}
                                value='W1'
                                name="radio-button-W1"

                            />

                        매월:<Radio
                                checked={this.state.repeatKind === 'M1'}
                                onChange={this.onRepeatKindClick}
                                value='M1'
                                name="radio-button-M1"

                            />

                            매년:<Radio
                                checked={this.state.repeatKind === 'Y1'}
                                onChange={this.onRepeatKindClick}
                                value='Y1'
                                name="radio-button-Y1"
                            />
                        </Typography>
                    </Grid>


                    <Grid item xs={12} >
                        {
                            storageFlag  ? <EditForMarkdown onEditorStateChange={this.onEditorStateChange} initRowText={this.state.contentRaw}/> : ''

                        }

                    </Grid>



                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="with-searchTagInput"
                            label="검색용 테스 입력 해주세요(#검색어)"
                            placeholder="여러건 추가 가능 합니다.(최대10건)"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.searchTagValue}
                            // onKeyPress={this.searchTagKeyDown}
                            onChange={this.searchTagChange}
                        />
                    </Grid>
{/*

                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item  xs={11} >
                            {this.state.chipData.map(data => {
                                return (
                                    <Chip id={'searchTagArray'}
                                        key={data.key}
                                        label={data.key}
                                        onDelete={this.handleDelete(data)}
                                        className={classes.chip}
                                    />
                                );
                            })}
                        </Grid>
                    </Grid>
*/}


                    <Grid container>
                        <Grid item xs={12}>
                            <Button className={classes.button} variant='raised' color="primary" onClick={this.onSubmitClick}>
                                등록하기
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
}
}

RegistryPlan.propTypes = {};
export default withStyles(styles)(withRouter(RegistryPlan) );