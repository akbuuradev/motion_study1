import React from 'react';
import Hero from '../Hero/hero';
import BestFrom from '../BestFrom/BestFrom';
import Countries from '../pages/Countries/Countries';
import Application from "../Application/application.js";
import Exams from "../Exams/Exams";
import Slider from "../Slider/Slider";
import Study from "../Study/study";

const Home = () => {
    return (
        <div>
            <Hero/>
            <BestFrom/>
            <Exams/>
            <Slider/>
            <Application/>
        </div>
    );
};

export default Home;
