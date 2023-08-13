import React from 'react';
import Hero from '../Hero/hero';
import BestFrom from '../BestFrom/BestFrom';
import Countries from '../pages/Countries/Countries';

const Home = () => {
    return (
        <div>
            <Hero/>
            <BestFrom/>
            <Countries/>
        </div>
    );
};

export default Home;