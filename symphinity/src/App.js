// Import dependencies and general
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'

// Import components
import Login from './components/login/Login';
import Register from './components/registration/Register';
import PrivateRoute from './components/auth/PrivateRoute';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      {/* <Route exact to="/login" component={Login} /> */}
      {/* <PrivateRoute exact to="/song-search" component={SongSearch} /> */}
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
}

export default App;
