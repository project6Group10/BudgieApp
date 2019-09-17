import React from 'react';
import BudgieLogo from '../assets/budgie.png';
import { Link } from 'react-router-dom';

const Home = () =>  {
        return ( 
            <div className="home">
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to="/" className="navigation__logo btn-logo">
                                <img src={BudgieLogo} className="image logo" alt="Budgie Birb Logo."/>
                            </Link>
                        </li>
                        <li className="navigation__item--large">
                            <Link to="/About" className="navigation__link btn-about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main className="Container">
                    <section className="title">
                        <h1 className="title__main">Budgie</h1>
                        <h2 className="title__sub">Your daily budget</h2>
                    </section>
                    <Link to="/Budgie" className="btn-start">
                        start
                    </Link>
                </main>
            </div>
        );
}

export default Home;