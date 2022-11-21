import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import AnimalsOnly from './AnimalsOnly';
import BirdsOnly from './BirdsOnly';
import About from './About';
import './App.css';
import './Card.css';

class App extends Component {
  render(){
    return (       
      <BrowserRouter> 
      
      <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/animalsonly">Animals</Link></li>
      <li><Link to="/birdsonly">Birds</Link></li>
      <li><Link to="/about">About</Link></li>
      </ul>
      </nav>
      <Routes>
      <Route path="/" element={<Home />}    />
      <Route path="/animalsonly" element={<AnimalsOnly />} />
      <Route path="/birdsonly" element={<BirdsOnly />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
);
} 
};

export default App;