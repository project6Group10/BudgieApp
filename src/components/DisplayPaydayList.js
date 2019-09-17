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
            <ul className="Salary__list">
            {this.state.paydayLog ? 
                Object.keys(this.state.paydayLog).map((payday, index) => {
                    return (
                        <li className="Item" key={payday}>
                            <DisplayPaydayItems 
                                date={this.state.paydayLog[payday]['salaryDate']}
                                amount={this.state.paydayLog[payday]['salaryAmount']}
                                key={index}
                            />
                        </li>             
                    );
                }) : <li><p className="accessible">Enter Payday Information Above</p></li>}
            </ul>
        )
    }
}
 
export default DisplayPaydayList;