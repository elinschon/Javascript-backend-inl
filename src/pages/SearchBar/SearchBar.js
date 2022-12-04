import { useEffect, useState } from "react";
// import requests from "../../Requests";
// import axios from "../../axios";

export default function SearchBar() {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [query, setQuery] = useState("");

  const API_KEY = "bf920c0eccef0a5571a534bbb27fffc5";

  const searchMovieFetch = async (query) => {
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query};`;
    const res = await fetch(url); //eg url
    const data = await res.json();

    if (data.results) {
      setSearchedMovie(data.results);
      console.log(data.results);
    }
  };

  useEffect(() => {
    searchMovieFetch(query);
  }, [query]);

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value, console.log(query))}
        placeholder="Search movie..."
        // onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
}
