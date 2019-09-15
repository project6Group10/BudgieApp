import React from 'react';
import { Link } from 'react-router-dom';
import BudgieLogo from '../assets/budgie.png';
const CalcDailyBudget = (props) => {
    return (
        <div>
            <nav className="budget-nav">
                <div className="budget-logo">
                        <Link to="/">
                            <img src={BudgieLogo} className="logo" alt="Budgie Birb Logo."/>
                        </Link>
                </div>
                <ul className="budget-list">
                    <li className="budget-item">
                            <Link to="/" className="btn-budget">
                                home
                            </Link>       
                    </li>
                    <li className="budget-item">
                            <Link to="/About" className="btn-about">
                                about
                            </Link>
                    </li>
                </ul>
            </nav>
            <div className="Budget ">
                <div className="Budget__title">
                    Available Budget in <span className="Budget__title--month">%Day%</span>:
                </div>
                
               <div className="Budget__value">+ 2,345.64</div>
              <div className="info">
                    <div className="Budget__income">
                        <div className="Budget__income--text">Income</div>
                            <div className="Budget__income--value">+ 4,300.00</div>
                            <div className="Budget__income--percentage">20%</div>
                    </div>
                    
                    <div className="Budget__expenses">
                        <div className="Budget__expenses--text">Expenses</div>
                            <div className="Budget__expenses--value">{props.total}</div>
                            <div className="Budget__expenses--percentage">45%</div>
                       </div>
            </div>
            </div>
        </div>
    )
}

export default CalcDailyBudget;