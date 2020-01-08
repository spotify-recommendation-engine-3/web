import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const SongCards = (props) => {

    return (
        <div className='song-cards'>
            <Card>
                <CardImg top width="300px" height="150px" src={props.image} alt="album image" />
                <CardBody>
                <CardTitle>{props.songName}</CardTitle>
                <CardSubtitle>{props.artistName}</CardSubtitle>
                <a href={props.songURL}><Button>Listen on Spotify</Button></a>
                </CardBody>
            </Card>
        </div>
    )
}

export default SongCards;