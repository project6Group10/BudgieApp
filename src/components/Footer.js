import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="Footer">
                <ul className="Footer__social-media">
                    <li className="Footer__social-media-item">
                        <a className="Footer__social-media-link" href="https://www.instagram.com">
                            <i className="fab fa-instagram"
                            aria-label="Go to Instagram"
                            aria-hidden="true">
                            </i>
                        </a>
                    </li>
                    <li className="Footer__social-media-item">
                        <a className="Footer__social-media-link" href="https://www.facebook.com">
                            <i className="fab fa-facebook-f"
                            aria-label="Go to Facebook"
                            aria-hidden="true">
                            </i>
                        </a>
                    </li>
                    <li className="Footer__social-media-item">
                        <a className="Footer__social-media-link" href="https://twitter.com">
                            <i className="fab fa-twitter"
                            aria-label="Go to twitter"
                            aria-hidden="true">
                            </i>
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}
 
export default Footer;