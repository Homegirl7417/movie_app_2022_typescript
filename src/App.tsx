import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async (): Promise<void> => {
      const {
        data: {
          data: {
            movies
          }
        }
      } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')
      setMovies(movies);
      setIsLoading(false);
    }
    getMovies()
  }, [])
  return (
    <div className="App">
      { 
        isLoading 
        ? 'Loading...' 
        : movies.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.ie}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))
        };
    </div>
  );
}

export default App;
