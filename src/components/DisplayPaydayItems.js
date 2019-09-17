import React from 'react';
import firebase from '../firebase';
import { promised } from 'q';

const DisplayPaydayItems = (props) => {
    const removeItem = () => {
        firebase.database().ref().child('salaryItems').child(props.uid).remove()
    }
    
    return (
        <div className="Item__inbox">
            <span className="Item__value">${parseFloat(props.amount).toFixed(2)}</span>
            <span className="Item__date">{props.date}</span>
            <span className="Item__delete">
                <button 
                    className="Item__delete--btn" 
                    onClick={() => removeItem()}
                    aria-label="Delete payday item."
                    aria-hidden="true"
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </span>
        </div>
    )
}

export default DisplayPaydayItems;