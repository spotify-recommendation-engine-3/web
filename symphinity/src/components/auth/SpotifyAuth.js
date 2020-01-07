import React, { useState, useEffect } from 'react';

const SpotifyAuth = () => {

    

    return (
        <div>
            {/* {console.log(spotifyAuth)} */}
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

export default SpotifyAuth;