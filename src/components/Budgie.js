import React, { Component } from 'react';
import '../sass/App.scss';
import { Link } from 'react-router-dom';
import BudgieLogo from '../assets/budgie.png';
import CalcDailyBudget from './CalcDailyBudget';
import InputPayday from './InputPayday';
import DisplayExpenses from './DisplayExpenses';

class Budgie extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="budgie">
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
                <header className="hero">
                    <div className="Container">
                      <CalcDailyBudget />
                    </div>
                </header>
                <main className="Container">
                <section className="flex">
                    <InputPayday />
                    <DisplayExpenses />
                </section>
                </main>
            </section>
        );
    }
}

export default Budgie;