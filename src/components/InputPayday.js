import React, { Component } from 'react';
import firebase from '../firebase';
import Swal from 'sweetalert2';
import DisplayPayday from './DisplayPayday';

class InputPayday extends Component {
    constructor() {
        super();
        this.state = { 
            currentSalary: 0,
            salaryInput: 0,
            salaryDateInput: '',
        }

        this.salaryRef = firebase.database().ref().child('salaryItems').child('key');
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
        this.setState({ salaryDateInput: event.target.value })
    }

    handleSalarySubmit = (event) => {
        event.preventDefault();
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const now = tomorrow.toJSON().slice(0, 10).replace(/-/g, '/');
        const payday = new Date(this.state.salaryDateInput).toJSON().slice(0, 10).replace(/-/g, '/');

        if (this.state.salaryInput > 0 && this.state.salaryDateInput && payday > now) {
            this.salaryRef.set({
                salaryAmount: this.state.salaryInput,
                salaryDate: this.state.salaryDateInput,
            });

            this.setState({
                salaryInput: '',
                salaryDateInput: '',
            });

            this.salaryInputRef.current.reset();

        } else if (this.state.salaryInput <= 0) {
            Swal.fire(
                'Whoops...',
                'Enter a salary amount greater than 0!',
                'error'
            );
            this.salaryInputRef.current.reset();
        } else if (this.state.salaryDateInput === '') {
            Swal.fire(
                'Whoops...',
                'Please enter a pay date!',
                'error'
            );
        } else if (payday < now) {
            console.log('bad')
                Swal.fire(
                    'Whoops...',
                    'Please enter a date after today.',
                    'error'
                );
                event.target.value = "";
        } else {
            Swal.fire(
                'Uh oh...',
                'Missing pay date and pay amount information!',
                'error'
            );
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