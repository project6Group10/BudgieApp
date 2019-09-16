import React from 'react';
import firebase from '../firebase';

const DisplayPaydayItems = (props) => {
    const removeItem = () => {
        firebase.database().ref().child('salaryItems').child(props.uid).remove()
    }
    return (
        <div className="Item__inbox">
            <div className="Item__value">${props.amount} </div>
            <div className="Item__value">{props.date}</div>

            <div className="Item__delete">
                    <button className="Item__delete--btn" onClick={() => removeItem()}><i className="far fa-times-circle"></i></button>
            </div>
        </div>
    )
}

export default DisplayPaydayItems;