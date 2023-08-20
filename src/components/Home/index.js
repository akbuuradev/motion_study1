import React from 'react';
import Hero from '../Hero/hero';
import BestFrom from '../BestFrom/BestFrom';
import Contacts from "../Contacts/contacts.js";
import Exams from "../Exams/Exams";
import Slider from "../Slider/Slider";
import "./media.scss"

const Home = () => {
    return (
        <div>
            <Hero/>
            <BestFrom/>
            <Exams/>
            <Slider/>
            <Contacts/>
        </div>
    );
};

export default Home;
