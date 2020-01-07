import React, { useState, useEffect } from 'react';

const SpotifyAuth = () => {

    const getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }

      const [spotifyAuth, setSpotifyAuth] = useState(getHashParams());

      useEffect(() => {
          if (spotifyAuth && spotifyAuth.access_token) {
              localStorage.setItem('spotifyAuthToken', spotifyAuth.access_token);
          }
      }, [spotifyAuth])

    return (
        <div>
            {console.log(spotifyAuth)}
            {window.localStorage.getItem('spotifyAuthToken') ? <p>Spotify Account Linked!</p> 
            :
            <> 
            <a href='http://localhost:8888'>
                <button>Login with Spotify</button>
            </a>
            <p>Please Link Your Spotify Account</p>
            </>}
        </div>
    )
}

export default SpotifyAuth;