import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search'
import Saved from './components/Saved'



export default function App(){
  return(
 
    <Router>
      <div>
        <div>
          <Link to ="/" style={{padding: 50}}>Home</Link>
          <Link to ="/search" style={{padding: 50}}>Search</Link>
          <Link to ="/saved" style={{padding: 50}}>My Activities</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
    
    
  )
}

