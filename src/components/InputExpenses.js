import React, { Component } from 'react';
import firebase from '../firebase';

class InputExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            expenseName: '',
            expenseAmount: '',
            expenseDateInput: '',
        }

        this.expenseRef = firebase.database().ref().child('expenseItems');
        this.expenseInputRef = React.createRef();
    }

    handleNameChange = (event) => {
        this.setState({
            expenseName: event.target.value
        });
    }

    handleAmountChange = (event) => {
        this.setState({
            expenseAmount: event.target.value
        });
    }

    handleDateInput = (event) => {   
        this.setState({
            expenseDateInput: event.target.value
        });
    }

    handleClick = event => {
        event.preventDefault();

        if (this.state.expenseName !== '' && this.state.expenseAmount > 0 && this.state.expenseDateInput !== '') {

            this.expenseRef.push({
                expenseName: this.state.expenseName,
                expenseAmount: Number(this.state.expenseAmount).toFixed(2).replace(/^0+/,''),
                expenseDate: this.state.expenseDateInput
            });

            this.setState({
                expenseName: '',
                expenseAmount: '',
                expenseDateInput: ''
            });

            this.expenseInputRef.current.reset();

        } else if (this.state.expenseName === '') {
            alert("Please enter a description for the expense item.");
        } else if (this.state.expenseAmount <= 0) {
            alert("Enter an expense amount greater than 0!");
        } else if (this.state.expenseDateInput === '') {
            alert("Please enter a date for the expense item!");
        }
    }

    render() { 
        return ( 
            <section>
                <h4 className="Expenses__title">Expenses</h4>
                <form className="Expenses__inputs" id="expensesInputForm" ref={this.expenseInputRef}>
                    <label htmlFor="expenseDesc" className="visuallyHidden">Input Expense Description:</label>
                    <input 
                        type="text"                                   
                        className="Expenses__description" 
                        placeholder="Expense Description"
                        onChange={this.handleNameChange}
                        value={this.state.expenseName}
                        name="expenseDesc" 
                        id="expenseDesc"
                    />

                    <label htmlFor="expenseValue" className="visuallyHidden">Input Expense Amount:</label>
                    <input 
                        type="number" 
                        className="Expenses__value" 
                        placeholder="Amount" 
                        onChange={this.handleAmountChange}
                        value={this.state.expenseAmount}
                        name="expenseValue" 
                        id="expenseValue"
                    />

                    <label htmlFor="expenseDate" className="visuallyHidden">Input Expense Date:</label>
                    <input 
                        type="date" 
                        className="Expenses__date"
                        placeholder="Date" 
                        onChange={this.handleDateInput}
                        name="expenseDate" 
                        id="expenseDate"
                    />

                    <button 
                        className="Expenses__btn" 
                        onClick={this.handleClick}
                        aria-label="Submit expense."
                        aria-hidden="true"
                    >
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </form>
            </section>
        );
    }
}

export default InputExpenses;