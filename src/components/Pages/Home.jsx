import React from 'react';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import ListProducts from '../products/ListProducts';

const Home = () => {
    return ( 
        <>
            <NavBar/>
            <ListProducts/>
            <Footer/>
        </>
     );
}
 
export default Home;