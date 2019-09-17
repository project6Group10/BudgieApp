import React from 'react';
import firebase from '../firebase';


const DisplayExpenseItems = (props) => {

    const removeItem = () => {
        firebase.database().ref().child('expenseItems').child(props.uid).remove();
    }

    return (
        <div className="Item__inbox">
            <span className="Item__description">{props.name}</span>
            <span className="Item__value">-${parseFloat(props.amount).toFixed(2)}</span>
            <span className="Item__date">{props.date}</span>
            <span className="Item__delete">
                <button 
                    onClick={() => removeItem()} 
                    className="Item__delete--btn"
                    aria-label="Delete expense item."
                    aria-hidden="true"
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </span>
        </div>
    );
}

export default DisplayExpenseItems;