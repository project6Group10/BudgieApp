import React from 'react';

const DisplayDailyAmount = (props) => {
    return (
        <div>
            <section className="Budget">
                <p className="Budget__title">
                    Daily budget for the next <span className="Budget__title--month">{props.days} {(props.days == 1 ? 'day' : 'days')}</span>:
                </p>
                <p className="Budget__value">$ {props.budget}</p>
                <div className="info">
                    <div className="Budget__income">
                        <p className="Budget__income--text">Income</p>
                        <p className="Budget__income--value">${props.income}</p>
                    </div>

                    <div className="Budget__expenses">
                        <p className="Budget__expenses--text">Expenses</p>
                        <p className="Budget__expenses--value">${props.total}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DisplayDailyAmount;