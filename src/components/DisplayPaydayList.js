import React, { Component } from 'react';
import firebase from 'firebase';
import DisplayPaydayItems from './DisplayPaydayItems';

class DisplayPaydayList extends Component {
    constructor() {
        super();
        this.state = {
            paydayLog: {},
        }

        this.salaryRef = firebase.database().ref().child('salaryItems');
    }

    componentDidMount() {
        this.salaryRef.on('value', (data) => {
            const response = data.val();
            
            this.setState({
                paydayLog: response,
            });
        })
    }

    render() { 
        return ( 
            <ul className="">
                {Object.keys(this.state.paydayLog).map((payday, index) => {
                    return (
                        <DisplayPaydayItems 
                            date={this.state.paydayLog[payday]['salaryDate']}
                            amount={this.state.paydayLog[payday]['salaryAmount']}
                            key={index}
                        />
                        
                    );
                })}
            </ul>
        );
    }
}
 
export default DisplayPaydayList;