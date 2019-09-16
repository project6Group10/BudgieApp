import React, { Component } from 'react';
import firebase from '../firebase';
import DisplayExpenseItems from './DisplayExpenseItems';

class DisplayExpenseList extends Component {
    constructor() {
        super();
        this.state = {
            expenseLog: {},
        }
    }

    componentDidMount() {
        //UPDATES EXPENSELOG STATE ON FIREBASE CHANGE
        const dbRef = firebase.database().ref().child('expenseItems')
        dbRef.on('value', expenses => {
            this.setState({
                expenseLog: expenses.val(),
            });
        });
    }

    render() { 
        return ( 
            <ul className="Expenses__list">
                {Object.keys(this.state.expenseLog).map((expense, index) => {
                    return (
                        <li className="Item" key={index}>
                            <DisplayExpenseItems 
                                name={this.state.expenseLog[expense]['expenseName']}
                                amount={this.state.expenseLog[expense]['expenseAmount']}
                                date={this.state.expenseLog[expense]['expenseDate']}
                                uid={expense}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default DisplayExpenseList;