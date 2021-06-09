import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/', // local
    // baseURL: 'https://neko-back.herokuapp.com/2.0', // heroku
    withCredentials: true,
    headers: {}
})
