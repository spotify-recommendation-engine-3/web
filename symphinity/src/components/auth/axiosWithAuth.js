import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'BASE_API_URL',
        headers: {
            Authorization: token
        }
    });
};