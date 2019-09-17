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
            {this.state.expenseLog ?
                Object.keys(this.state.expenseLog).reverse().map((expense, index) => {
                    return ( 
                        <li className="Item" key={index}>
                            <DisplayExpenseItems 
                                name={this.state.expenseLog[expense]['expenseName']}
                                amount={this.state.expenseLog[expense]['expenseAmount']}
                                date={this.state.expenseLog[expense]['expenseDate']}
                                index={index}
                                uid={expense}
                            />
                        </li>
                    );
                }) : <li><p className="accessible" >Input Expense Above</p></li>}
            </ul>
        )
    }
}

export default DisplayExpenseList;