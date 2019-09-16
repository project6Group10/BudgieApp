import React from 'react';
import firebase from '../firebase';


const DisplayExpenseItems = (props) => {
    // const uid = props.uid
    const removeItem = () => {
        firebase.database().ref().child('expenseItems').child(props.uid).remove()
    }
    return (
        <div className="Item__inbox">
            <span className="Item__description">{props.name}</span>
            <span className="Item__value">- ${props.amount}</span>
            <span className="Item__date">{props.date}</span>
            <span className="Item__delete">
                <button onClick={(uid) => removeItem(uid)} className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
            </span>
        </div>
    )
}

export default DisplayExpenseItems;