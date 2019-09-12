import React, { Component } from 'react';
import firebase from '../firebase';

// Take user input for Salary and handle it
// Take user input for Date and handle it
// Push those to Firebase, so CalcDailyBudget and CalcPayDay can use this info


class InputPayday extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentSalary: 0,
            salaryInput: 0,
            salaryDateInput: '',
        }

        this.salaryRef = firebase.database();
    }

    componentDidMount() {
        this.salaryRef.ref().on('value', (data) => {
            const response = data.val();
            console.log(response);

            this.setState({
                currentSalary: response.salaryAmount
            })
        })
    }

    handleSalaryInput = (event) => {
        this.setState({
            salaryInput: event.target.value
        })
    }

    handleSalaryDateInput = (event) => {

        // TODO: Add error handling past dates
        
        this.setState({
            salaryDateInput: event.target.value
        })
    }

    handleSalarySubmit = (event) => {
        event.preventDefault();

        if (this.state.salaryInput > 0 && this.state.salaryDateInput) {

            this.salaryRef.ref("salaryAmount").set(this.state.salaryInput);
            this.salaryRef.ref("payDate").set(this.state.salaryDateInput);
            
            this.setState({
                salaryInput: "",
                salaryDateInput: 0,
            });

        } else if (this.state.salaryInput <= 0) {
            alert("Enter a salary amount greater than 0!");
        } else if (this.state.salaryDateInput === '') {
            alert("Please enter a pay date!");
        } else {
            alert("Please enter a salary amount and pay date!");
        }
    }
    
    render() { 
        return ( 
            <form action="" id="salaryInputForm">
                <label htmlFor="salaryAmount" className="visuallyHidden">Input Salary Amount:</label>
                <span>$</span>
                <input 
                    type="number" 
                    onChange={this.handleSalaryInput}
                    className="Date__description" 
                    name="salaryAmount" 
                    id="salaryAmount" 
                    placeholder="Salary Amount (ie. 1000)"
                />

                <label htmlFor="salary" className="visuallyHidden">Input Salary Date:</label>
                <input 
                    type="date" 
                    onChange={this.handleSalaryDateInput}
                    className="date__input" 
                    name="salaryDate" 
                    id="salaryDate"
                />

                <button 
                    onClick={this.handleSalarySubmit} 
                    className="Expenses__btn"
                    aria-label="Submit payday."
                    aria-hidden="true"
                >
                    <i className="far fa-check-circle"></i>
                </button> 
            </form>
         );
    }
}
 
export default InputPayday;