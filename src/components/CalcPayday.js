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
        const dateRef = firebase.database().ref().child('salaryItems').orderByChild('salaryAmount');
    }

    getTodaysDate = () => {
        const today = new Date();
        const date = ('0' + today.getFullYear()).slice(-2) + `-` + ('0' + (today.getMonth() + 1)).slice(-2) + `-` + ('0' + today.getDate()).slice(-2);
        this.setState({
            currentDate: date,
        })
    }

    componentDidMount() {
        const dateRef = firebase.database().ref().child('salaryItems')
        this.getTodaysDate();
        this.setState({
            nextPayday: dateRef
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