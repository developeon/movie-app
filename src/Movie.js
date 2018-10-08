import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
    return (
        <div>
            <div>
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div>
                <h1>{title}</h1>
                <div>
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div>
                <LinesEllipsis
                    text={synopsis}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt}/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.PropTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.PropTypes = {
    poster : PropTypes.string.isRequired
}

MovieGenre.PropTypes ={
    genre: PropTypes.string.isRequired
}

export default Movie;