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
        <div className="Item__inbox">
            <div className="Item__description">{props.name}</div>
            <div className="Item__value">-${parseFloat(props.amount).toFixed(2)}</div>
            <div className="Item__date">{props.date}</div>
            <div className="Item__delete">
                <button onClick={() => removeItem()} className="Item__delete--btn"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

export default DisplayExpenseItems;