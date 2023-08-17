import React from 'react';
import './photo.scss'
import photo1 from './../../images/Frame 1.svg'
import photo2 from './../../images/Frame 2.svg'
import photo3 from './../../images/Frame 3.svg'
import photo4 from './../../images/Frame 4.svg'
import photo5 from './../../images/Frame 5.svg'
import photo6 from './../../images/Frame 6.svg'

const Photo = () => {
    return (
        <div id="photo">
            <div className="container">
                <div className="photo">
                    <img className="images" src={photo1} alt=""/>
                    <img className="images" src={photo2} alt=""/>
                    <img className="images" src={photo3} alt=""/>
                    <img className="images"  src={photo4} alt=""/>
                    <img className="images"  src={photo5} alt=""/>
                    <img className="images"  src={photo6} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Photo;