import { Link } from "react-router-dom";
import React from 'react';
import animal_image from './assets/animal_image.jpeg';
import birds_image from './assets/birds_image.jpeg';


const Home = () =>  {
    return (     
    
        <div>
        <h1>Click on image to see all animals or birds</h1>
        <div className="home_style">
        <div className="animal_style">
        <img src={animal_image} alt="animal" />
        <span className="animal_img"><Link to="/animalsonly">Animals</Link></span>
        </div> 
        <div className="bird_style"> 
        <img src={birds_image} alt="birds" />
        <span className="bird_img"><Link to="/birdsonly">Birds</Link></span>
        
    </div> 
    </div>
    </div>

    );
};

export default Home;
 