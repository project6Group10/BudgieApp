import React from 'react';

const DisplayExpenseItems = (props) => {
    return (
        <div>
            <div className="Item__inbox">
                <div className="Item__description">Apartment rent</div>
                <div className="Item__value">- 900.00</div>
                <div className="Item__percentage">21%</div>
                <div className="Item__delete">
                    <button className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
                </div>
            </div>
        </div>
    )
}

export default DisplayExpenseItems;