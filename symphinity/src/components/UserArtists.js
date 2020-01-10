import React, { useState, useEffect } from 'react';
import spotifyWithAuth from './auth/spotifyWithAuth';
import SpotifyAuth from './auth/SpotifyAuth';
import SongCards from './SongCards';
import {axiosWithAuth} from './auth/axiosWithAuth';

const UserArtists = () => {
    const [songs, setSongs] = useState([]);
    const [spotifyAuth, setSpotifyAuth] = useState();
    const [faved, setFaved] = useState([]);
    const [user, setUser] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/faves/${user}`)
        .then(response => {
            // console.log(response);
            setFaved(response.data);
        })
        .catch(err => console.log(err.response));
    }, [user])

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
        <div className='user-artists'>
            {songs.length > 0
            ?   <> <h2>Mark some of your songs as favorites below <span>then click <a href='/userprofile'>here</a></span></h2>
                <div className='cards'>
                    {songs.map(element => {
                        return <SongCards key={element.id} id={element.id} songName={element.name} songURL={element.uri} artistName={element.album.artists[0].name} artistURL={element.album.artists[0].uri} albumName={element.album.name} image={element.album.images[0].url} faved={faved} setFaved={setFaved} />
                })}
                </div></>
            : <h2>Please Register <a href='/register'>here</a>.</h2>}
        </div>
    )
}

export default UserArtists;