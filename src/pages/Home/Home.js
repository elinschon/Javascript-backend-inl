import React, { useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import Row from "../Row/Row";
import Footer from "../Footer/Footer";
import requests from "../../Requests";

export default function Home() {

  return (
    <div className="homeScreen">
      <Header />

      <Row title="Popular" fetchURL={requests.fetchPopular} />
      <Row title="Upcoming" fetchURL={requests.fetchUpcoming} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />

      <Footer />
    </div>
  );
}
