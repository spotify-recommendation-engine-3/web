import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { axiosWithAuth } from './auth/axiosWithAuth';

const SongCards = (props) => {

    const handleFav = e => {
        e.preventDefault();
        const postSend = {
            track_id: e.currentTarget.id,
            track_title: e.currentTarget.name,
            user_id: localStorage.getItem('user_id')
        }
        axiosWithAuth()
        .post('/api/faves', postSend)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err.response));
        props.setFaved([...props.faved, e.currentTarget.id]);
    }

    const handleUnFav = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/faves/${localStorage.getItem('user_id')}/${e.target.id}`)
        .then(response => {
            console.log('Favorite removed')
            console.log(response);
        })
        .catch(err => console.log(err.response));
        props.setFaved(props.faved.filter(element => element !== e.currentTarget.id));
    }

    return (
        <div className='song-cards'>
            {console.log(props.faved)}
            <Card>
                <CardImg top width="300px" height="180px" src={props.image} alt="album image" />
                <CardBody>
                    <CardTitle><h3>{props.songName}</h3></CardTitle>
                    <CardSubtitle><p>{props.artistName}</p></CardSubtitle>
                    <a href={props.songURL}><Button>Listen on Spotify</Button></a>
                    {props.faved.find(fav => fav === props.id) 
                    ? <button type="submit" onClick={(e) => handleUnFav(e)} name={props.songName} id={props.id} className='fav-button favorited'><i className="far fa-heart" /></button>
                    : <button type="submit" onClick={(e) => handleFav(e)} name={props.songName} id={props.id} className='fav-button favorite'><i className="fas fa-heart" /></button>}
                </CardBody>
            </Card>
        </div>
    )
}

export default SongCards;