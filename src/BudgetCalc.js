import React, { Component } from 'react';

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
         <div className="BudgetCalc">
            <div className="Budget">
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
                            <div className="Budget__expenses--value">- 1,954.36</div>
                            <div className="Budget__expenses--percentage">45%</div>
                       </div>
            </div>
            </div>

            {/* Bottom styles */}
            <div className="Container">
                <div className="Expenses">
                  <h4 className="Expenses__title">Expenses</h4>
                  <div className="Expenses__inputs">
                     <input type="text" className="Expenses__description" placeholder="Add Item"/>
                     <input type="number" className="Expenses__value" placeholder="Value"/>
                     <button className="Expenses__btn"><i class="far fa-check-circle"></i></button> 
                  </div>
               
                <div class="Expenses__list">
                        <div className="Item " id="expense-0">
                            <div className="Item__inbox">
                            <div className="Item__description">Apartment rent</div>   
                                <div className="Item__value">- 900.00</div>
                                <div className="Item__percentage">21%</div>
                                <div className="Item__delete">
                                    <button className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="Item" id="expense-1">
                            <div className="Item__inbox ">
                            <div className="Item__description">Grocery shopping</div>
                                <div className="Item__value">- 435.28</div>
                                <div className="Item__percentage">10%</div>
                                <div className="Item__delete">
                                    <button className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
                                </div>
                            </div>
                        </div>
                        
                </div>
              </div> 
                 <div className="Date"> 
                    <h4 className="Expenses__title">salary</h4>
                    <input type="text" className="Date__description" placeholder="salary"/>
                     <input className="date__input" type="date" name="salaryDate" id="salary"></input>
                     <button className="Expenses__btn"><i className="far fa-check-circle"></i></button> 
                </div>
            </div>
                </div>

         );
    }
}
 
export default Budget;