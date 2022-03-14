import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_WEB
});

export default api;