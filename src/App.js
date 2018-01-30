import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeView from './product/HomeView'
import Typography from 'material-ui/Typography';









class App extends Component {
  render() {

      let  componentVal = new Object();;
      componentVal.root = 'rootName';
      componentVal.paper = 'rootDemoName';
      componentVal.control = 'rootcontrolName';



    return (
        <div className="App">
            <HomeView contentSelecterKey={'main'}/>
            <Typography>Chaos happens when you follow emptiness so purely that whatsoever you are existing is your issue.</Typography>
        </div>
    );


  }
}

export default App;
