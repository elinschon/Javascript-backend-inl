import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const API_KEY = "bf920c0eccef0a5571a534bbb27fffc5";
const base_url = "https://image.tmdb.org/t/p/w500";

export default function SingleMovie() {
 
    const [singleMovie, setSingleMovie] = useState();
    const { id } = useParams();

    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        const res = await fetch(url);
        const data = await res.json();
    
        if (data) {
          setSingleMovie(data); //testar singleMovie && här ist för nere i return
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

      // console.log(singleMovie)

    return(
        <section className="movieInfo">
            <h1>
            {singleMovie && singleMovie.original_title}
            </h1>
            <img className="singleMovieImage" src={base_url + (singleMovie && singleMovie.poster_path)} alt="" />
            <p>{singleMovie && singleMovie.overview}</p>
        </section>
    )
}