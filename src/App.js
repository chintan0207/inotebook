import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
