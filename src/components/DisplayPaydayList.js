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
            <div className="Expenses__list">
                {Object.keys(this.state.paydayLog).map((payday, index) => {
                    return (
                        <div className="Item">
                            <DisplayPaydayItems 
                                date={this.state.paydayLog[payday]['salaryDate']}
                                amount={this.state.paydayLog[payday]['salaryAmount']}
                                key={index}
                            />
                        </div>             
                    );
                })}
            </div>
        );
    }
}
 
export default DisplayPaydayList;