import React from 'react';

const FavoriteCards = () => {

    return (
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
    )
}

export default FavoriteCards;