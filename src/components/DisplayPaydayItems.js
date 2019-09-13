import React from 'react';
import firebase from '../firebase';

const DisplayPaydayItems = (props) => {
    return (
        <li>
            <p className="">${props.amount} <span>{props.date}</span></p>
        </li>
    )
}

export default DisplayPaydayItems;