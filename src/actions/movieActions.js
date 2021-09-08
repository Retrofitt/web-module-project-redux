export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie)=>{
    return({type: ADD_MOVIE, payload:movie});
}

export const addFavorites = (movie)=>{
    return({type: ADD_FAVORITE, payload:movie});
}

export const toggleFavorites = ()=>{
    return({type: TOGGLE_FAVORITE});
}

export const removeFavorite = ()=>{
    return({type: TOGGLE_FAVORITE});
}