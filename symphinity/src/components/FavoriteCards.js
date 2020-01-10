import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const FavoriteCards = (props) => {

    const pushTo = () => {
        props.history.push(props.link)
    }

    return (
        <div className='song-cards'>
            <Link to={{ pathname: `/${props.id}`, state: {id: props.id}}}>
                <Card>
                    <CardImg top width="300px" height="180px" src={props.image} alt="album image" />
                    <CardBody>
                        <CardTitle><h3>{props.songName}</h3></CardTitle>
                        <CardSubtitle><p>by {props.artist}</p></CardSubtitle>
                        <CardSubtitle><p>on {props.album}</p></CardSubtitle>
                        <Button onClick={pushTo}>Listen on Spotify</Button>
                        {/* <a href={props.link}><Button>Listen on Spotify</Button></a> */}
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

export default FavoriteCards;