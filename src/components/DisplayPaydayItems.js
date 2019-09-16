import React from 'react';

const DisplayPaydayItems = (props) => {
    return (
        <div className="Item__inbox">
            <div className="Item__value">${props.amount} </div>
            <div className="Item__value">${props.date}</div>

            <div className="Item__delete">
                    <button className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
            </div>
        </div>
    )
}

export default DisplayPaydayItems;