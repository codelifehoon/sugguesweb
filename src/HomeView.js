"use strict";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from './product/tileData';
import TemplateSelector from "./product/TemplateSelector";
import {Button, Grid} from "material-ui";
import LogInOutButton from "./product/CommonComponet/LogInOutButton";
import TemplateManager from "./product/CommonComponet/TemplateManager";
import DialogForNoti from "./product/CommonComponet/DialogForNoti";
import queryString from "query-string";


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
});

class HomeView extends React.Component {

    state = {
        open: false,
        anchor: 'left',
        barTitle:'',
        dialogForNoti : null
    };


    componentDidMount(){

        console.log(this.props);
        if (typeof(this.props.location) !== 'undefined' &&  queryString.parse(this.props.location.search).loginSuccess === 'fail')  {

            this.setState({dialogForNoti :  this.createDialogForNoti('Login Error',queryString.parse(this.props.location.search).message)});
        }

    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };


    createDialogForNoti = (  dialogTitle,dialogMessage)=>{
        return (<DialogForNoti  dialogTitle={dialogTitle} dialogMessage={dialogMessage} />);
    }

    render() {

        const { classes, theme , templateSelectorKey} = this.props;
        const { anchor, open} = this.state;
        const barTitle = TemplateManager.getComponentTitle(templateSelectorKey);

        const drawer = (
            <Drawer
                variant="persistent"
                anchor={anchor}
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </Drawer>
        );

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                            [classes[`appBarShift-${anchor}`]]: open,
                        })}
                    >
                        <Grid container>
                            <Grid item xs={8}>
                        <Toolbar disableGutters={!open} >

                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerOpen}
                                    className={classNames(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Typography variant="title" color="inherit" noWrap>
                                    {barTitle}
                                </Typography>


                        </Toolbar>
                            </Grid>
                            <Grid item xs={4} >
                                <LogInOutButton align="center" ></LogInOutButton>
                            </Grid>
                        </Grid>
                    </AppBar>
                    {before}
                    <main
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}
                    >
                        <TemplateSelector templateSelectorKey={templateSelectorKey}/>
                    </main>

                    {after}

                </div>

               {/*메세지*/}
                {this.state.dialogForNoti}
            </div>

        );
    }
}

HomeView.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    templateSelectorKey: PropTypes.string.isRequired,
};


HomeView.defaultProps = {
    templateSelectorKey: 'main',

};

export default withStyles(styles, { withTheme: true })(HomeView);