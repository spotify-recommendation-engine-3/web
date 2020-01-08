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

        <p>
            Liked&nbsp;
            <strong>{itemData.likes.length}</strong>
            &nbsp;times
          </p>
          {!liked ? (
            <button type="button" className="button like" onClick={handleLike}>
              Like&nbsp;
              <i className="far fa-heart" />
            </button>
          ) : (
            <button
              type="button"
              className="button liked"
              onClick={handleUnlike}
            >
              Liked&nbsp;
              <i className="fas fa-heart" />
            </button>
          )}