import React, { useState, useEffect } from 'react';
import SpotifyAuth from './auth/SpotifyAuth';
import spotifyWithAuth from './auth/spotifyWithAuth';

const ArtistSearch = () => {
    const [artist, setArtist] = useState('');
    const [songs, setSongs] = useState([]);
    const [userArtists, setUserArtists] = useState();

    const handleChanges = e => {
        setArtist(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        spotifyWithAuth()
        .get(`/search?q=${artist}&type=artist,track&limit=5`)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err.response))
        // spotifyWebApi.searchArtists(artist, {limit: 5, offset: 20})
        // .then(response => {
        //     console.log(response);
        // })
    }

    return (
        <>
        <SpotifyAuth />
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Type in artist name to get their top tracks</label>
                <br />
                <input value={artist} onChange={handleChanges} type='text' name='search' />
                <button type='submit'>Search</button>
            </form>
        </div>
        </>
    )
}

export default ArtistSearch;