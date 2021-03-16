import React from 'react';
import Footer from '../layout/Footer';
import HeroSection from '../layout/HeroSection';
import NavBar from '../layout/NavBar/NavBar';
import ListProducts from '../products/ListProducts';

const Home = () => {
    return ( 
        <>
            <NavBar/>
            <HeroSection/>
            <ListProducts/>
            <Footer/>
        </>
     );
}
 
export default Home;