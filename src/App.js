import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar name="iNotebook" />
          <Alert message="this is amazing react course"/>
          <div className='container'>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
