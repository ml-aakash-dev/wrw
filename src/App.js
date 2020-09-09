import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Main from './components/main'
import AboutUs from './components/aboutUs/aboutUs'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about-us" component={AboutUs}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
