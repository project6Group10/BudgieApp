import React from 'react';
import firebase from '../firebase';


const DisplayExpenseItems = (props) => {
    // const uid = props.uid
    const removeItem = () => {
        firebase.database().ref().child('expenseItems').child(props.uid).remove();
        // if(props.index === 0) {
        //  firebase.database().ref().child('expenseItems').push({
        //      expenseName: 'Enter your expense name',
        //      expenseAmount: 0
        //  })
        // }
    }
    return (
<<<<<<< HEAD
        <div className="Item__inbox">
            <span className="Item__description">{props.name}</span>
            <span className="Item__value">- ${props.amount}</span>
            <span className="Item__date">{props.date}</span>
            <span className="Item__delete">
                <button onClick={(uid) => removeItem(uid)} className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
            </span>
=======
        <div>
            <div className="Item__inbox">
                <div className="Item__description">{props.name}</div>
                <div className="Item__value">- {props.amount}</div>
                {/* <div className="Item__percentage"></div> */}
                <div className="Item__delete">
                    <button onClick={() => removeItem()} className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
                </div>
            </div>
>>>>>>> date-remove
        </div>
    )
}

export default DisplayExpenseItems;