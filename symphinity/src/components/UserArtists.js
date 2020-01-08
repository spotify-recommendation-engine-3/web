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

    const [spotifyAuth, setSpotifyAuth] = useState();
    
    useEffect(() => {
        if (window.location.search) {
            const splitURL = window.location.search.split('=');
            setSpotifyAuth(splitURL[1]);
        }
    }, [window.location.search])

    useEffect(() => {
        if (spotifyAuth) {
            localStorage.setItem('spotifyAuthToken', spotifyAuth);
            spotifyWithAuth()
            .get(`/me/top?tracks`)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err.response));
        }
      }, [spotifyAuth])

    return (
        <div>
            <SpotifyAuth />
            {console.log(spotifyAuth)}
        </div>
    )
}

export default UserArtists;