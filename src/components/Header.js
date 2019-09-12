/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Logo from '../logo.png';

class Header extends Component {
    render() { 
        return ( 
            <header className="header">
            <div className="logo-box">
            <img src={Logo} alt="logo" className="logo" />
            </div>
            <h1 className="heading-primary">
            <span className="heading-primary__main">budgie</span>
            <span className="heading-primary__sub ">Take control of your budget</span>
            </h1>
            <ul className="header__social-media">
                <li className="header__social-media-item"><a className="header__social-media-link" href="#twitter"></a><i className="fab fa-instagram"></i></li>
                <li className="header__social-media-item"><a className="header__social-media-link" href="#facebook"></a><i className="fab fa-facebook-f"></i></li>
                <li className="header__social-media-item"><a className="header__social-media-link" href="#twitter"></a><i className="fab fa-twitter"></i></li>
            </ul>
            <section className="header-button">
            <a href="#test" className="btn-link">
                <span className="text">learn more</span> <span className="line -right"></span>
                <span className="line -top"></span> <span className="line -left"></span>
                <span className="line -bottom"></span>
            </a>
            </section>
        </header>
         );
    }
}
 
export default Header;