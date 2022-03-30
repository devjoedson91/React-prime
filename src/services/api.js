import axios from 'axios';

// URL: filmes em cartaz
//https://api.themoviedb.org/3/movie/now_playing?api_key=ba192920d7389e7ca278beedc09b8575&language=pt-BR&page=1

export const key = 'ba192920d7389e7ca278beedc09b8575';

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3'
})

export default api;