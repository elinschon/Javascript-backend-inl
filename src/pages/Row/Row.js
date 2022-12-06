import axios from "../../axios";
import React, { useState, useEffect } from "react";
import "./row.css";
import MovieCard from "../MovieCard/MovieCard";

//tar in title, fetchURL och isLargeRow som props
function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
      // const res = await fetch(fetchURL);
      // const data = await res.json();
      // setMovies(data.results);
    }

    fetchData();
  }, [fetchURL]);

  return (
    <section className="row">
      <h1>{title}</h1>
      <div className="movies">
        {movies.map((movie) => {
          return (
              <MovieCard key={movie.id} movie={movie} />
          );
        })}
      </div>
    </section>
  );
}

export default Row;
