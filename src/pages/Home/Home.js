import React, { useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import ResultRow from "../ResultRow/ResultRow";
import Row from "../Row/Row";
import Footer from "../Footer/Footer";
import requests from "../../Requests";
import RecentlyViewedRow from "../Row/RecentlyViewedRow/RecentlyViewedRow";

export default function Home({
  addRecentlyViewed,
  recentlyViewed,
  setRecentlyViewed,
}) {
  //här ska sökresultaten hamna, skickas som props in i header och Resultrow
  const [searchedMovies, setSearchedMovies] = useState([]);

  //flyttade addtorecentlyviewd till app

  // skickar in sökresultaten i Resultrow som props
  return (
    <div className="homeScreen">
      <Header
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
      />
      <ResultRow searchedMovies={searchedMovies} />
      <Row
        title="Popular"
        fetchURL={requests.fetchPopular}
        addRecentlyViewed={addRecentlyViewed}
      />
      {/* <Row title="Popular" fetchURL={requests.fetchPopular} addRecentlyViewed={addRecentlyViewed}/> */}

      <Row title="Upcoming" fetchURL={requests.fetchUpcoming} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />
      <RecentlyViewedRow
        title="Recently viewed"
        recentlyViewed={recentlyViewed}
      />

      <Footer />
    </div>
  );
}
