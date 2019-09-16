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

    //FUNCTION GRABS TODAY'S DATE USING JS
    getTodaysDate = () => {
        //SAVES DATE TO CONSTANT AND SLICES OUT EXTRNEOUS I?NFORMATIO?N
        const now = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        // SAVES DATE IN STATE
        this.setState({
            currentDate: now,
        })
    }
    
    componentDidMount() {
        
        // SETS A CONST FOR THE EXPENSE ITEMS FIREBASE REFERENCE
        const expRef = firebase.database().ref('expenseItems').orderByChild('expenseAmount')
        // LISTENS FOR CHANGE IN FIREBASE EXPENSE AMOUNTS
        expRef.on('value', expenses => {
            // PULLS VALUES INTO A LOCAL ARRAY FOR MANIPULATION
            const expenseArray = expenses.val()
            const newArray = [];
            // MAPS THROUGH THE OBJECT AND PUSHES EACH ITEM TO AN ARRAY
            for (let key in expenseArray) {
                //ENSURES EACH VALUE IS SAVED AS A NUMBER
                newArray.push(Number(expenseArray[key].expenseAmount));
            }
            //SETS UP REDUCER METHOD TO SUM EXPENSE AMOUNTS
            const reducer = (a, b) => a + b;
            //RUNS REDUCER ON ARRAY OF EXPENSE AMOUNTS
            const total = newArray.reduce(reducer)
            // PUSHES EXPENSE TOTAL TO STATE
            this.setState({
                expenseTotal: total,
                // WAITS FOR EXPENSETOTAL TO BE SET THEN RECALCULATES DAILY BUDGET
            }, () => {
                const budget = (this.state.salaryAmount - this.state.expenseTotal) / this.state.daysDifference;
                this.setState({
                    dailyBudget: budget.toFixed(2),
                })
            })
        })

        this.getTodaysDate();
        //SETS UP CONSTANT FOR FIREBASE REFERENCE FOR SALARY DATE
        const dateRef = firebase.database().ref('salaryItems').orderByChild('salaryDate')
        // LISTENS FOR CHANGE IN SALARY DATES
        dateRef.on('value', date => {
            // PULLS FIREBASE DATES INTO LOCAL ARRAY FOR MANIPULATION
            const dateArray = date.val();
            // SETS STATE TO EACH ITEM IN DATEARRAY WILL RESULT IN THE MOST RECENTLY ADDED ITEM BEING SAVED
            for (let key in dateArray) {
                this.setState({
                    nextPayday: dateArray[key].salaryDate
                    // WAITS FOR DATE TO BE SET THEN CALCULATES THE DIFFERENCE IN DAYS BETWEEN THEN AND NOW
                }, () => {
                    let date1 = new Date(this.state.currentDate.toString());
                    let date2 = new Date(this.state.nextPayday.toString());
                    const Difference_In_Time = date2.getTime() - date1.getTime();
                    const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
                    this.setState({
                        daysDifference: Difference_In_Days,
                    })
                })
            }
        })

        // SETS CONSTANT FOR FIREBASE REFERENCE FOR SALARY AMOUNTS
        const amountRef = firebase.database().ref('salaryItems').orderByChild('salaryAmount')
        // LISTENS FOR CHANGE IN SALARY AMOUNTS
        amountRef.on('value', amount => {
            const salary = amount.val();
            // GOES THROUGH ALL AMMOUNTS AND SETS STATE
            //***************** NEEDS TO BE FIXED TO SUM AMOUNTS *****************/
            for (let key in salary) {
                this.setState({
                    salaryAmount: salary[key].salaryAmount
                    // RECALCULATES DAILY BUDGET ON CHANGE
                }, () => {
                    const budget = (this.state.salaryAmount - this.state.expenseTotal) / this.state.daysDifference;
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