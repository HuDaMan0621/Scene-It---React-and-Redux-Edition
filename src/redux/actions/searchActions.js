import {SEARCH_MOVIE, FETCH_MOVIES} from './types';
import axios from 'axios';
import {apiKey} from '../../APIKEY';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const fetchMovies = text => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=4ac8f1c4&s=${text}`)
    .then(response =>dispatch ({
        type: FETCH_MOVIES,
        payload: response.data.Search //the data coming back from axios
    }) )
    .catch(err => console.log(err))
};