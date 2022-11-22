import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import AnimalsOnly from './AnimalsOnly';
import BirdsOnly from './BirdsOnly';
import About from './About';
import NotFound from './NotFound';
import './App.css';
import './Card.css';

class App extends Component {
  render(){
    return (       
      <BrowserRouter> 
      
      <nav>
      <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/animalsonly">Animals</NavLink></li>
      <li><NavLink to="/birdsonly">Birds</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      </ul>
      </nav>
      <Routes>
      <Route path="/" element={<Home />}    />
      <Route path="/animalsonly" element={<AnimalsOnly />} />
      <Route path="/birdsonly" element={<BirdsOnly />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
);
} 
};

export default App;