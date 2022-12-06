import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import SingleMovie from "./pages/SingleMovie/SingleMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie:id" element={<SingleMovie />} />
        </Routes>
        {/* <Home /> */}
      </div>
    </Router>
  );
}

export default App;
