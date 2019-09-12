import React, { Component } from 'react';
import firebase from '../firebase'
class CalcExpenseTotal extends Component {
    constructor() {
        super();
        this.state = {
            expenseArray: [],
            expenseTotal: [],
        }
    }

    componentDidMount() {
        const expRef = firebase.database().ref('expenseItems').orderByChild('expenseAmount')
        expRef.on('value', expenses => {
            this.setState({
                expenseArray: expenses.val(),
            })
        })
    }

    componentDidUpdate() {
        console.log(this.state.expenseArray);
        for (let key in this.state.expenseArray) {
            console.log(key)
        }
    }
    

    render() {
        return (
            <div>
                <p>Total</p>
                <span>Ammount</span>

            </div>
        )
    }
}

export default CalcExpenseTotal;