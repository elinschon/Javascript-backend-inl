import './movieCard.css'

export default function MovieCard(movie) {

const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movieCard">
        <img className="movieImage" src={`${base_url}${movie.movie.poster_path}`} alt="movie.movie.title" />
    </div>

  )
}
