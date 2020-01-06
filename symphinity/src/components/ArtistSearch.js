import React, { useState, useEffect } from 'react';

const ArtistSearch = () => {
    const [artist, setArtist] = useState('');
    const [songs, setSongs] = useState([]);

    const handleChanges = e => {
        setArtist(e.target.value);
    }    

    return (
        <div>
            <label htmlFor='search'>Type in artist name to get their top tracks</label>
            <br />
            <input value={artist} onChange={handleChanges} type='text' name='search' />
            <button type='submit'>Search</button>
        </div>
    )
}

export default ArtistSearch;