import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const FavoriteCards = (props) => {

    return (
        <div className='song-cards'>
            <Card>
                <Link to={{ pathname: `/${props.id}`, state: {id: props.id}}}>
                <CardImg top width="300px" height="180px" src={props.image} alt="album image" />
                </Link>
                <CardBody>
                    <Link to={{ pathname: `/${props.id}`, state: {id: props.id}}}>
                        <CardTitle><h3>{props.songName}</h3></CardTitle>
                        <CardSubtitle><p>by {props.artist}</p></CardSubtitle>
                        <CardSubtitle><p>on {props.album}</p></CardSubtitle>
                    </Link>
                    <a href={props.link}> <Button type='button'>Listen on Spotify</Button> </a>
                </CardBody>
            </Card>
        </div>
    )
}

export default FavoriteCards;