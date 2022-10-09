export interface MovieType {
    id: number,
    year: number,
    title: string,
    summary: string,
    poster: string,
}

const Movie = ({id, year, title, summary, poster}: MovieType) => {
    return (<h4>{title}</h4>)
}

export default Movie
