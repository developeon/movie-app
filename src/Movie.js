import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
                <h1> Hello this is a movie </h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://pbs.twimg.com/profile_images/972494591025823745/goLOOB1R_400x400.jpg"/>
        )
    }
}
export default Movie;