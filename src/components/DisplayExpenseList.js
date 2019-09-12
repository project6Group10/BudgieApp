import React, { Component } from 'react';

class DisplayExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Expenses__list">
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
            </div>
        );
    }
}
 
export default DisplayExpenseList;