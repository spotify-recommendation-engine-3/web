import React, { useState, useEffect } from 'react';
import spotifyWithAuth from './auth/spotifyWithAuth';
import SpotifyAuth from './auth/SpotifyAuth';
import SongCards from './SongCards';
import axiosWithAuth from './auth/axiosWithAuth';

const UserArtists = () => {
    const [songs, setSongs] = useState([]);
    const [userInfo, setUserInfo] = useState();
    const [spotifyAuth, setSpotifyAuth] = useState();
    
    useEffect(() => {
        if (window.location.search) {
            const splitURL = window.location.search.split('=');
            setSpotifyAuth(splitURL[1]);
        }
    }, [])

    useEffect(() => {
        if (spotifyAuth) {
            localStorage.setItem('spotifyAuthToken', spotifyAuth);
            spotifyWithAuth()
            .get(`/me/top/tracks`)
            .then(response => {
                setSongs(response.data.items)
            })
            .catch(err => console.log(err.response));
        }
      }, [spotifyAuth])

    return (
        <div>
            <SpotifyAuth />
            <div className='cards'>
                {songs.map(element => {
                    return <SongCards key={element.id} id={element.id} songName={element.name} songURL={element.uri} artistName={element.album.artists[0].name} artistURL={element.album.artists[0].uri} albumName={element.album.name} image={element.album.images[0].url} />
                })}
            </div>
        </div>
    )
}

export default UserArtists;