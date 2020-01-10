import React, { useState, useEffect } from 'react';
import spotifyWithAuth from './auth/spotifyWithAuth';
import axios from 'axios';

const SingleSong = (props) => {

    const songId = props.match.params.songID

    const [song, setSong] = useState([]);
    const [features, setFeatures] = useState([]);
    const [graphImage, setGraphImage] = useState();

    const [sendObject, setSendObject] = useState({
        artist_name: "", 
        track_name: "", 
        track_id: props.match.params.songID,
        acousticness: '', 
        danceability: '', 
        duration_ms: '', 
        energy: '', 
        instrumentalness: '', 
        key: '', 
        liveness: '', 
        loudness: '', 
        mode: '', 
        speechiness: '', 
        tempo: '', 
        time_signature: '', 
        valence: '', 
        popularity: ''
    });

    useEffect(() => {
        spotifyWithAuth()
        .get(`/tracks/${songId}`)
        .then(response => {
            // console.log(response.data)
            setSong(response.data);
        })
    },[])

    useEffect(() => {
        spotifyWithAuth().get(`/audio-features/${songId}`)
        .then(response => {
            setFeatures(response.data);
        })
    },[])

    useEffect(() => {
        if (song && features && song.artists) {
            const [artist] = song.artists

            setSendObject({
                ...sendObject,
                artist_name: artist.name,
                track_name: song.name,
                popularity: song.popularity,
                acousticness: features.acousticness,
                danceability: features.danceability,
                duration_ms: features.duration_ms,
                energy: features.energy,
                instrumentalness: features.instrumentalness,
                key: features.key,
                liveness: features.liveness,
                loudness: features.loudness,
                mode: features.mode,
                speechiness: features.speechiness,
                tempo: features.tempo,
                time_signature: features.time_signature,
                valence: features.valence})
        }
    }, [song, features])

    const flaskSend = () => {
        axios.post('https://spotify-flask-model.herokuapp.com/pred', sendObject)
        .then(response => {
            const string = response.data[10]
            const byteCharacters = atob(string.slice(2, string.length - 1))
            const byteNumbers = new Array(byteCharacters.length)
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers)
            const blob = new Blob([byteArray], { type: "image/png" })
            const reader = new FileReader() 
            reader.onload = () => setGraphImage(reader.result);
            reader.readAsDataURL(blob)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        {console.log(song)}
        {console.log(features)}
        {song.artists && features
        ? <div>
            <img src={song.album.images[1].url} alt='album image' />
            <h2>{song.album.artists[0].name}</h2>
            {graphImage && <img src={graphImage} alt='ds graph image'/>}
            <button type='submit' onClick={flaskSend}>Get Recommendations</button>
        </div>
        : <p>No Data Yet!</p>}
        </>
    )
}

export default SingleSong;