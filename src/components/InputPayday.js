import React, { Component } from 'react';
import firebase from '../firebase';
import DisplayPayday from './DisplayPayday';

class InputPayday extends Component {
    constructor() {
        super();
        this.state = { 
            currentSalary: 0,
            salaryInput: 0,
            salaryDateInput: '',
        }

        this.salaryRef = firebase.database().ref().child('salaryItems');
        this.salaryInputRef = React.createRef();
        

    }

    handleSalaryInput = (event) => {
        const salary = event.target.value
        const salaryInput = Number(salary).toFixed(2)
        this.setState({
            salaryInput
        })
    }

    handleSalaryDateInput = (event) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const now = tomorrow.toJSON().slice(0, 10).replace(/-/g, '/');
        const payday = new Date(event.target.value).toJSON().slice(0, 10).replace(/-/g, '/');
        if(payday < now){
           alert("Please enter a date after today");
           event.target.value = "";
        } else {
            this.setState({
                salaryDateInput: event.target.value
            })
        } 
        
    }

    handleSalarySubmit = (event) => {
        event.preventDefault();

        if (this.state.salaryInput > 0 && this.state.salaryDateInput) {
            this.salaryRef.push({
                salaryAmount: this.state.salaryInput,
                salaryDate: this.state.salaryDateInput,
            });

            this.setState({
                salaryInput: '',
                salaryDateInput: '',
            });

            this.salaryInputRef.current.reset();

        } else if (this.state.salaryInput <= 0) {
            alert("Enter a salary amount greater than 0!");
            this.salaryInputRef.current.reset();
        } else if (this.state.salaryDateInput === '') {
            alert("Please enter a pay date!");
        } else {
            alert("Please enter a salary amount and pay date!");
        }
    }
    
    render() { 
        return ( 
            <DisplayPayday 
                salaryInputRef={this.salaryInputRef}
                salaryInput={this.handleSalaryInput}
                dateInput={this.handleSalaryDateInput}
                buttonClick={this.handleSalarySubmit}
            />
        );
    }
}
 
export default InputPayday;