import React, {useState} from 'react';
import Hamburger from 'hamburger-react'
import {NavLink} from "react-router-dom";


const Burger = () => {

    const [open, setOpen] = useState(false)

    return (
        <div id="burger">
            <div className="container">
                <div className="burger">
                        <Hamburger onClik={() => setOpen(true)} style={{color: "#FFFFF" , transition:'2s'}}  toggled={open} toggle={setOpen} />
                        <div style={{display: open  ? 'block' : 'none', position:'absolute'}}  className="burger--block">
                            <div className="burger--block__open">
                                <NavLink onClick={() => window.scroll(0, 0)} className="header--title__nav--item" to="/">
                                    <span>Home</span>
                                </NavLink>
                                <NavLink onClick={() => window.scroll(0, 0)} className="header--title__nav--item" to="/about">
                                    <span>About Us</span>
                                </NavLink>
                                <NavLink onClick={() => window.scroll(0, 0)} className="header--title__nav--item" to="/study">
                                    <span>Study Abroad</span>
                                </NavLink>
                                <a onClick={() => window.scroll(0, 3300)} className="header--title__nav--item">
                                    <span>Contacts</span>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Burger;