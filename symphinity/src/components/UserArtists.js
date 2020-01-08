import React, { useState, useEffect } from 'react';
import spotifyWithAuth from './auth/spotifyWithAuth';
import SpotifyAuth from './auth/SpotifyAuth';
import SongCards from './SongCards';
import axiosWithAuth from './auth/axiosWithAuth';

const UserArtists = () => {
    const [songs, setSongs] = useState([]);
    const [userInfo, setUserInfo] = useState();
    const [spotifyAuth, setSpotifyAuth] = useState();

    // const handleLike = async e => {
    //     e.preventDefault();
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     if (!user) return;
    //     const { data } = await axiosWithAuth().post(`/likes/${match.params.id}`, {
    //       userId: user.id,
    //     });
    //     setItemData({
    //       ...itemData,
    //       likes: data,
    //     });
    //     setLiked(true);
    //   };
    
    //   const handleUnlike = async e => {
    //     e.preventDefault();
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     if (!user) return;
    //     console.log(match.params.id, user.id);
    //     const { data } = await axiosWithAuth().delete(
    //       `/likes/${match.params.id}/${user.id}`
    //     );
    //     setItemData({
    //       ...itemData,
    //       likes: data.remaining,
    //     });
    //     setLiked(false);
    //   };

    // useEffect(() => {
    //     axiosWithAuth()

    // })
    
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
                    return <SongCards key={element.id} id={element.id} songName={element.name} songURL={element.uri} artistName={element.album.artists[0].name} artistURL={element.album.artists[0].uri} albumName={element.album.name} image={element.album.images[0].url} like={handleLike} unlike={handleUnlike} />
                })}
            </div>
        </div>
    )
}

export default UserArtists;