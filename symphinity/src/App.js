import React, { createContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/auth/PrivateRoute';
import ArtistSearch from './components/ArtistSearch';
import './App.css'

function App() {

  useEffect(() => {
    if (localStorage.getItem('spotifyAuthToken')) {
      const authObject = {
        grant_type: "authorization_code",
        code: localStorage.getItem('spotifyAuthToken'),
        redirect_uri: 'http://localhost:3000/callback'
      }

      const headerObject = {
        headers: {
          Autorization: Basic 
        }
      }
      axios
      .post('https://accounts.spotify.com/api/token', authObject, )
      .then(response => {
        
      })
    }
  }, [])

  return (
    <>
      {/* <Route exact to="/login" component={Login} /> */}
      <Route exact to="/song-search" component={ArtistSearch} />
    </>
  );
}

export default App;
