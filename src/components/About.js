import React from 'react';
import Avatar from '../assets/avatar.jpeg';
import { Link } from 'react-router-dom';
import BudgieLogo from '../assets/budgie.png';

const About = () =>  {
        return ( 
            <div className="about">
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link to="/" className="navigation__logo btn-logo">
                                <img src={BudgieLogo} className="image logo" alt="Budgie Birb Logo."/>
                            </Link>
                        </li>
                        <li className="navigation__item--large">
                            <Link to="/" className="navigation__link btn-home">
                                home
                            </Link> 
                        </li>
                    </ul>
                </nav>
                <main className="Container">
                    <h1 className="title">Need a short-term budget? 
                    </h1>
                    <div className="row">
                        <section className="col-1-of-2">
                            <h2 className="subtitle">Budgie is here for you</h2>
                            <div className="composition">
                                <img src={Avatar} alt="Two faceless animated people" className="image composition__photo" />
                            </div>
                            <p className="paragraph">
                            Enter the amount and date of your next pay date and Budgie will calculate a daily budget between now and payday. As daily expenses are inccured, enter them into the expense field and Budgie will account for the expenses and adjust the daily budget.
                            </p>
                            <Link to="/Budgie" className="btn-start">start</Link>
                        </section>
                        <section className="col-2-of-2">
                            <div className="composition">
                                <img src={Avatar} alt="Two faceless animated people" className="image composition__photo" />
                            </div>
                        </section>
                    </div> 
                </main>
            </div> 
        );
}

export default About;