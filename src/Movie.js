import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({ title, year, summary, poster, genres}) {
    return (
        <div className='movie'>
            <img src={poster} alt={title} title={title} />
            <div className='movie_data'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <ul className='movie__genres'>
                    {genres.map((genre, index) => {
                        return <li key={index} className='movie__genre'>{genre}</li>;
                    })}
                </ul>
                <p className='movie__summary'>{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired // 문자열을 원소로 하는 배열
};

export default Movie;