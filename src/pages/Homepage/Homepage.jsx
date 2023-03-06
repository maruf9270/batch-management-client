import { signOut } from 'firebase/auth';
import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../Redux/Reducers/AuthenticationReducer/AuthenticationReducer';



const Homepage = () => {
    const states =  useSelector((state)=>state)
    console.log(states);
    return (
        <div>
            This is Homepage
    <button onClick={()=>signOut(auth)}>Sign out</button>            
        </div>
    );
};

export default Homepage;