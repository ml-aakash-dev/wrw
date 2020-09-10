import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Main from './components/main'
import AboutUs from './components/aboutUs/aboutUs'
import customerReviews from './components/customerReviews/customerReviews'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/customer-reviews" component={customerReviews}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
