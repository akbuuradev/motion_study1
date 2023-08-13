import React from 'react';
import Hero from '../Hero/hero';
import BestFrom from '../BestFrom/BestFrom';
import Countries from '../pages/Countries/Countries';
import Application from "../Application/application.js";

const Home = () => {
    return (
        <div>
            <Hero/>
            <BestFrom/>
            <Countries/>
            <Application/>
        </div>
    );
};

export default Home;