import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './Movies';
import JoelPodcast from './Podcasts';
import Navbar from './Navbar';
import Header from './Header';

function App() {
  return (
    //Wrapped my div with the router tag so the routes within pages work
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header title="Joel Hilton Website" />} />
          <Route path="/Podcast" element={<JoelPodcast />} />
          <Route path="/MovieList" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
