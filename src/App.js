import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import GetMyActivity from './components/GetMyActivity'
import SavedLogic from './components/SavedLogic'




export default function App(){
  return(

    <Router>
      <div>
        <div>
          <Link to ="/" style={{padding: 50}}>Home</Link>
          <Link to ="/getmyactivity" style={{padding: 50}}>Generate Activity</Link>
          <Link to ="/saved" style={{padding: 50}}>My Activities</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getmyactivity" element={<GetMyActivity />} />
        <Route path="/saved" element={<SavedLogic />} />
      </Routes>
    </Router>
    
    
  )
}

