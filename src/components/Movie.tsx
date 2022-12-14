import React from 'react';
import './Movie.css';
import { useNavigate } from 'react-router-dom'

interface MovieType {
    id: number,
    year: number,
    title: string,
    summary: string,
    poster: string,
    genres: string[],
}

const Movie = ({id, year, title, summary, poster, genres}: MovieType): React.ReactElement => {
    const navigate = useNavigate()
    const onClickMovie = (): void => {
        navigate(`/movie/${id}`, {
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        })
    }
    return (
        <div className="movie" onClick={onClickMovie}>
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {
                        genres.map((genre: string, index: number) => (
                            <li key={index} className="genres__genre">{genre}</li>
                        ))
                    }

                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

export default Movie