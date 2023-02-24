import React from 'react';
import { useSelector } from 'react-redux';



const Homepage = () => {
    const states =  useSelector((state)=>state)
    console.log(states);
    return (
        <div>
            This is Homepage
            
        </div>
    );
};

export default Homepage;