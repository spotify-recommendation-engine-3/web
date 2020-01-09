import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './auth/axiosWithAuth';
import spotifyWithAuth from './auth/spotifyWithAuth';

const UserProfile = () => {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const { data } = await axiosWithAuth().get(`/api/faves/${localStorage.getItem('user_id')}`)
            await data.reduce(async)
        }
    }, []);

    return (
        <div className='song-cards'>
            {favorites.map(element => {

            })}
        </div>
    )
}

export default UserProfile;