import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
    // withCredentials:true,
    // headers:{
    //     'api-key':'db049131'
    // },
};
const key = 'db049131';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
       const  query=`?apikey=${key}&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
