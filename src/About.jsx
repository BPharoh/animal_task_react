import React from 'react';
import { Link } from "react-router-dom";



const About = () =>  {
    return (    <div className='about_page'>
        <h1>Reactjs Project</h1>
        <p>This project was given in the fullstack program at Business college helsinki. 
        The project is about fecthing images of animals and birds and displaying them by the order of their names
        </p>
        <Link to="/">Go back to Home</Link>
    </div>    

    );
};

export default About;
 