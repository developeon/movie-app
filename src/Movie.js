import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1> {title} </h1>
        </div>
    )
}

Movie.propTypes = {
    title : propTypes.string.isRequired,
    poster : propTypes.string.isRequired
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="poster"/>
    )
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired
}

export default Movie;