import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies : [
          {
            title : "신과함께",
            poster : "http://newsimg.sedaily.com/2017/11/22/1ONOHF5TDF_2.jpg"
          },
          {
            title : "너의결혼식",
            poster : "http://img.khan.co.kr/news/2018/08/21/l_2018082101002297200189602.jpg"
          },
          {
            title : "안시성",
            poster : "http://thumbnail.egloos.net/600x0/http://pds27.egloos.com/pds/201808/25/74/d0014374_5b8118bd62f3c.jpg"
          },
        ]
      })
    }, 1000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    console.log(movies);
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
