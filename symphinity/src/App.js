import React, { createContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/auth/PrivateRoute';
import Login from './components/login/Login';
import Register from './components/registration/Register';
import ArtistSearch from './components/ArtistSearch';
import './App.css'
import UserArtists from './components/UserArtists';



function App() {

  // useEffect(() => {
  //   if (localStorage.getItem('spotifyAuthToken')) {
  //     const authObject = { 
  //       grant_type: "authorization_code",
  //       code: localStorage.getItem('spotifyAuthToken'),
  //       redirect_uri: 'http://localhost:3000/callback'
  //     }

  //     const headerObject = {
  //       headers: {
  //         Autorization: Basic 
  //       }
  //     }
  //     axios
  //     .post('https://accounts.spotify.com/api/token', authObject, )
  //     .then(response => {
        
  //     })
  //   }
  // }, [])

  return (
    <>
    <Switch>
      <Route exact path="/">
        <UserArtists />
      </Route>
      <Route exact path="/login">
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
