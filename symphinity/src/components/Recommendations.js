import React from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';

const Recommendations = (props) => {

    const song_id = props.id

    return (
        <Card body className='sugg-cards'>
        <CardTitle>{props.song}</CardTitle>
        <CardSubtitle>by {props.artist}</CardSubtitle>
        </Card>
    )
}

export default Recommendations;