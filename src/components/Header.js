/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Logo from '../logo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Header extends Component {
    render() { 
        return ( 
            <header className="header">
            
            {/*<div className="logo-box">
                <img src={Logo} alt="logo" className="logo" />
            </div>
                <h1 className="heading-primary">
            <span className="heading-primary__main">budgie</span>
            <span className="heading-primary__sub ">Take control with a daily budget</span>
        </h1>*/}
            <div className="Container">
                <section className="heading-primary">
                    <h1 className="heading-primary__main">budgie</h1>
                    <h2 className="heading-primary__sub ">Your daily budget</h2>
                </section>
                <div className="header__buttonContainer">
                    <button className="header-button">
                        <Link to="/About" className="btn-link">
                            <span className="text">About</span> <span className="line -right"></span>
                            <span className="line -top"></span> <span className="line -left"></span>
                            <span className="line -bottom"></span>
                        </Link>
                    </button>
                    <button className="header-button">
                        <Link to="/Budgie" className="btn-link">
                            <span className="text">Start</span> <span className="line -right"></span>
                            <span className="line -top"></span> <span className="line -left"></span>
                            <span className="line -bottom"></span>
                        </Link>
                    </button>
                </div>
            </div>
        </header>
         );
    }
}
 
export default Header;