import React, { Component } from 'react';
import firebase from '../firebase';

class InputExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expenseName: "",
            expenseAmount: 0,
         }

        this.expenseRef = firebase.database().ref().child('expenseItems');
    }

    handleNameChange = event => {
        this.setState({
            expenseName: event.target.value,
        })
    }

    handleAmountChange = event => {
        this.setState({
            expenseAmount: event.target.value,
        })
    }

    handleClick = event => {
        event.preventDefault();
        this.expenseRef.push({
            expenseName: this.state.expenseName,
            expenseAmount: this.state.expenseAmount,
        })
        this.setState({
            expenseName: "",
            expenseAmount: 0,
        })

    }

    render() { 
        return ( 
            <div>
                <h4 className="Expenses__title">Expenses</h4>
                <div className="Expenses__inputs">
                    <input 
                        type="text"                                   
                        className="Expenses__description" 
                        placeholder="Add Item"
                        onChange={this.handleNameChange}
                        value={this.state.expenseName}
                    />
                    <input 
                        type="number" 
                        className="Expenses__value" 
                        placeholder="Value" 
                        onChange={this.handleAmountChange}
                        value={this.state.expenseAmount}
                    />
                    <button className="Expenses__btn" onClick={this.handleClick}>
                        <i className="far fa-check-circle"></i>
                    </button>
                </div>
            </div>
         );
    }
}
 
export default InputExpenses;