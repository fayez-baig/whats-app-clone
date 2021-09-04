import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';

const App = () => {
  return (
    <div className='whats-app-main'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
