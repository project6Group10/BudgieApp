import React from 'react';

const DisplayDailyAmount = (props) => {
    return (
        <div>
            <div className="Budget ">
                <div className="Budget__title">
                    Available Budget in <span className="Budget__title--month">{props.days} Days</span>:
                </div>
                <div className="Budget__value">{props.budget}</div>
                <div className="info">
                    <div className="Budget__income">
                        <div className="Budget__income--text">Income</div>
                        <div className="Budget__income--value">{props.income}</div>
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

export default DisplayDailyAmount;