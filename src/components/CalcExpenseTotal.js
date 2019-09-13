import React, { Component } from 'react';
import firebase from '../firebase'
class CalcExpenseTotal extends Component {
    constructor() {
        super();
        this.state = {
            expenseTotal: [],
        }
    }

    componentDidMount() {
        const expRef = firebase.database().ref('expenseItems').orderByChild('expenseAmount')
        expRef.on('value', expenses => {
            const expenseArray = expenses.val()
            const newArray = [];
            for (let key in expenseArray) {
                newArray.push(Number(expenseArray[key].expenseAmount));
            }
            const reducer = (a, b) => a + b;
            const total = newArray.reduce(reducer)
            this.setState({
                expenseTotal: total,
            })
        })
        
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