import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navber from '../components/Navber/Navber';

const Main = () => {
    return (
        <div>
            {/* Navigation section */}
            <nav>
            <Navber></Navber>
            </nav>
            
            {/* Main body section of the application */}
            <div className='max-w-screen-xl mx-auto'>
            <Outlet></Outlet>
            </div>
           
           {/* Footer section of the application */}
            <div>
            <Footer></Footer>
            </div>   
        </div>
    );
};

export default Main;