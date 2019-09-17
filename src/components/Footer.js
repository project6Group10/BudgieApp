import React from 'react';

const Footer = () =>  {
        return ( 
            <footer className="Footer">
                <ul className="Footer__social-media">
                    <li className="Footer__social-media-item">
                        <a 
                            className="Footer__social-media-link" 
                            href="https://www.instagram.com"
                            aria-label="Go to Instagram"
                        >
                            <i className="fab fa-instagram"
                            aria-hidden="true">
                            </i>
                        </a>
                    </li>
                    <li className="Footer__social-media-item">
                        <a 
                            className="Footer__social-media-link" 
                            href="https://www.facebook.com/BudgieApp/"
                            aria-label="Go to Facebook"
                        >
                            <i className="fab fa-facebook-f"
                            aria-hidden="true">
                            </i>
                        </a>
                    </li>
                    <li className="Footer__social-media-item">
                        <a 
                            className="Footer__social-media-link" 
                            href="https://twitter.com"
                            aria-label="Go to Twitter"
                        >
                            <i className="fab fa-twitter"
                            aria-hidden="true">
                            </i>
                        </a>
                    </li>
                </ul>
            </footer>
        ); 
}
 
export default Footer;