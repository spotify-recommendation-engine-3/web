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
import Header from './components/Header';

function App() {

  return (
    <div className='main-container'>
      {/* <Header /> */}
        <Route exact path="/" component={UserArtists} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/:songID" component={SingleSong} />
    </div>
  );
}

export default App;
