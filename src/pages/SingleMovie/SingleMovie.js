import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const API_KEY = "bf920c0eccef0a5571a534bbb27fffc5";
// 19585

export default function SingleMovie() {
 
    const [singleMovie, setSingleMovie] = useState();
    const { id } = useParams();
    console.log(id)

    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        const res = await fetch(url);
        const data = await res.json();
    
        if (data) {
        //   console.log(data);
          setSingleMovie(data);
        //   console.log(data.original_title)
        }
      };
    
      useEffect(() => {
        getData();
      }, []);

      console.log(singleMovie)

    return(
        <section className="movieInfo">
            hejhej
            <h1>
            {`${singleMovie && singleMovie.original_title}`}
            </h1>
            <p>{singleMovie && singleMovie.overview}</p>
        </section>
    )
}