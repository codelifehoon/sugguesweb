import React from 'react';
import Grid from "material-ui/Grid/Grid";
import Typography from "material-ui/Typography/Typography";
import withStyles from "material-ui/styles/withStyles";
import {Button, Chip, Icon, TextField} from "material-ui";
import dateformat from 'dateformat';



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
        planStartDt:dateformat(new Date(),'yyyy-mm-dd')+'T10:00',
        planEndDt:dateformat(new Date(),'yyyy-mm-dd')+'T18:00',
        chipData: [
            { key: 'Angular'},
            { key: 'jQuery'},
        ],
    };

    handleDefaultChange  = (event) =>{

        console.log(event.target);
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
        if(event.key == 'Enter'){
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
    }

    handleSubmit = (event) => {


        if (event.target.id === 'formSubmitBtn')
        {
        console.log('###########handleSubmit');
        console.log(this.state);
        }

        event.preventDefault();
    }



    render() {


    const  {classes} = this.props;
        return (
            <div>
                <form id={'form'}   onSubmit={this.handleSubmit}>

                <Grid container>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="planName"
                            label="(필수)즐거운 계획을 입력 해주세요."
                            className={classes.textField}
                            helperText="계획의 명칭을 입력 해주세"
                            margin="normal"
                            value={this.state.planName}
                            onChange={this.handleDefaultChange}

                        />
                    </Grid>


                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="planLocation"
                            label="위치를 입력 해주세요."
                            className={classes.textField}
                            helperText="어디서 진행 하나요?"
                            margin="normal"
                            value={this.state.planLocation}
                            onChange={this.handleDefaultChange}
                        />
                    </Grid>

                    <Grid item xs={1}/>
                    <Grid item xs={11}>
                        <TextField
                            id="datetimeLocalS"
                            label="시작일"
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
                            label="종료일"
                            type="datetime-local"
                            defaultValue={this.state.planEndDt}
                            value={this.state.planEndDt}
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
                            id="with-searchTagInput"
                            label="검색에 사용할 단어를 입력 해주세요"
                            placeholder="필요시 더 입력 해주세요"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.searchTagValue}
                            onKeyPress={this.searchTagKeyDown}
                            onChange={this.searchTagChange}
                        />
                    </Grid>

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


                    <Grid container>
                        <Grid item xs={12}>
                            <Button id="formSubmitBtn" className={classes.button} raised color="primary" type={'submit'}>
                                등록하기
                            </Button>
                        </Grid>
                    </Grid>


                </Grid>
                </form>

            </div>
        );

    console.log(classes);

}
}

RegistryPlan.propTypes = {};
export default withStyles(styles)(RegistryPlan );