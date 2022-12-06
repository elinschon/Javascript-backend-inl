import './movieCard.css'
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {

const base_url = "https://image.tmdb.org/t/p/original/";

//removed colon from link below:
  return (
    <div className="movieCard">
      <Link to={`/movie${movie.id}`}> 
        <img className="movieImage" src={`${base_url}${movie.poster_path}`} alt="movie.title" />
        </Link>   
    </div>

  )
}
