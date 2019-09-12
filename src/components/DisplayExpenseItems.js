import React from 'react';
import firebase from '../firebase';


const DisplayExpenseItems = (props) => {
    const uid = props.uid
    const removeItem = () => {
        firebase.database().ref().child('expenseItems').child(props.uid).remove()
    }
    return (
        <div>
            <div className="Item__inbox">
                <div className="Item__description">{props.name}</div>
                <div className="Item__value">- {props.amount}</div>
                {/* <div className="Item__percentage"></div> */}
                <div className="Item__delete">
                    <button onClick={(uid) => removeItem(uid)} className="Item__delete--btn"><i className="far fa-times-circle"></i></button>
                </div>
            </div>
        </div>
    )
}

export default DisplayExpenseItems;