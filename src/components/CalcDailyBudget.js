import React from 'react';

const CalcDailyBudget = (props) => {
    return (
        <div>
            <div className="Budget ">
                <div className="Budget__title">
                    Available Budget in <span className="Budget__title--month">{props.days}</span>:
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