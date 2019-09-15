import React, { Component } from 'react';
import '../sass/App.scss';
import { Link } from 'react-router-dom';
import DisplayExpenses from './DisplayExpenses';
import InputPayday from './InputPayday';
import BudgieLogo from '../assets/budgie.png';
import CalcExpenseTotal from './CalcExpenseTotal';
// import CalcPayday from './components/CalcPayday';

class Budgie extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="Container">
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
                <section>
                    <CalcExpenseTotal />
                </section>
                <section className="flex">
                    <InputPayday />
                    <DisplayExpenses />
                </section>
            </section>
        );
    }
}

export default Budgie;