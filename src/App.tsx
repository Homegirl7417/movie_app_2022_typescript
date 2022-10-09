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
    <section className="container">
      { 
        isLoading ? (
          <div className="loader">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map((movie: any) => (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))
            }
          </div>
        )
      };
    </section>
  );
}

export default App;
