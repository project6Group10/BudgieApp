/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import BudgieLogo from '../assets/budgie.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Header extends Component {
    render() { 
        return ( 
            <header className="header">
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to="/" className="btn-logo">
                                <img src={BudgieLogo} className="logo" alt="Budgie Birb Logo."/>
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/About" className="btn-about">
                                about
                            </Link>
                            
                        </li>
                    </ul>
                </nav>
            
                {/*<div className="logo-box">
                    <img src={Logo} alt="logo" className="logo" />
                </div>
                <h1 className="heading-primary">
                    <span className="heading-primary__main">budgie</span>
                    <span className="heading-primary__sub ">Take control with a daily budget</span>
                </h1>*/}

                <main className="Container">
                    <section className="heading-primary">
                        <h1 className="heading-primary__main">budgie</h1>
                        <h2 className="heading-primary__sub ">Your daily budget</h2>
                    </section>
                            <Link to="/Budgie" className="btn-start">
                                start
                            </Link>
                </main>
            </header>
        );
    }
}
 
export default Header;