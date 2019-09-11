import React from 'react';

const DisplayExpenses = () => {
    return (
        <div>
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
        </div> 
    )
}

export default DisplayExpenses;