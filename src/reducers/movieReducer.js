import { ADD_MOVIE, DELETE_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITE } from '../actions/movieActions.js';
import movies from './../data.js';

import { combineReducers } from 'redux';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
    favorites: [],
    displayFavorites: false
}


const reducer = (state = initialState, action) => {

    combineReducers(state.movies, state.favorites)

    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            return ({
                movies: [...state.movies, action.payload]
                
            })
        case ADD_FAVORITE:
            return {
                ...state.movies
            }
        case REMOVE_FAVORITE:
            return {
                ...state.movies
            }
        case TOGGLE_FAVORITE:
            return ({
                displayFavorites: !state.displayFavorites
            })
        
        

        default:
            return state;
    }

    
}

export default reducer;