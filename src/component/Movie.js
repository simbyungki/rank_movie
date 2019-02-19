import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({poster, title, id, genres, synopsis}){
    return (
        <div className="MovieCard" data-id={id}>
            <div className="Movie__Column">
                <MoviePoster poster={poster} title={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters' 
                    />
                </div>
            </div>
        </div>
    )
}

//dumb
function MoviePoster({poster, title}){
    return (
        <img src={poster} alt={title} className="Movie__Poster" />
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired,
    poster : PropTypes.string.isRequired,
    //sysnopsis : PropTypes.string,
    genres : PropTypes.array
}

MoviePoster.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre : PropTypes.string
}

export default Movie;