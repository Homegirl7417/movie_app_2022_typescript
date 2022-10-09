export interface MovieType {
    year: number,
    title: string,
    summary: string,
    poster: string,
}

const Movie = ({year, title, summary, poster}: MovieType) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

export default Movie