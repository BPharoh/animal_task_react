import { Link } from "react-router-dom";
import React from 'react';
import animal_image from './assets/animal_image.jpeg';
import birds_image from './assets/birds_image.jpeg';


const Home = () =>  {
    return (     
    
    <div>
        <h1 className="page_title">Click on image to see all <span>animals</span> or <span>birds</span></h1>
     <div className="home_style">
        <div className="animal_style">
        <Link to="/animalsonly"><img src={animal_image} alt="animal" /></Link>
        <div className="animal_img"><Link to="/animalsonly"><h3>Animals</h3></Link></div>
        </div> 
        <div className="bird_style"> 
        <Link to="/birdsonly"><img src={birds_image} alt="birds" /></Link>
        <div className="bird_img"><Link to="/birdsonly"><h3>Birds</h3></Link></div>
        </div> 
     </div>
    </div>

    );
};

export default Home;
 