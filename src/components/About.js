import React, { Component } from 'react';
import Avatar from '../assets/avatar.jpeg';
import { Link } from 'react-router-dom';
import BudgieLogo from '../assets/budgie.png';

class About extends Component {

    render() { 
        return ( 
            
        <section className="About ">
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to="/" className="btn-logo">
                            <img src={BudgieLogo} className="logo" alt="Budgie Birb Logo."/>
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/" className="btn-home">
                            home
                        </Link> 
                    </li>
                </ul>
            </nav>
            <div className="Container">
                <h2 className="heading-primary">When it comes to your money, 
                    <span className="heading-primary-span">don't budge.</span>
                </h2>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-secondary">who we are</h3>
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac eros eget purus molestie rhoncus eu quis mi. Proin faucibus ullamcorper interdum. Donec mattis pulvinar mauris, eu euismod purus placerat vitae. Curabitur eget augue sed dui aliquam consectetur. Vivamus eu elit ac nisl imperdiet pharetra. Fusce lacinia laoreet nunc, ut blandit dui vehicula
                        </p>
                        <Link to="/Budgie" className="btn-text">Start</Link>
                    </div>
                    <div className="col-2-of-2">
                        <div className="composition">
                            <img src={Avatar} alt="Two faceless animated people" className="composition__photo" />
                        </div>
                    </div>
                </div> 
            </div>
        </section> 
        
        );
    }
}
 
export default About;