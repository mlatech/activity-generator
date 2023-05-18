import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import Search from './Search'
import Saved from './Saved'


export default function App(){
  return(
    <Router>
      <div>
        <nav>
          <Link to ="/" style={{padding: 5}}>Home</Link>
          <Link to ="/search" style={{padding: 5}}>Search</Link>
          <Link to ="/saved" style={{padding: 5}}>My Activities</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  )
}

