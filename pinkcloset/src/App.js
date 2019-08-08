import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/nav/navbar';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App" style={{fontFamily: 'Cinzel,Serif'}}>
   <Navbar/>
    </div>
    </Router>
  );
}

export default App;
