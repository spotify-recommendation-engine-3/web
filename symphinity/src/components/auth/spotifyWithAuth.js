import axios from "axios";

export const spotifyWithAuth = () => {
    const token = window.localStorage.getItem('spotifyAuthToken');
    return axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default spotifyWithAuth;