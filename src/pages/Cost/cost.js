import React from 'react';
import './cost.scss'
import {data} from "../../Data/countData";
import {useSelector} from "react-redux";
const Cost = () => {

    const {count, aboutCount} = useSelector(s => s)

    const {dec, year, the} = data[count-1].about[aboutCount-1].details

    return (
        <div id="cost">
            <div className="container">
                <div className="cost">
        <h2><span>The cost of studying</span> at the Istituto Europeo di Design for the 2023-2024 academic year:</h2>
                    <p> – Academic year (training) – from 1,566,000 rubles.</p>
                    <p> – Academic year (accommodation) – from 870,000 rubles.</p>
                </div>
            </div>
        </div>
    );
};

export default Cost;