import React from 'react';
import firebase from '../firebase';

const DisplayPaydayItems = (props) => {
    const removeItem = () => {
        firebase.database().ref().child('salaryItems').child(props.uid).remove()
    }
    
    return (
        <div className="Item__inbox">
            <div className="Item__value">${parseFloat(props.amount).toFixed(2)}</div>
            <div className="Item__date">{props.date}</div>
            <div className="Item__delete">
                <button className="Item__delete--btn" onClick={() => removeItem()}><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

export default DisplayPaydayItems;