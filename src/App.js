import React, { Component } from 'react';
/* Used this library for navigation */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

import SearchPage from './components/Search';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppBar color="primary" position="sticky">
          <div className="navbar">
            <h1 id="title">GitHub User Search</h1>
          </div>
        </AppBar>
        <div>
          <Switch>
            <Route path="/user" component={Profile} />
            <Route path="/" component={SearchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
