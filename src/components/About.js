import React, { Component } from 'react';
import Avatar from '../assets/avatar.jpeg';
import { Link } from 'react-router-dom';
import BudgieLogo from '../assets/budgie.png';

class About extends Component {

    render() { 
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
                    <h1 className="title">When it comes to your money, 
                        <span className="title__span">don't budge.</span>
                    </h1>
                    <div className="row">
                        <section className="col-1-of-2">
                            <h2 className="subtitle">who we are</h2>
                            <div className="composition">
                                <img src={Avatar} alt="Two faceless animated people" className="image composition__photo" />
                            </div>
                            <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac eros eget purus molestie rhoncus eu quis mi. Proin faucibus ullamcorper interdum. Donec mattis pulvinar mauris, eu euismod purus placerat vitae. Curabitur eget augue sed dui aliquam consectetur. Vivamus eu elit ac nisl imperdiet pharetra. Fusce lacinia laoreet nunc, ut blandit dui vehicula
                            </p>
                            <Link to="/Budgie" className="btn-text">Start</Link>
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
}

export default About;