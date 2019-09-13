import React, { Component } from 'react';
import Avatar from '../avatar.jpeg';
import { Link } from 'react-router-dom';

class About extends Component {
   
    render() { 
     return ( 
      <section className="section-about Container">
        {/* TODO: Style is thang v (button) */}
        <Link to="/">Home</Link>
        <h2 className="heading-secondary">Why budgie</h2>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-teretiary">who we are</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac eros eget purus molestie rhoncus eu quis mi. Proin faucibus ullamcorper interdum. Donec mattis pulvinar mauris, eu euismod purus placerat vitae. Curabitur eget augue sed dui aliquam consectetur. Vivamus eu elit ac nisl imperdiet pharetra. Fusce lacinia laoreet nunc, ut blandit dui vehicula
            </p>
            <Link to="/Budgie" className="btn-text">Start &#x02193;</Link>
          </div>
          <div className="col-2-of-2">
            <div className="composition">
              <img src={Avatar} alt="Two faceless animated people" className="composition__photo" />
            </div>
          </div>
        </div> 
      </section> 
      
      );
    }
}
 
export default About;