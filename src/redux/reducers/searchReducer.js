import { SEARCH_MOVIE, FETCH_MOVIES } from '../actions/types';

const initialState = {
    text: '',
    movies: [], //search results like json data
    loading: false, //loading is going to be false or true, depending on the data
    movie: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            }
        default:
            return state
    }
}