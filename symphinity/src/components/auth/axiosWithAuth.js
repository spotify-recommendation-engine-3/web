import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://spotify-song-suggestor-be.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
};