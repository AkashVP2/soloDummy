import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/DemoHome/Home';
import Signup from './components/Signup/Signup';
import SignIn from './components/Signin/Signin';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import PrivateRouts from '../navigation/privateRouts';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={DashBoard} />
    <Route exact={true} path="/signup" component={Signup} />
    <Route exact={true} path="/signin" component={SignIn} />
  
    <PrivateRouts>
      <Route exact={true} path="/home" component={Home} />
    </PrivateRouts>

    
  </Switch>
);

export default App;
