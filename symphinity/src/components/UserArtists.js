import React, { useState, useEffect } from 'react';
import spotifyWithAuth from './auth/spotifyWithAuth';
import SpotifyAuth from './auth/SpotifyAuth';

const UserArtists = () => {
    const [songs, setSongs] = useState([]);
    const [userArtists, setUserArtists] = useState();

    // const getHashParams = () => {
    //     var hashParams = {};
    //     var e, r = /([^&;=]+)=?([^&;]*)/g,
    //         q = window.location.hash.substring(1);
    //     while ( e = r.exec(q)) {
    //        hashParams[e[1]] = decodeURIComponent(e[2]);
    //     }
    //     return hashParams;
    //   }

    const [spotifyAuth, setSpotifyAuth] = useState(window.location.hash.substring(1));

      useEffect(() => {
          if (spotifyAuth) {
              localStorage.setItem('spotifyAuthToken', spotifyAuth);
          }
      }, [spotifyAuth])

    // useEffect(() => {
    //     spotifyWithAuth()
    //     .get(`/me/top/artists`)
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => console.log(err.response));
    // }, [spotifyAuth])

    return (
        <div>
            {/* <SpotifyAuth /> */}
            {console.log(spotifyAuth)}
            {window.localStorage.getItem('spotifyAuthToken') ? <p>Spotify Account Linked!</p> 
            :
            <> 
            <a href='https://oauth-spotify-backend.herokuapp.com/login'>
                <button>Login with Spotify</button>
            </a>
            <p>Please Link Your Spotify Account</p>
            </>}
        </div>
    )
}

export default UserArtists;