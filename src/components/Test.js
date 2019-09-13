





////////////////////// this is where we keep code we use later 
///// Test.js will be deleted after 

import React, { Component } from 'react'

class Test extends Component {
    state = {  }


    componentDidMount() {
    // To set two dates to two variables 
        let date1 = new Date("06-30-2019"); 
        let date2 = new Date("07-30-2019"); 

        var Difference_In_Time = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates 
           var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
           console.log(Difference_In_Days);


            // var today = new Date();
            // var dd = String(today.getDate()).padStart(2, '0');
            // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            // var yyyy = today.getFullYear();

            // today = mm + '/' + dd + '/' + yyyy;
            // document.write(today);

            var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            console.log(utc);
        }

    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Test;