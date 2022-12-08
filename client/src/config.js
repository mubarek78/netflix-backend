import axios from 'axios'


export const axiosInstance = axios.create({

    baseURL: "https://netflix-backend0.herokuapp.com/api"
})