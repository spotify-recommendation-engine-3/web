import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import SongSearch from './components/SongSearch';
import './App.css'

function App() {
  return (
    <>
      {/* <Route exact to="/login" component={Login} /> */}
      <PrivateRoute exact to="/song-search" component={SongSearch} />
    </>
  );
}

export default App;
