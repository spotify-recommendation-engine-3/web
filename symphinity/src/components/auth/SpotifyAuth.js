import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import {Button} from 'reactstrap';
import '../../App.css';


// const Button = styled.button`
//     border: none;
//     text-decoration: none;
// `

const SpotifyAuth = () => {
    return (
        <div>
            {/* {console.log(spotifyAuth)} */}
            {localStorage.getItem('spotifyAuthToken') ? <p>Spotify Account Linked!</p> 
            :
            <> 
            <span style={{marginRight:"2%"}}>or</span>
            <a href='https://oauth-spotify-backend.herokuapp.com/login'>
                <Button className="spotify-login" color="success">Login with Spotify</Button>
            </a>
            {/* <p>Please Link Your Spotify Account</p> */}
            </>}
        </div>
    )
}

export default SpotifyAuth;