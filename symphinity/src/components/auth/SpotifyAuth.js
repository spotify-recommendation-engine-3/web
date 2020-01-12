import React from 'react';

const SpotifyAuth = () => {

    return (
        <div>
            {/* <a href='https://oauth-spotify-backend.herokuapp.com/login'> */}
            <a href='http://localhost:8888/login'>
                <button>Link your <i className="fab fa-spotify"></i></button>
            </a>
        </div>
    )
}

export default SpotifyAuth;