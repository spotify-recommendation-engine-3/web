import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import SongSearch from './components/SongSearch';
// import ArtistSearch from './components/ArtistSearch';
import LoginExample from './components/LoginExample';
import './App.css'

function App() {
  return (
    <>
      {/* <Route exact to="/login" component={Login} /> */}
      <Route exact to="/search" component={LoginExample} />
      <PrivateRoute exact to="/song-search" component={SongSearch} />
    </>
  );
}

export default App;
