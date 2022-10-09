import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
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
      { isLoading ? 'Loading...' : 'We are ready' }
    </div>
  );
}

export default App;
