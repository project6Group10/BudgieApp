import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="Footer">
               <ul className="Footer__social-media">
                    <li className="Footer__social-media-item">
                        <a className="Footer__social-media-link" href="#twitter">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="Footer__social-media-item">
                        <a className="Footer__social-media-link" href="#facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="Footer__social-media-item">
                        <a className="Footer__social-media-link" href="#twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </footer>
         );
    }
}
 
export default Footer;