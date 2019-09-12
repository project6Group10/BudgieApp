import React, { Component } from 'react';
import Avatar from '../avatar.jpeg';

class About extends Component {
   
    render() { 
     return ( 
      <section className="section-about Container">
        <h2 className="heading-secondary">Why budgie</h2>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-teretiary">who we are</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac eros eget purus molestie rhoncus eu quis mi. Proin faucibus ullamcorper interdum. Donec mattis pulvinar mauris, eu euismod purus placerat vitae. Curabitur eget augue sed dui aliquam consectetur. Vivamus eu elit ac nisl imperdiet pharetra. Fusce lacinia laoreet nunc, ut blandit dui vehicula
            </p>
            <a href="#test" className="btn-text">start &#x02193;</a>
          </div>
          <div className="col-2-of-2">
            <div className="composition">
              <img src={Avatar} alt="Young boy" className="composition__photo" />
            </div>
          </div>
        </div>
      </section> );
    }
}
 
export default About;