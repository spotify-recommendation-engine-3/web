import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './auth/axiosWithAuth';
import axios from 'axios';
import spotifyWithAuth from './auth/spotifyWithAuth';
import FavoriteCards from './FavoriteCards';

const UserProfile = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const { data } = await axiosWithAuth().get(`/api/faves/${localStorage.getItem('user_id')}`)
            const mappedPromises = await data.map(async (current) => {
                const { data: spotifyData } = await spotifyWithAuth().get(`/tracks/${current.track_id}`);
                return {spotifyData}
            })
            const finalData = await Promise.all(mappedPromises);
            const spotifySongs = finalData.map(element => element.spotifyData);
            const uniqueFaves = new Set(spotifySongs);
            const newArray = Array.from(uniqueFaves);
            setFavorites(newArray);
        }
        dataFetch()
    }, []);

    return (
        <div className='cards'>
            {favorites.map(element => {
                return <FavoriteCards key={element.id} id={element.id} songName={element.name} album={element.album.name} artist={element.artists[0].name} duration={element.duration_ms} link={element.uri} image={element.album.images[1].url} />
            })}
        </div>
    )
}

export default UserProfile;