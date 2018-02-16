import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RequireAuth from './auth/requireAuth';
import NavBar from './navBar/container';
import RegistrationForm from './auth/registration/registrationForm';
import LoginForm from './auth/login/loginForm';
import MainPage from './mainPage/container';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={RequireAuth(MainPage)} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegistrationForm} />
      </Switch>
    </div>
  );
};

export default App;
