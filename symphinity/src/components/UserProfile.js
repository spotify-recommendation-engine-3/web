import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './auth/axiosWithAuth';
import spotifyWithAuth from './auth/spotifyWithAuth';
import FavoriteCards from './FavoriteCards';

const UserProfile = () => {

    const [favorites, setFavorites] = useState([]);
    const [unique, setUnique] = useState([]);

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

    useEffect(() => {
        const ids = [];
        favorites.map(e => {
            return ids.push(e.id)
        });
        const uniqueIDs = new Set(ids);
        const endArray = Array.from(uniqueIDs);
        console.log(endArray);
        endArray.map(async element => {
            const response = await spotifyWithAuth()
                .get(`/tracks/${element}`);
            // setSuggestions((prev) => [...prev, element]);
            setUnique((u) => [...u, response.data]);
        })
    }, [favorites])

    return (
        <>
            <h2 style={{margin: '5%'}}>Choose a song to get some song recommendations based on that song.</h2>
            <div className='cards'>
                {unique.map(element => {
                    return <FavoriteCards key={element.id} id={element.id} songName={element.name} album={element.album.name} artist={element.artists[0].name} duration={element.duration_ms} link={element.uri} image={element.album.images[1].url} />
                })}
            </div>
        </>
    )
}

export default UserProfile;