import { useEffect, useState } from "react";
import './header.css';
// import SearchBar from '../SearchBar/SearchBar';

export default function Header( { searchedMovies, setSearchedMovies}) {
  const [query, setQuery] = useState("");

  const API_KEY = "bf920c0eccef0a5571a534bbb27fffc5";

  const searchMovieFetch = async (query) => {
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query};`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.results) {
      setSearchedMovies(data.results);
    }
  };

  useEffect(() => {
    searchMovieFetch(query);
  }, [query]);

    return(
        <div className="nav">
            <div className="headerContainer">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1150px-IMDB_Logo_2016.svg.png?20200406194337" alt="" />
            <div className="searchBarContainer">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie..."
      />
    </div>
            </div>
        </div>
    )
}