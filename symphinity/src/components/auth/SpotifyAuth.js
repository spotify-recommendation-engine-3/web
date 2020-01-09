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
            <a href='http://localhost:8888/login'> 
                <button>Login with Spotify</button>
            </a>
            <p>Please Link Your Spotify Account</p>
        </div>
    )
}

export default SpotifyAuth;