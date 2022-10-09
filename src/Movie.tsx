export interface MovieType {
    year: number,
    title: string,
    summary: string,
    poster: string,
    genres: string[],
}

const Movie = ({year, title, summary, poster, genres}: MovieType) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
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