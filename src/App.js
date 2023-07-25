import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AboutView from './Component/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchView from './Component/SearchView';
import { useEffect, useState } from 'react';
import MovieView from './Component/MovieView';


const App = () => {

const[searchresult,setSearchresult] = useState([])
const [searchText,setSearchText] = useState('')



useEffect(() => {
  if (searchText) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchText)}&api_key=0c9e2aead16efd0daa31100a5c80e66b&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setSearchresult(data.results);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setSearchresult([]); // Clear the search results in case of an error
      });
  } else {
    setSearchresult([]); // Clear the search results when searchText is empty
  }
}, [searchText]);


  return (
    <Router>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView  keyword={searchText} searchresult={setSearchresult} />} />
        <Route path="/movie/:id" element={<MovieView  />} />
        
      </Routes>
    </Router>
  );
}

export default App;



