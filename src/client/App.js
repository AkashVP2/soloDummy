import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/DemoHome/Home';
import Signup from './components/Signup/Signup';
import SignIn from './components/Signin/Signin';
import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/signup" component={Signup} />
    <Route exact={true} path="/signin" component={SignIn} />
  </Switch>
);

export default App;
