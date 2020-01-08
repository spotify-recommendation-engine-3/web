import React, { useState, useEffect } from 'react';

const SpotifyAuth = () => {

    

    return (
        <div>
            {/* {console.log(spotifyAuth)} */}
            {localStorage.getItem('spotifyAuthToken') ? <p>Spotify Account Linked!</p> 
            :
            <> 
            <a href='http://localhost:8888/login'>
                <button>Login with Spotify</button>
            </a>
            <p>Please Link Your Spotify Account</p>
            </>}
        </div>
    )
}

export default SpotifyAuth;