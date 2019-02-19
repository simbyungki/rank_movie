import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Movie from './component/Movie';

class App extends Component {
    //https://yts.am/api
    //sort : String (title, year, rating, peers, seeds, download_count, like_count, date_added)
    state = {
        sortType: 'download_count'
    }

    componentDidMount(){
        this._getMovies();
    }

    _renderMovies = () => {
        const renderMovies = this.state.movies.map(movie => {
            return (
                <Movie 
                    title={movie.title_english} 
                    poster={movie.medium_cover_image} 
                    id={movie.id} 
                    key={movie.id} 
                    genres={movie.genres} 
                    synopsis={movie.synopsis}
                 />
            )
        })
        return renderMovies;
    }

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        });
    }

    _callApi = () => {
        return fetch(`https://yts.am/api/v2/list_movies.json?sort_by=${this.state.sortType}`)
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }

    _changeSortType = () => {
        const {sortType} = this.state;
        console.log();
        
    }


    render() {
        const {movies} = this.state;
        const {
            _changeSortType
        } = this;
        return (
            
            <div className={movies ? "App" : "App--loading"}>
                <Header onChange={_changeSortType} />
                <div className="Contents">
                    {movies ? this._renderMovies() : 'Loading'}
                </div>
            </div>
        );
    }
}

export default App;
