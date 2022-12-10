import './movieCard.css'
import { Link } from 'react-router-dom';

export default function MovieCard({ movie, addRecentlyViewed }) {


const base_url = "https://image.tmdb.org/t/p/original/";

//removed colon from link below:
  return (
    <div className="movieCard">
      <Link to={`/movie${movie.id}`} onClick={() => addRecentlyViewed({movie})}> 
        <img className="movieImage" src={`${base_url}${movie.poster_path}`} alt="movie.title" />
        <h3>{`${movie.original_title}`}</h3>
        <p>{`Rating: ${movie.vote_average}`}</p>
        </Link>   
    </div>

  )
}
