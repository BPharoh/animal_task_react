import React from 'react';
import { Link } from "react-router-dom";


const Not_Found = () =>  {
    return (    <div className='not_found'>
        
        <p>This page does not exist.......</p>
        <Link to="/">Go back to Home</Link>
    </div>    

    );
};

export default Not_Found;