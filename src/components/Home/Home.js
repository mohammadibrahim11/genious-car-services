import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Services from './Services/Services';
import Team from './Team/Team';




const Home = () => {


    return (
        <div className=' bg-white'>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Products></Products>
          <Team></Team>
        </div>
    );
};

export default Home;