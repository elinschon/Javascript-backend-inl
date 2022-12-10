import React from "react";
import { useState } from 'react';
import "./App.css";
import Home from "./pages/Home/Home";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [recentlyViewed, setRecentlyViewed] = useState([]); //testar att skicka till Row och skicka med funktion som props

  //lägg till så inte samma film hamnar där två ggr
  function addRecentlyViewed({ movie }) {
    let newList = [...recentlyViewed, movie];
    if(newList.length > 5) {
      newList.shift();
    }
    setRecentlyViewed(newList);
   
}


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home addRecentlyViewed={addRecentlyViewed} recentlyViewed={recentlyViewed}/>} />
          <Route path="/movie:id" element={<SingleMovie />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
