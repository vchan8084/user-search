import React, { Component } from 'react';
/* Used this library for navigation */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/Search';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="navbar" className="navbar">
          <h1 id="title">GitHub User Search</h1>
        </div>
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
