import React, { createContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './components/login/Login';
import Register from './components/registration/Register';
import ArtistSearch from './components/ArtistSearch';
import './App.css'
import UserArtists from './components/UserArtists';
import UserProfile from "./components/UserProfile";
import SingleSong from './components/SingleSong';

function App() {

  return (
    <>
      <Switch>
        <PrivateRoute exact path="/">
          <UserArtists />
        </PrivateRoute>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register /> 
        </Route>
        <PrivateRoute exact path="/userprofile" component={UserProfile} />
        <PrivateRoute exact path="/:songID" component={SingleSong} />
      </Switch>
    </>
  );
}

export default App;
