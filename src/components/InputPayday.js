import React, { Component } from 'react';
import firebase from '../firebase';
import DisplayPayday from './DisplayPayday';

// Take user input for Salary and handle it
// Take user input for Date and handle it
// Push those to Firebase, so CalcDailyBudget and CalcPayDay can use this info


class InputPayday extends Component {
    constructor() {
        super();
        this.state = { 
            currentSalary: 0,
            salaryInput: 0,
            salaryDateInput: '',
        }

        this.salaryRef = firebase.database().ref().child('salaryItems');
    }

    componentDidMount() {
        this.salaryRef.on('value', (data) => {
            const response = data.val();
            console.log(response);
            this.setState({
                currentSalary: response.salaryAmount
            })
        })
    }

    handleSalaryInput = (event) => {
        console.log(this.state.salaryInput);        
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
        console.log(this.state.salaryInput);

        if (this.state.salaryInput > 0 && this.state.salaryDateInput) {
            this.salaryRef.push({
                salaryAmount: this.state.salaryInput,
                salaryDate: this.state.salaryDateInput,
            });

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
            <DisplayPayday 
                salaryInput={this.handleSalaryInput}
                dateInput={this.handleSalaryDateInput}
                buttonClick={this.handleSalarySubmit}
            />
        );
    }
}
 
export default InputPayday;