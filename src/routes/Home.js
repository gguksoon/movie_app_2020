import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  componentDidMount() {
    this.getMovies();
  }
  getMovies = async () => {
    // 예전 객체 접근 방법
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    // ES6 이 후 사용 가능한 구조 분해 할당 
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    // 앞의 movies는 state, 뒤의 movies는 위 구조 분해 할당으로 입력한 movies 변수
    // this.setState({ movies: movies}); 
    // ES6에서 위 처럼 state와 변수의 명이 같다면 아래 처럼 한 단어로 축약이 가능
    this.setState({ movies, isLoading: false }); 
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading
          ? (
            <div className='loader'>
              <span className='loader__text'>Loading...</span>
            </div>
          )
          : (
            <div className='movies'>
              {movies.map((movie) => (
                  <Movie 
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
              ))}
            </div>
          )
        }
      </section>
    );
  }
}

export default Home;