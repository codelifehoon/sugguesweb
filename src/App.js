import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from "./HomeView";
import './App.css';
import IconBtn from "./component_test/IconBtn";


 class App extends Component {
  render() {
      let  componentVal = new Object();
      componentVal.root = 'rootName';
      return (
          <div className={'App'}>
              <Router>
                  <Switch>
                      <Route exact path="/" component={HomeView}/>
                      <Route path="/member"
                             render={ ()  => <HomeView  templateSelectorKey={'memberLogin'} /> }
                        />
                      <Route path="/registryPlan"
                             render={ ()  => <HomeView  templateSelectorKey={'registryPlan'} /> }
                      />
                      <Route path="/IconBtn"
                             render={ ()  => <IconBtn/> }
                      />

                  <Route component={HomeView}/>
              </Switch>
          </Router>
        </div>
    );
  }
}

export default  App;


