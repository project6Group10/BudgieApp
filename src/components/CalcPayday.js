import React, { Component } from 'react';
import firebase from '../firebase';

class CalcPayday extends Component {
    constructor() {
        super();
        this.state = {
            currentDate: "",
            nextPayday: "",
            daysDifference: "",
        }
        const dateRef = firebase.database().ref().child('salaryItems').orderByChild('salaryDate');
    }

    getTodaysDate = () => {
        const today = new Date();
        const date = ('0' + today.getFullYear()).slice(-2) + `-` + ('0' + (today.getMonth() + 1)).slice(-2) + `-` + ('0' + today.getDate()).slice(-2);
        this.setState({
            currentDate: date,
        })
    }

    componentDidMount() {
        const dateRef = firebase.database().ref('salaryItems').orderByChild('salaryDate')
        dateRef.on('value', date => {
            const dateArray = date.val();
            for (let key in dateArray) {
                this.setState({
                    nextPayday: dateArray[key].salaryDate
                })
            }
        })
    }
    
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default CalcPayday;