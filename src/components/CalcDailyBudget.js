import React, { Component } from 'react';
import firebase from '../firebase';
import DisplayDailyAmount from './DisplayDailyAmount';

class CalcDailyBudget extends Component {
    constructor() {
        super();
        this.state = {
            expenseTotal: [],
            currentDate: "",
            nextPayday: "",
            daysDifference: 0,
            salaryAmount: "",
            dailyBudget: ""
        }
    }

    getTodaysDate = () => {
        const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        this.setState({
            currentDate: date,
        })
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

        this.getTodaysDate();
        const dateRef = firebase.database().ref('salaryItems').orderByChild('salaryDate')
        dateRef.on('value', date => {
            const dateArray = date.val();
            for (let key in dateArray) {
                this.setState({
                    nextPayday: dateArray[key].salaryDate
                }, () => {
                    let date1 = new Date(this.state.currentDate.toString());
                    let date2 = new Date(this.state.nextPayday.toString());
                    const Difference_In_Time = date2.getTime() - date1.getTime();
                    const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
                    this.setState({
                        daysDifference: Difference_In_Days,
                    })
                }

                )
            }
        })

        const amountRef = firebase.database().ref('salaryItems').orderByChild('salaryAmount')
        amountRef.on('value', amount => {
            const salary = amount.val();
            for (let key in salary) {
                this.setState({
                    salaryAmount: salary[key].salaryAmount
                }, () => {
                    const budget = this.state.salaryAmount / this.state.daysDifference;
                    this.setState({
                        dailyBudget: budget.toFixed(2),
                    })
                })
            }
        })
    }

    render() {
        return (
            <div>
                <DisplayDailyAmount
                    days={this.state.daysDifference}
                    total={this.state.expenseTotal}
                    income={this.state.salaryAmount}
                    budget={this.state.dailyBudget}
                />
            </div>
        )
    }
}

export default CalcDailyBudget;