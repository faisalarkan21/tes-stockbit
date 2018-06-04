import React from 'react';
import PropTypes, { func } from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import App from './app';
import { NotFound } from '../components/lib';


const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />     
        <Route path="/countryof/:capitalcity" component={App} />      
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);


export default Root;

