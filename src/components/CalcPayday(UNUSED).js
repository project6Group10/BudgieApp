import React, { Component } from 'react';
import firebase from '../firebase';
import CalcDailyBudget from './CalcDailyBudget';


class CalcPayday extends Component {
    constructor() {
        super();
        this.state = {
            currentDate: "",
            nextPayday: "",
            daysDifference: 0,
        }
    }

    getTodaysDate = () => {
        const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        this.setState({
            currentDate: date,
        })
    }

    componentDidMount() {
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
                    })}
        
            )}
        })
    }
    
    render() {
        return (
            <CalcDailyBudget days={this.state.daysDifference}/>
        )
    }
}

export default CalcPayday;