import React, { Component } from 'react';
import firebase from '../firebase';
import CalcDailyBudget from './CalcDailyBudget';

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
              <CalcDailyBudget total={this.state.expenseTotal}/>
            </div>
        )
    }
}

export default CalcExpenseTotal;